'use client';

import { useEffect, useState } from 'react';
import { Trophy, Users, Star, Award } from 'lucide-react';

const metrics = [
  { icon: Users, value: '50K+', label: 'Followers' },
  { icon: Trophy, value: '15+', label: 'Competition Wins' },
  { icon: Star, value: '4.9', label: 'Rating' },
  { icon: Award, value: 'Penn State', label: 'Gymnastics' },
  { icon: Users, value: '100+', label: 'Students Trained' },
  { icon: Trophy, value: '3x', label: 'All-American' },
];

export default function SocialProofBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-gray-600 text-lg">
            Join the community of athletes and dreamers who believe in transformation
          </p>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of metrics */}
            {metrics.map((metric, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-sm border border-gray-100 min-w-[200px]"
              >
                <metric.icon className="h-8 w-8 text-yellow-400 mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600 text-center">
                  {metric.label}
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {metrics.map((metric, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-sm border border-gray-100 min-w-[200px]"
              >
                <metric.icon className="h-8 w-8 text-yellow-400 mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600 text-center">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

