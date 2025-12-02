'use client';

import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import MVPSection from '../components/sections/MVPSection';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal-950">
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <MVPSection />
      <div id="contact">
        <Footer />
      </div>
    </main>
  );
}