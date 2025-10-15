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
    <section className="relative h-screen w-full overflow-hidden pt-16">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/kapi-gymnastics.mp4" type="video/mp4" />
        {/* Fallback image if video doesn't load */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <div className="max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            From Penn State to
            <span className="block text-yellow-400">Inspiration</span>
          </h1>
          <p className="mb-8 text-lg sm:text-xl md:text-2xl text-gray-200">
            Gymnast • Mentor • Author
          </p>
          <p className="mb-12 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Discover the journey of transformation, resilience, and the power of believing in yourself. 
            My book launches May 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors duration-300">
              Pre-Order Book
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-colors duration-300">
              Work With Me
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </section>
  );
}

