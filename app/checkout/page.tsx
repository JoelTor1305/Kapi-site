'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CheckoutForm from '../../components/sections/CheckoutForm';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutPage() {
    const [clientSecret, setClientSecret] = useState('');
    const [email, setEmail] = useState('');
    const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            setClientSecret(data.clientSecret);
            setIsEmailSubmitted(true);
        } catch (error) {
            console.error('Error creating payment intent:', error);
            alert('Failed to initialize checkout. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const appearance = {
        theme: 'night' as const,
        variables: {
            colorPrimary: '#D4AF37',
            colorBackground: '#1a1a1a',
            colorText: '#ffffff',
            colorDanger: '#df1b41',
            fontFamily: 'system-ui, sans-serif',
            spacingUnit: '4px',
            borderRadius: '8px',
        },
    };

    return (
        <main className="min-h-screen bg-charcoal-950">
            <Header />

            <div className="pt-32 pb-20 px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-charcoal-900 rounded-3xl shadow-2xl border border-charcoal-800 p-8 md:p-12">
                        <div className="text-center mb-8">
                            <h1 className="text-4xl font-bold text-white mb-4">
                                Complete Your Purchase
                            </h1>
                            <p className="text-white/70 text-lg">
                                Today's Pleasure or Tomorrow's Success
                            </p>
                            <div className="mt-4 inline-block bg-gold-500/10 border border-gold-500/20 rounded-full px-6 py-2">
                                <span className="text-gold-400 font-bold text-2xl">$20.00</span>
                            </div>
                        </div>

                        {!isEmailSubmitted ? (
                            <form onSubmit={handleEmailSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-white/80 font-medium mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                                    />
                                    <p className="mt-2 text-white/60 text-sm">
                                        Your PDF will be sent to this email address
                                    </p>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-gold-500 text-charcoal-950 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gold-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-gold-500/25 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'Loading...' : 'Continue to Payment'}
                                </button>
                            </form>
                        ) : (
                            <>
                                {clientSecret && (
                                    <Elements options={{ clientSecret, appearance }} stripe={stripePromise}>
                                        <div className="mb-6 p-4 bg-charcoal-800 rounded-lg border border-charcoal-700">
                                            <p className="text-white/70 text-sm">
                                                <span className="font-medium text-white">Email:</span> {email}
                                            </p>
                                        </div>
                                        <CheckoutForm />
                                    </Elements>
                                )}
                            </>
                        )}

                        <div className="mt-8 pt-8 border-t border-charcoal-800">
                            <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <span>Secure payment powered by Stripe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
