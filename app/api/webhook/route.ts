import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: NextRequest) {
    // Initialize Stripe client inside the handler to avoid build-time errors
    if (!process.env.STRIPE_SECRET_KEY) {
        console.error('Missing STRIPE_SECRET_KEY');
        return NextResponse.json(
            { error: 'Stripe not configured' },
            { status: 500 }
        );
    }

    if (!process.env.STRIPE_WEBHOOK_SECRET) {
        console.error('Missing STRIPE_WEBHOOK_SECRET');
        return NextResponse.json(
            { error: 'Webhook secret not configured' },
            { status: 500 }
        );
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: '2025-11-17.clover',
    });

    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    const body = await req.text();
    const signature = req.headers.get('stripe-signature')!;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err: any) {
        console.error('Webhook signature verification failed:', err.message);
        return NextResponse.json(
            { error: 'Webhook signature verification failed' },
            { status: 400 }
        );
    }

    // Handle the event
    if (event.type === 'payment_intent.succeeded') {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        const email = paymentIntent.metadata.email;

        console.log('Payment succeeded:', {
            email,
            amount: paymentIntent.amount / 100,
            timestamp: new Date().toISOString(),
            paymentIntentId: paymentIntent.id,
        });

        // Send email with PDF attachment
        try {
            const emailResponse = await fetch(
                `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/send-email`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                        paymentIntentId: paymentIntent.id,
                    }),
                }
            );

            if (!emailResponse.ok) {
                console.error('Failed to send email:', await emailResponse.text());
            } else {
                console.log('Email sent successfully to:', email);
            }
        } catch (emailError) {
            console.error('Error sending email:', emailError);
        }
    }

    return NextResponse.json({ received: true });
}
