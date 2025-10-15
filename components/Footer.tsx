'use client';

import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const footerLinks = {
  'Book': [
    { name: 'Pre-Order', href: '#' },
    { name: 'About the Book', href: '#' },
    { name: 'Launch Updates', href: '#' },
  ],
  'Services': [
    { name: 'Personal Training', href: '#' },
    { name: 'Group Coaching', href: '#' },
    { name: 'Competition Prep', href: '#' },
  ],
  'Resources': [
    { name: 'Blog', href: '#' },
    { name: 'Media Kit', href: '#' },
    { name: 'Speaking', href: '#' },
  ],
  'Connect': [
    { name: 'Contact', href: '#' },
    { name: 'Newsletter', href: '#' },
    { name: 'Press', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">KAPI</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Penn State gymnast, author, and mentor helping you unlock your potential 
              and transform your life through the power of belief and dedication.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">hello@kapi.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">Penn State University</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Get exclusive updates about the book launch and early access to new content.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
              />
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 KAPI. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm text-center">
              Coming Soon: <span className="text-yellow-400 font-semibold">MVP Gymnastics</span>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

