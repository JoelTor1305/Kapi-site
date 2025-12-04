'use client';

import { useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AlertCircle, Target, MessageCircle, BookOpen, Phone, Lock } from 'lucide-react';

export default function BookPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  // Admin password - in production, this should be environment variable
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_BOOK_PASSWORD || 'admin123';

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  // If not authenticated, show password form
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-charcoal-950">
        <Header />
        <div className="flex items-center justify-center min-h-screen px-4 pt-20">
          <div className="max-w-md w-full">
            <div className="bg-charcoal-900/95 backdrop-blur-md rounded-2xl p-8 border border-charcoal-800 shadow-2xl">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center">
                  <Lock className="h-8 w-8 text-gold-400" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-white text-center mb-2">
                Protected Content
              </h1>
              <p className="text-white/70 text-center mb-8">
                This page is password protected. Please enter the admin password to continue.
              </p>
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all"
                    autoFocus
                  />
                </div>
                {error && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>{error}</span>
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full kapi-button py-3"
                >
                  Access Book Page
                </button>
              </form>
              <div className="mt-6 text-center">
                <button
                  onClick={() => router.push('/')}
                  className="text-white/60 hover:text-gold-400 text-sm transition-colors"
                >
                  ← Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Original book page content (only shown when authenticated)
  const weaknesses = [
    "You start many things but finish very few.",
    "Your phone pulls you in more often than you want to admit.",
    "You cannot fully enjoy what you are doing.",
    "Your goals live only in your head, without a real plan.",
    "You felt tired, but not satisfied.",
    "You have a constant feeling that you are wasting your potential."
  ];

  const valuePoints = [
    "Simple tools to regain your focus and take clear action",
    "Break free from constant distractions and endless starting",
    "Transform your goals from ideas into actionable plans",
    "Feel real progress and satisfaction in your daily life",
    "A practical system that addresses modern challenges"
  ];

  const explanations = [
    {
      question: "Why did I write this book?",
      answer: "I've seen too many talented people struggle with the same problems: distraction, lack of focus, and unfulfilled potential. This book is my way of sharing what I've learned through years of discipline and training."
    },
    {
      question: "Who is this book for?",
      answer: "Anyone who feels stuck in a cycle of starting but not finishing, who struggles with distractions, or who wants to turn their dreams into reality. Athletes, entrepreneurs, students—anyone ready to take control."
    }
  ];

  return (
    <main className="min-h-screen bg-charcoal-950">
      <Header />

      {/* Admin Notice Banner */}
      <div className="bg-gold-500/10 border-b border-gold-500/20 py-2 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gold-400 text-sm text-center">
            🔒 Admin View - This page is password protected and not visible to the public
          </p>
        </div>
      </div>

      {/* Section 1: Book Overview */}
      <section className="py-20 bg-charcoal-900 pt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Book Cover */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <Image
                  src="/images/kapi-book-cover.png"
                  alt="Today's Pleasure or Tomorrow's Success - Kacper Garnczarek"
                  width={400}
                  height={600}
                  className="transform rotate-3 hover:rotate-0 transition-transform duration-500"
                  priority
                />
                <div className="absolute -top-4 -right-4 bg-gold-500 text-charcoal-950 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Available Now
                </div>
              </div>
            </div>

            {/* Title and Description */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Today's Pleasure or Tomorrow's Success
              </h1>
              <p className="text-white/90 text-lg leading-relaxed">
                This book is a handbook for life in a world full of temptations - from dopamine and social media
                to deep work, optimism, and the art of building goals. You will discover how to regain focus,
                find real joy, and turn dreams into a plan. This is not theory - it is practical tools to help
                you take control of yourself and start creating the future you truly want.
              </p>
              <button
                onClick={() => router.push('/checkout')}
                className="kapi-button text-lg px-12 py-4"
              >
                BUY NOW → $20
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Weaknesses */}
      <section className="py-20 bg-charcoal-950">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-charcoal-800/50 rounded-2xl p-8 md:p-12 border border-charcoal-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-red-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Do You Recognize These Struggles?
              </h2>
            </div>
            <p className="text-white/80 mb-6 text-lg leading-relaxed">
              Everyone knows that moment when the day passes, and you are left with a strange feeling inside
              that "I could have done more." It is because your brain is working
              in a mode that takes away your focus, your joy, and your sense of direction.
            </p>
            <p className="text-white/70 mb-6 text-lg">You probably know this very well:</p>
            <div className="space-y-4 mb-8">
              {weaknesses.map((weakness, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-400 rounded-full mt-2.5" />
                  <p className="text-white/80 text-lg">{weakness}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => router.push('/checkout')}
              className="kapi-button w-full md:w-auto text-lg px-12 py-4"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: Value */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-br from-gold-500/10 to-gold-600/5 rounded-2xl p-8 md:p-12 border border-gold-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                <Target className="h-6 w-6 text-gold-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gold-400">
                The Solution You've Been Looking For
              </h2>
            </div>
            <p className="text-white/90 leading-relaxed text-lg mb-6">
              This book was created to break the chaos: constant starting, endless distractions, no clear plan,
              and the feeling that you are not moving forward. You receive simple tools that help you regain
              your focus, take clear action, and finally feel that you are making real progress.
            </p>
            <div className="space-y-4 mb-8">
              {valuePoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-gold-400 rounded-full mt-2.5" />
                  <p className="text-white/90 text-lg">{point}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => router.push('/checkout')}
              className="kapi-button w-full md:w-auto text-lg px-12 py-4"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </section>

      {/* Section 4: Quick Snapshot - My Picks */}
      <section className="py-20 bg-charcoal-950">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Quick Snapshot
            </h2>
            <p className="text-xl text-gold-400 font-semibold">My Picks</p>
          </div>

          <div className="bg-charcoal-800/50 rounded-2xl p-8 md:p-12 border border-charcoal-700 text-center">
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              This book distills years of experience in discipline, focus, and achievement into practical,
              actionable strategies. It's designed for anyone ready to stop wasting time and start building
              the life they've always wanted. No fluff, just results.
            </p>
            <button
              onClick={() => router.push('/checkout')}
              className="kapi-button text-lg px-12 py-4"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </section>

      {/* Section 5: Plan - Three Options */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Your Plan to Success
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Join The Channel */}
            <div className="bg-charcoal-800/50 rounded-2xl p-8 border border-charcoal-700 text-center hover:border-gold-500/50 transition-all duration-300">
              <div className="w-20 h-20 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-10 w-10 text-gold-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Join The Channel</h3>
              <p className="text-white/80 mb-6">
                Get daily motivation, tips, and insights delivered straight to you. Join our community of achievers.
              </p>
              <button className="kapi-button-outline w-full">
                JOIN NOW
              </button>
            </div>

            {/* Buy The Book */}
            <div className="bg-gradient-to-br from-gold-500/20 to-gold-600/10 rounded-2xl p-8 border-2 border-gold-500/50 text-center transform scale-105 shadow-2xl">
              <div className="w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-gold-400" />
              </div>
              <h3 className="text-2xl font-bold text-gold-400 mb-4">Buy The Book</h3>
              <p className="text-white/90 mb-6">
                Get instant access to the complete guide. Transform your life starting today.
              </p>
              <button
                onClick={() => router.push('/checkout')}
                className="kapi-button w-full"
              >
                BUY NOW - $20
              </button>
            </div>

            {/* 1:1 Call */}
            <div className="bg-charcoal-800/50 rounded-2xl p-8 border border-charcoal-700 text-center hover:border-gold-500/50 transition-all duration-300">
              <div className="w-20 h-20 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-10 w-10 text-gold-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">1:1 Call (FREE!)</h3>
              <p className="text-white/80 mb-6">
                Book a free consultation call to discuss your goals and how to achieve them.
              </p>
              <button className="kapi-button-outline w-full">
                SCHEDULE CALL
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Explanation */}
      <section className="py-20 bg-charcoal-950">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Common Questions
            </h2>
          </div>

          <div className="space-y-8 mb-12">
            {explanations.map((item, index) => (
              <div key={index} className="bg-charcoal-800/50 rounded-2xl p-8 border border-charcoal-700">
                <h3 className="text-2xl font-bold text-gold-400 mb-4">{item.question}</h3>
                <p className="text-white/90 text-lg leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => router.push('/checkout')}
              className="kapi-button text-lg px-12 py-4"
            >
              BUY NOW - $20
            </button>
            <p className="text-white/70 text-sm mt-4">
              Instant PDF delivery to your email
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
