'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X, Instagram, Youtube } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Book', href: '/book' },
  { name: 'Media', href: '#media' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/gym.kapi/', label: 'Instagram' },
  { icon: 'tiktok', href: 'https://www.tiktok.com/@gym.kapi', label: 'TikTok' },
  { icon: Youtube, href: 'https://www.youtube.com/@gymkapi', label: 'YouTube' },
];

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      // It's a route, navigate to it
      router.push(href);
    } else {
      // It's a hash link, scroll to it
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <div className={`rounded-3xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${
          isScrolled 
            ? 'bg-charcoal-900/95 backdrop-blur-md shadow-xl border border-charcoal-800 ring-1 ring-gold-500/20' 
            : 'bg-charcoal-900/80 backdrop-blur-sm shadow-lg border border-charcoal-800/50 ring-1 ring-gold-500/10'
        }`}>
          <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#home')}
              className="text-2xl font-bold text-white hover:text-gold-400 transition-colors duration-300"
            >
              KAPI
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 rounded-full text-sm font-medium text-white/80 hover:text-gold-400 hover:bg-gold-500/10 transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gold-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                </button>
              ))}
            </div>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gold-500/10 hover:bg-gold-500/20 text-gold-400 hover:text-gold-300 transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon === 'tiktok' ? (
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                ) : (
                  <social.icon className="h-4 w-4" />
                )}
              </a>
            ))}
          </div>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-white/80 hover:text-gold-400 hover:bg-gold-500/10 transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-charcoal-900/95 backdrop-blur-md rounded-2xl shadow-lg border border-charcoal-800">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-white/80 hover:text-gold-400 hover:bg-gold-500/10 transition-all duration-300"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2 border-t border-charcoal-800">
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gold-500/10 hover:bg-gold-500/20 text-gold-400 hover:text-gold-300 transition-all duration-300"
                      aria-label={social.label}
                    >
                      {social.icon === 'tiktok' ? (
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                        </svg>
                      ) : (
                        <social.icon className="h-5 w-5" />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </header>
  );
}
