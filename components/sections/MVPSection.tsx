'use client';

import { useEffect, useState } from 'react';

export default function MVPSection() {
  const [mvpTimeLeft, setMvpTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const academyLaunchDate = new Date('September 28, 2026').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const academyDistance = academyLaunchDate - now;
      
      if (academyDistance > 0) {
        setMvpTimeLeft({
          days: Math.floor(academyDistance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((academyDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((academyDistance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((academyDistance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">MVP Gymnastics and MVP Academy</h2>
          <p className="text-lg text-white/80">Comprehensive gymnastics training and mentorship program</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="kapi-card p-8 text-center">
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-gold-500/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-gold-400">{mvpTimeLeft.days}</div>
                <div className="text-xs text-white/70">Days</div>
              </div>
              <div className="bg-gold-500/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-gold-400">{mvpTimeLeft.hours}</div>
                <div className="text-xs text-white/70">Hours</div>
              </div>
              <div className="bg-gold-500/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-gold-400">{mvpTimeLeft.minutes}</div>
                <div className="text-xs text-white/70">Minutes</div>
              </div>
              <div className="bg-gold-500/20 rounded-lg p-3">
                <div className="text-2xl font-bold text-gold-400">{mvpTimeLeft.seconds}</div>
                <div className="text-xs text-white/70">Seconds</div>
              </div>
            </div>
            
            <button className="kapi-button-outline">
              Get Notified
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}



