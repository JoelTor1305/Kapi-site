'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Play, ExternalLink, Calendar } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Penn State Gymnastics Feature',
    thumbnail: '/images/video-thumb-1.jpg',
    duration: '3:45',
    source: 'ESPN',
  },
  {
    id: 2,
    title: 'Mental Training Interview',
    thumbnail: '/images/video-thumb-2.jpg',
    duration: '5:20',
    source: 'Athlete Mindset',
  },
  {
    id: 3,
    title: 'Competition Highlights',
    thumbnail: '/images/video-thumb-3.jpg',
    duration: '2:30',
    source: 'NCAA Sports',
  },
  {
    id: 4,
    title: 'Training Philosophy',
    thumbnail: '/images/video-thumb-4.jpg',
    duration: '4:15',
    source: 'Gymnastics Weekly',
  },
];

const articles = [
  {
    title: 'Penn State Gymnast Shares Journey to Success',
    publication: 'The Daily Collegian',
    date: 'March 2024',
    excerpt: 'KAPI discusses his training regimen and mental approach to competition...',
    link: '#',
  },
  {
    title: 'From Gymnastics to Mentorship: A Story of Transformation',
    publication: 'Athlete Spotlight',
    date: 'February 2024',
    excerpt: 'How one athlete is using his platform to inspire the next generation...',
    link: '#',
  },
  {
    title: 'The Psychology of Peak Performance',
    publication: 'Sports Psychology Today',
    date: 'January 2024',
    excerpt: 'KAPI breaks down the mental strategies that lead to consistent excellence...',
    link: '#',
  },
  {
    title: 'Building Resilience Through Adversity',
    publication: 'Champion Mindset',
    date: 'December 2023',
    excerpt: 'Lessons learned from overcoming setbacks and building mental toughness...',
    link: '#',
  },
  {
    title: 'Training the Next Generation of Champions',
    publication: 'Coaching Excellence',
    date: 'November 2023',
    excerpt: 'KAPI shares his approach to mentoring young athletes...',
    link: '#',
  },
];

export default function MediaSection() {
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
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Featured Media & Press
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See KAPI in action and read about his journey from athlete to mentor
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Video Grid */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Videos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="group relative bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                >
                  <div className="relative h-48">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white bg-opacity-90 rounded-full p-3 group-hover:bg-opacity-100 transition-colors duration-300">
                        <Play className="h-6 w-6 text-gray-900 ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors duration-300">
                      {video.title}
                    </h4>
                    <p className="text-sm text-gray-600">{video.source}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Articles Sidebar */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h3>
            <div className="space-y-6 max-h-96 overflow-y-auto">
              {articles.map((article, index) => (
                <article
                  key={index}
                  className="group border-b border-gray-100 pb-6 last:border-b-0 last:pb-0 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300 line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span className="font-medium">{article.publication}</span>
                          <span>•</span>
                          <span>{article.date}</span>
                        </div>
                        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-yellow-600 transition-colors duration-300" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
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
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}

