'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function BookPromotionSection() {
  const sectionRef = useRef<HTMLElement>(null);

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


  const features = [
    "Personal journey from 4-year-old gymnast to Penn State captain",
    "European Championships and World Cup finalist insights",
    "Multiple Polish National Champion experiences",
    "Mental resilience and discipline strategies",
    "Goal-setting techniques for long-term success",
    "Overcoming obstacles and building character",
    "Leadership lessons from team captaincy",
    "International competition preparation",
    "Balancing athletics with personal growth",
    "Inspiring others to chase their dreams"
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
                Coming Soon
              </div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Order Today's Pleasure or Tomorrow's Success Now For...
              </h2>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-charcoal-950" />
                    </div>
                    <p className="text-white/90 text-lg">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gold-400 mb-4">
                  Today's Pleasure or Tomorrow's Success? Because WE CHOOSE.
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Discover the journey of transformation, resilience, and the power of choosing 
                  long-term success over instant gratification. Learn from a champion's mindset 
                  and unlock your potential.
                </p>
              </div>

              <div className="space-y-6">
                <button className="w-full bg-gold-500 text-charcoal-950 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gold-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-gold-500/25 transform hover:scale-105">
                  CLICK HERE TO PRE-ORDER NOW!
                </button>
                
                <div className="text-center">
                  <p className="text-white/70 text-lg">
                    Get your hardcover copy shipped to you for only <span className="text-gold-400 font-bold">$24.95</span> plus <span className="text-gold-400 font-bold">$3.50</span> shipping & handling!
                  </p>
                  <p className="text-white/60 text-sm mt-2">
                    Launch Date: April 20th, 2026
                  </p>
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
