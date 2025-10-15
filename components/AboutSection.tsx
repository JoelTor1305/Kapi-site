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
    <section ref={sectionRef} className="py-20 bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                My Journey to Inspiration
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                As a Penn State gymnast, I've learned that true strength comes not just from physical ability, 
                but from the mental resilience to overcome any obstacle. My journey from a young athlete with 
                big dreams to a mentor helping others achieve their goals has taught me invaluable lessons 
                about perseverance, dedication, and the power of belief.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Through countless hours of training, competition, and personal growth, I discovered that 
                the greatest victories aren't always the ones that earn medals—they're the moments when 
                you push past your limits and inspire others to do the same.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                This book is my way of sharing those lessons with you, whether you're an athlete, 
                a dreamer, or someone simply looking to unlock your potential and transform your life.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors duration-300">
                Read My Story
              </button>
              <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 hover:text-white transition-colors duration-300">
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
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              <div className="text-2xl font-bold text-gray-900">15+</div>
              <div className="text-sm text-gray-600">Years Training</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-yellow-400 rounded-lg shadow-lg p-6">
              <div className="text-2xl font-bold text-black">3x</div>
              <div className="text-sm text-black">All-American</div>
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

