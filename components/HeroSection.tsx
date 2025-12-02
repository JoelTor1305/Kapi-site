'use client';

import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden pt-16 bg-charcoal-950">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/film.m4v" type="video/mp4" />
        {/* Fallback image if video doesn't load */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 to-charcoal-950" />
      </video>

      {/* Subtle Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <div className="max-w-5xl">
          {/* Author Name */}
          <p className="mb-4 text-lg sm:text-xl text-gold-400 font-medium tracking-wide">
            Kacper Garnczarek
          </p>
          
          {/* Main Title */}
          <h1 className="mb-8 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-white">Your journey starts here.</span>
          </h1>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="kapi-button">
              Join My Broadcast Channel
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-gold-400" />
      </div>
    </section>
  );
}

