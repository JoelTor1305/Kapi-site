'use client';

import Header from '../../components/layout/Header';
import BookPromotionSection from '../../components/sections/BookPromotionSection';
import Footer from '../../components/layout/Footer';

export default function BookPage() {
  return (
    <main className="min-h-screen bg-charcoal-950">
      <Header />
      <BookPromotionSection />
      <Footer />
    </main>
  );
}



