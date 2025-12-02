'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
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
    <section ref={sectionRef} className="py-20 bg-charcoal-950 pt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title - Centered above everything */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Today's Pleasure Tomorrow's Success
          </h1>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              {/* Countdown Timer */}
              <div className="mb-8 p-6 bg-gradient-to-br from-gold-500/20 to-gold-400/10 rounded-2xl border border-gold-500/30">
                <div className="flex justify-center gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{timeLeft.days}</div>
                    <div className="text-xs text-white/70 uppercase">Days</div>
                  </div>
                  <div className="text-gold-400 text-2xl font-bold">:</div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{timeLeft.hours}</div>
                    <div className="text-xs text-white/70 uppercase">Hours</div>
                  </div>
                  <div className="text-gold-400 text-2xl font-bold">:</div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{timeLeft.minutes}</div>
                    <div className="text-xs text-white/70 uppercase">Minutes</div>
                  </div>
                  <div className="text-gold-400 text-2xl font-bold">:</div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{timeLeft.seconds}</div>
                    <div className="text-xs text-white/70 uppercase">Seconds</div>
                  </div>
                </div>
                <p className="text-center text-white/60 text-sm mt-4">
                  Until April 20th, 2026
                </p>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-6">
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
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="kapi-button">
                Read My Story
              </button>
              <button className="kapi-button-outline">
                Watch My Journey
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
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
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-sm text-white/70">Years Training</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-gold-500 rounded-lg shadow-lg p-6">
              <div className="text-2xl font-bold text-charcoal-950">3x</div>
              <div className="text-sm text-charcoal-950">All-American</div>
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

