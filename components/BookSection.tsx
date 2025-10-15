'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Calendar, BookOpen, Headphones, Package } from 'lucide-react';

const purchaseOptions = [
  {
    icon: BookOpen,
    title: 'Physical Book',
    price: '$24.99',
    description: 'Hardcover edition with exclusive content',
    popular: false,
  },
  {
    icon: BookOpen,
    title: 'eBook',
    price: '$14.99',
    description: 'Digital version for all devices',
    popular: false,
  },
  {
    icon: Headphones,
    title: 'Audiobook',
    price: '$19.99',
    description: 'Narrated by KAPI himself',
    popular: false,
  },
  {
    icon: Package,
    title: 'Complete Bundle',
    price: '$39.99',
    description: 'Book + eBook + Audiobook',
    popular: true,
    originalPrice: '$59.97',
  },
];

export default function BookSection() {
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
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            The Book That Will Transform Your Life
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the secrets of mental resilience, physical excellence, and personal transformation 
            from a Penn State gymnast who's been there, done that, and is ready to guide you to your own success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Book Cover */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/book-cover.jpg"
                alt="KAPI's Book Cover"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Launch Date Badge */}
            <div className="absolute -top-6 -right-6 bg-yellow-400 rounded-lg shadow-lg p-4">
              <div className="flex items-center gap-2 text-black">
                <Calendar className="h-5 w-5" />
                <div>
                  <div className="text-sm font-semibold">Launching</div>
                  <div className="text-lg font-bold">May 2025</div>
                </div>
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                "From Penn State to Purpose"
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                In this powerful memoir and guide, I share the raw, unfiltered story of my journey 
                from a determined young gymnast to a mentor who helps others unlock their potential. 
                You'll discover the mental frameworks, training philosophies, and life lessons that 
                transformed not just my athletic career, but my entire approach to life.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-600">
                    <strong>Mental Resilience:</strong> How to bounce back from setbacks stronger than before
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-600">
                    <strong>Goal Achievement:</strong> The systematic approach to turning dreams into reality
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-600">
                    <strong>Leadership:</strong> How to inspire and mentor others on their journey
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors duration-300 w-full sm:w-auto">
              Pre-Order Now - Save 20%
            </button>
          </div>
        </div>

        {/* Purchase Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {purchaseOptions.map((option, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg p-6 shadow-sm border-2 transition-all duration-300 hover:shadow-lg ${
                option.popular 
                  ? 'border-yellow-400 ring-2 ring-yellow-400 ring-opacity-50' 
                  : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              {option.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <option.icon className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {option.title}
                </h4>
                <div className="mb-4">
                  {option.originalPrice && (
                    <span className="text-sm text-gray-500 line-through mr-2">
                      {option.originalPrice}
                    </span>
                  )}
                  <span className="text-2xl font-bold text-gray-900">
                    {option.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-6">
                  {option.description}
                </p>
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  option.popular
                    ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  {option.popular ? 'Get Bundle' : 'Pre-Order'}
                </button>
              </div>
            </div>
          ))}
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

