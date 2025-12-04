'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BookSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

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

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('April 20, 2026 00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title - Centered */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Today's Pleasure Tomorrow's Success
          </h2>
        </div>

        {/* Countdown Timer - Centered */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="p-8 bg-gradient-to-br from-gold-500/20 to-gold-400/10 rounded-2xl border border-gold-500/30">
            <div className="flex justify-center gap-6">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{timeLeft.days}</div>
                <div className="text-sm text-white/70 uppercase tracking-wide">Days</div>
              </div>
              <div className="text-gold-400 text-4xl font-bold">:</div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{timeLeft.hours}</div>
                <div className="text-sm text-white/70 uppercase tracking-wide">Hours</div>
              </div>
              <div className="text-gold-400 text-4xl font-bold">:</div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{timeLeft.minutes}</div>
                <div className="text-sm text-white/70 uppercase tracking-wide">Minutes</div>
              </div>
              <div className="text-gold-400 text-4xl font-bold">:</div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{timeLeft.seconds}</div>
                <div className="text-sm text-white/70 uppercase tracking-wide">Seconds</div>
              </div>
            </div>
            <p className="text-center text-white/60 text-sm mt-6">
              Until April 20th, 2026
            </p>
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
