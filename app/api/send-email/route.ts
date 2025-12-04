import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const { email, paymentIntentId } = await req.json();

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        // Read the PDF file
        const pdfPath = path.join(process.cwd(), 'public', 'pdfs', 'book.pdf');

        let pdfBuffer: Buffer | undefined;
        let attachments: any[] = [];

        // Check if PDF exists, if not, send email without attachment
        if (fs.existsSync(pdfPath)) {
            pdfBuffer = fs.readFileSync(pdfPath);
            attachments = [
                {
                    filename: 'Todays-Pleasure-or-Tomorrows-Success.pdf',
                    content: pdfBuffer,
                },
            ];
        } else {
            console.warn('PDF file not found at:', pdfPath);
        }

        // Send email with Resend
        const data = await resend.emails.send({
            from: 'Kapi <onboarding@resend.dev>', // Update this with your verified domain
            to: [email],
            subject: 'Your Book Purchase - Today\'s Pleasure or Tomorrow\'s Success',
            html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
                color: #D4AF37;
                padding: 30px;
                text-align: center;
                border-radius: 10px 10px 0 0;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .button {
                display: inline-block;
                background: #D4AF37;
                color: #1a1a1a;
                padding: 12px 30px;
                text-decoration: none;
                border-radius: 5px;
                font-weight: bold;
                margin: 20px 0;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                color: #666;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">Thank You for Your Purchase!</h1>
            </div>
            <div class="content">
              <h2 style="color: #D4AF37;">Today's Pleasure or Tomorrow's Success</h2>
              <p>Dear Reader,</p>
              <p>Thank you for purchasing "Today's Pleasure or Tomorrow's Success" by Kacper Garnczarek!</p>
              <p>Your PDF book is attached to this email. You can download it and start reading immediately.</p>
              <p><strong>What's Inside:</strong></p>
              <ul>
                <li>Personal journey from 4-year-old gymnast to Penn State captain</li>
                <li>Mental resilience and discipline strategies</li>
                <li>Goal-setting techniques for long-term success</li>
                <li>Leadership lessons and inspiring stories</li>
              </ul>
              <p>We hope this book inspires you to choose tomorrow's success over today's pleasure!</p>
              <p style="margin-top: 30px;">Best regards,<br><strong>Kapi</strong></p>
              ${paymentIntentId ? `<p style="font-size: 12px; color: #666;">Transaction ID: ${paymentIntentId}</p>` : ''}
            </div>
            <div class="footer">
              <p>Questions? Contact us at support@kapi.com</p>
              <p>&copy; ${new Date().getFullYear()} Kapi. All rights reserved.</p>
            </div>
          </body>
        </html>
      `,
            attachments,
        });

        console.log('Email sent successfully:', data);

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}
