'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import { Check, Mail } from 'lucide-react';

export default function SuccessPage() {
    const searchParams = useSearchParams();
    const [paymentIntentId, setPaymentIntentId] = useState<string | null>(null);

    useEffect(() => {
        const paymentIntent = searchParams.get('payment_intent');
        if (paymentIntent) {
            setPaymentIntentId(paymentIntent);
        }
    }, [searchParams]);

    return (
        <main className="min-h-screen bg-charcoal-950">
            <Header />

            <div className="pt-32 pb-20 px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-charcoal-900 rounded-3xl shadow-2xl border border-charcoal-800 p-8 md:p-12 text-center">
                        {/* Success Icon */}
                        <div className="mb-6 flex justify-center">
                            <div className="w-20 h-20 bg-green-500/10 border-2 border-green-500 rounded-full flex items-center justify-center">
                                <Check className="h-10 w-10 text-green-500" />
                            </div>
                        </div>

                        {/* Success Message */}
                        <h1 className="text-4xl font-bold text-white mb-4">
                            Payment Successful!
                        </h1>

                        <p className="text-xl text-white/80 mb-8">
                            Thank you for your purchase
                        </p>

                        {/* Email Notice */}
                        <div className="bg-gold-500/10 border border-gold-500/20 rounded-2xl p-6 mb-8">
                            <div className="flex items-center justify-center gap-3 mb-3">
                                <Mail className="h-6 w-6 text-gold-400" />
                                <h2 className="text-2xl font-bold text-gold-400">
                                    Check Your Email for the PDF
                                </h2>
                            </div>
                            <p className="text-white/70">
                                We've sent your book to your email address. If you don't see it in a few minutes,
                                please check your spam folder.
                            </p>
                        </div>

                        {/* Book Details */}
                        <div className="bg-charcoal-800 rounded-xl p-6 mb-8">
                            <h3 className="text-xl font-bold text-white mb-2">
                                Today's Pleasure or Tomorrow's Success
                            </h3>
                            <p className="text-white/60 mb-4">
                                by Kacper Garnczarek
                            </p>
                            <div className="flex items-center justify-center gap-4 text-sm text-white/60">
                                <span>PDF Format</span>
                                <span>•</span>
                                <span>$20.00</span>
                            </div>
                        </div>

                        {/* Transaction ID */}
                        {paymentIntentId && (
                            <p className="text-white/40 text-sm mb-8">
                                Transaction ID: {paymentIntentId}
                            </p>
                        )}

                        {/* Action Buttons */}
                        <div className="space-y-4">
                            <a
                                href="/"
                                className="block w-full bg-gold-500 text-charcoal-950 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-gold-500/25 transform hover:scale-105"
                            >
                                Return to Home
                            </a>

                            <a
                                href="/book"
                                className="block w-full bg-charcoal-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-charcoal-700 transition-all duration-300 border border-charcoal-700"
                            >
                                Learn More About the Book
                            </a>
                        </div>

                        {/* Support */}
                        <div className="mt-8 pt-8 border-t border-charcoal-800">
                            <p className="text-white/60 text-sm">
                                Questions or issues? Contact us at{' '}
                                <a href="mailto:support@kapi.com" className="text-gold-400 hover:text-gold-300">
                                    support@kapi.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
