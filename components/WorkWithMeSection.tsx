'use client';

import { useEffect, useRef, useState } from 'react';
import { CheckCircle, Star, Users, Trophy, Clock, Target } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Personal Training',
    description: 'One-on-one coaching sessions tailored to your specific goals and needs',
    features: ['Custom workout plans', 'Nutrition guidance', 'Progress tracking', 'Mental coaching'],
    price: '$150/session',
  },
  {
    icon: Users,
    title: 'Group Coaching',
    description: 'Join a community of like-minded individuals on their transformation journey',
    features: ['Weekly group sessions', 'Peer support', 'Group challenges', 'Monthly check-ins'],
    price: '$99/month',
  },
  {
    icon: Trophy,
    title: 'Competition Prep',
    description: 'Specialized training for athletes preparing for competitions or tryouts',
    features: ['Competition strategy', 'Mental preparation', 'Performance analysis', 'Recovery planning'],
    price: '$200/session',
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'College Athlete',
    content: 'KAPI transformed not just my physical performance, but my entire mindset. His approach to mental training is game-changing.',
    rating: 5,
  },
  {
    name: 'Mike R.',
    role: 'Fitness Enthusiast',
    content: 'Working with KAPI has been incredible. His personalized approach and genuine care for my progress made all the difference.',
    rating: 5,
  },
  {
    name: 'Jessica L.',
    role: 'High School Gymnast',
    content: 'KAPI helped me overcome my mental blocks and achieve goals I never thought possible. Highly recommend!',
    rating: 5,
  },
];

export default function WorkWithMeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            setIsVisible(true);
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Don't just read about transformation—experience it. Work directly with me to unlock your potential, 
            achieve your goals, and become the person you've always wanted to be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors duration-300">
              Book Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-300">
              View Programs
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <service.icon className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-3xl font-bold text-yellow-400 mb-6">{service.price}</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300">
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 border border-white border-opacity-20">
          <h3 className="text-2xl font-bold text-center mb-8">What My Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-yellow-400 text-black rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Limited Time Offer</h3>
            <p className="text-lg mb-6">
              Book your first session this month and get 20% off your first month of coaching. 
              Plus, receive a free copy of my book when it launches in May 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-300">
                Claim Your Spot
              </button>
              <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 hover:text-white transition-colors duration-300">
                Learn More
              </button>
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

