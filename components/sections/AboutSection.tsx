'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function AboutSection() {
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

  return (
    <section ref={sectionRef} className="py-20 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image - First on mobile, second on desktop */}
          <div className="relative order-1 lg:order-2">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/kapi-profile.jpg"
                alt="KAPI - Penn State Gymnast and Author"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 kapi-card p-6">
              <div className="text-2xl font-bold text-white">19+</div>
              <div className="text-sm text-white/70">Years Training</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-gold-500 rounded-lg shadow-lg p-6">
              <div className="text-2xl font-bold text-charcoal-950">5x</div>
              <div className="text-sm text-charcoal-950">World Cup Finalist</div>
            </div>
          </div>

          {/* Content - Second on mobile, first on desktop */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Let's build the future you've always imagined
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                I'm a Polish National Team gymnast and captain of the Penn State Men's Gymnastics Team.
                I've trained since I was four, combining discipline, focus, and positive energy.
                European Championships and World Cup finalist, Multiple Polish National Champion.
                My goal is to inspire others to chase their dreams with passion and purpose.
              </p>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Through years of dedication to gymnastics, I've learned that success isn't just about
                physical ability—it's about mental strength, discipline, and the courage to pursue
                your dreams relentlessly.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Whether you're an athlete, entrepreneur, or someone with big dreams, I'm here to
                help you unlock your potential and achieve the success you've always imagined.
              </p>
            </div>

            {/* Button - Hidden on mobile */}
            <div className="hidden lg:flex flex-col sm:flex-row gap-4">
              <button className="kapi-button">
                Read My Story
              </button>
            </div>
          </div>
        </div>

        {/* Button - Visible only on mobile, below image */}
        <div className="lg:hidden mt-8 flex justify-center">
          <button className="kapi-button">
            Read My Story
          </button>
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

