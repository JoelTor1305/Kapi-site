'use client';

import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SocialProofBanner from '../components/SocialProofBanner';
import AboutSection from '../components/AboutSection';
import BookSection from '../components/BookSection';
import MediaSection from '../components/MediaSection';
import WorkWithMeSection from '../components/WorkWithMeSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div id="home">
        <HeroSection />
          </div>
      <SocialProofBanner />
      <div id="about">
        <AboutSection />
        </div>
      <div id="book">
        <BookSection />
              </div>
      <div id="media">
        <MediaSection />
                </div>
      <div id="services">
        <WorkWithMeSection />
                </div>
      <div id="contact">
        <Footer />
              </div>
    </main>
  );
}