'use client';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MVPSection from '../components/MVPSection';
import Footer from '../components/Footer';

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