'use client';

import { useEffect, useState } from 'react';

export default function ComingSoonSection() {
  const [bookTimeLeft, setBookTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const bookLaunchDate = new Date('April 20, 2026').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      
      // Book countdown
      const bookDistance = bookLaunchDate - now;
      if (bookDistance > 0) {
        setBookTimeLeft({
          days: Math.floor(bookDistance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((bookDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((bookDistance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((bookDistance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeDisplay = ({ timeLeft, title, description }: { timeLeft: any, title: string, description: string }) => (
    <div className="kapi-card p-8 text-center">
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-white/80 mb-6">{description}</p>
      
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gold-500/20 rounded-lg p-3">
          <div className="text-2xl font-bold text-gold-400">{timeLeft.days}</div>
          <div className="text-xs text-white/70">Days</div>
        </div>
        <div className="bg-gold-500/20 rounded-lg p-3">
          <div className="text-2xl font-bold text-gold-400">{timeLeft.hours}</div>
          <div className="text-xs text-white/70">Hours</div>
        </div>
        <div className="bg-gold-500/20 rounded-lg p-3">
          <div className="text-2xl font-bold text-gold-400">{timeLeft.minutes}</div>
          <div className="text-xs text-white/70">Minutes</div>
        </div>
        <div className="bg-gold-500/20 rounded-lg p-3">
          <div className="text-2xl font-bold text-gold-400">{timeLeft.seconds}</div>
          <div className="text-xs text-white/70">Seconds</div>
        </div>
      </div>
      
      <button className="kapi-button-outline">
        Get Notified
      </button>
    </div>
  );

  return (
    <section className="py-20 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Coming Soon…</h2>
          <p className="text-lg text-white/80">My upcoming book launching in 2026</p>
        </div>
      </div>
    </section>
  );
}
