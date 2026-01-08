import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Particles } from './components/ui/Particles';

function App() {
  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-text selection:bg-accent selection:text-white font-body relative">
      <Particles
        className="fixed inset-0 z-0 pointer-events-none opacity-30"
        quantity={150}
        ease={100}
        color="#000000"
        refresh
      />

      {/* Fixed Logo in Top-Left */}
      <button
        onClick={scrollToHome}
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 cursor-pointer hover:scale-105 transition-transform duration-300"
      >
        <img
          src="/logo.png"
          alt="Logo"
          className="h-12 sm:h-16 md:h-20 w-auto drop-shadow-lg"
        />
      </button>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
