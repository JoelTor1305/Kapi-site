'use client';

import { useEffect, useRef } from 'react';
import { ExternalLink, Play } from 'lucide-react';

export default function MediaCoverageSection() {
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

  const mediaItems = [
    {
      title: "Penn State Today - Fired Up",
      description: "Penn State gymnast Kacper Garnczarek celebrates after completing his high-bar routine during the Nittany Lions' meet against Stanford. No. 7-ranked Penn State toppled the No. 2 Cardinal, 321.350 to 314.450.",
      type: "University News",
      url: "https://www.psu.edu/news/penn-state-today/"
    },
    {
      title: "European Championships All Around Final",
      description: "Competing at the highest level of European gymnastics",
      type: "Competition",
      url: "https://sbcportalsportowy.pl/gimnastyka-bialo-czerwoni-koncza-mistrzostwa-europy-z-dwoma-finalami-na-koncie/"
    },
    {
      title: "4 Finals at World Cup - Cottbus, Germany",
      description: "Multiple finals at the prestigious World Cup competition",
      type: "Competition",
      url: "https://pzg.pl/wypowiedzi-finalistow-ps-z-ubieglego-weekendu/"
    },
    {
      title: "Dzień Dobry TVN - Most Popular Breakfast Show in Poland",
      description: "Featured on Poland's most popular morning show",
      type: "TV Interview",
      url: "https://dziendobry.tvn.pl/zdrowie/sport-i-fitness/kacper-garnczarek-zbiera-pieniadze-na-wyjazd-do-usa-5530717"
    },
    {
      title: "Biggest Radio Station in Poland - RMF24",
      description: "Polska nadzieja na olimpijski medal w gimnastyce rośnie w USA",
      type: "Radio Interview",
      url: "https://www.rmf24.pl/sport/news-polska-nadzieja-na-olimpijski-medal-w-gimnastyce-rosnie-w-us,nId,7987758"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Media Coverage & Achievements</h2>
          <p className="text-lg text-white/80">Featured in Polish media and international competitions</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Video Section - Left Side (2/3 width) */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8">Featured Video</h3>
            
            {/* YouTube Video Embed - Much Bigger */}
            <div className="kapi-card p-6 hover:scale-[1.01] transition-transform duration-300">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/hIYPxLtXsJQ"
                  title="Sports TV News - Kacper Garnczarek"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-white mb-3">Sports TV News Coverage</h4>
                <p className="text-white/70 text-base">Recent coverage of achievements and competitions</p>
              </div>
            </div>

            {/* Achievement Stats - Bigger */}
            <div className="kapi-card p-6 hover:scale-[1.01] transition-transform duration-300">
              <h4 className="text-xl font-bold text-white mb-6">Key Achievements</h4>
              <div className="grid grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400 mb-2">4</div>
                  <div className="text-sm text-white/70">World Cup Finals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400 mb-2">European</div>
                  <div className="text-sm text-white/70">Championships</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400 mb-2">Multiple</div>
                  <div className="text-sm text-white/70">Polish Champion</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400 mb-2">Captain</div>
                  <div className="text-sm text-white/70">Penn State</div>
                </div>
              </div>
            </div>
          </div>

          {/* Articles List - Right Side (1/3 width) */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white mb-8">Recent Coverage</h3>
            {mediaItems.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block kapi-card p-5 hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/10 cursor-pointer group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-block bg-gold-500/20 text-gold-400 px-2 py-1 rounded-full text-xs font-medium">
                        {item.type}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-2 group-hover:text-gold-400 transition-colors duration-300">{item.title}</h4>
                    <p className="text-white/70 text-xs mb-3">{item.description}</p>
                    <div className="inline-flex items-center gap-1 text-gold-400 group-hover:text-gold-300 transition-colors duration-300 text-sm font-medium">
                      Read More
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
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
