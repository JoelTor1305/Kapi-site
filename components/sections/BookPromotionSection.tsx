'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Check, AlertCircle, Target } from 'lucide-react';

export default function BookPromotionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const weaknesses = [
    "You start many things but finish very few.",
    "Your phone pulls you in more often than you want to admit.",
    "You cannot fully enjoy what you are doing.",
    "Your goals live only in your head, without a real plan.",
    "You felt tired, but not satisfied.",
    "You have a constant feeling that you are wasting your potential."
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Book Cover - Left Side */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="/images/kapi-book-cover.png"
                alt="Today's Pleasure or Tomorrow's Success - Kacper Garnczarek"
                width={400}
                height={600}
                className="transform rotate-3 hover:rotate-0 transition-transform duration-500"
                priority
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-gold-500 text-charcoal-950 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Available Now
              </div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="space-y-8">
            {/* Title and Description */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Today's Pleasure or Tomorrow's Success
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                This book is a handbook for life in a world full of temptations - from dopamine and social media
                to deep work, optimism, and the art of building goals. You will discover how to regain focus,
                find real joy, and turn dreams into a plan. This is not theory - it is practical tools to help
                you take control of yourself and start creating the future you truly want.
              </p>
            </div>

            {/* Weaknesses Section */}
            <div className="bg-charcoal-800/50 rounded-2xl p-6 border border-charcoal-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center">
                  <AlertCircle className="h-5 w-5 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Do You Recognize These Struggles?
                </h3>
              </div>
              <p className="text-white/80 mb-4 leading-relaxed">
                Everyone knows that moment when the day passes, and you are left with a strange feeling inside
                that "I could have done more." It is because you are lazy. It is because your brain is working
                in a mode that takes away your focus, your joy, and your sense of direction.
              </p>
              <p className="text-white/70 mb-4">You probably know this very well:</p>
              <div className="space-y-3">
                {weaknesses.map((weakness, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-red-400 rounded-full mt-2.5" />
                    <p className="text-white/80">{weakness}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Value Section */}
            <div className="bg-gradient-to-br from-gold-500/10 to-gold-600/5 rounded-2xl p-6 border border-gold-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center">
                  <Target className="h-5 w-5 text-gold-400" />
                </div>
                <h3 className="text-2xl font-bold text-gold-400">
                  The Solution You've Been Looking For
                </h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                This book was created to break the chaos: constant starting, endless distractions, no clear plan,
                and the feeling that you are not moving forward. You receive simple tools that help you regain
                your focus, take clear action, and finally feel that you are making real progress. It is a
                practical system that quickly improves the problems most people struggle with today.
              </p>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <button
                onClick={() => router.push('/checkout')}
                className="w-full bg-gold-500 text-charcoal-950 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gold-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-gold-500/25 transform hover:scale-105"
              >
                GET YOUR COPY NOW - $20
              </button>

              <div className="text-center">
                <p className="text-white/70 text-lg">
                  Instant PDF delivery to your email
                </p>
                <div className="flex items-center justify-center gap-2 mt-2 text-white/60 text-sm">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Secure payment powered by Stripe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
