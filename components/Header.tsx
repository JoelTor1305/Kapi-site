'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Book', href: '#book' },
  { name: 'Media', href: '#media' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
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
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <div className={`rounded-3xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-xl border border-gray-100 ring-1 ring-gray-200/50' 
            : 'bg-white/80 backdrop-blur-sm shadow-lg border border-gray-200/50 ring-1 ring-white/30'
        }`}>
          <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#home')}
              className="text-2xl font-bold text-gray-900 hover:text-yellow-600 transition-colors duration-300"
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
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                </button>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('#services')}
              className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold text-sm hover:bg-yellow-300 transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              Work With Me
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 transition-all duration-300"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2 border-t border-gray-100">
                <button
                  onClick={() => scrollToSection('#services')}
                  className="block w-full text-center bg-yellow-400 text-black px-4 py-3 rounded-xl font-semibold text-base hover:bg-yellow-300 transition-colors duration-300"
                >
                  Work With Me
                </button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </header>
  );
}
