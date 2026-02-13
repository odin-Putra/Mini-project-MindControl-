import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { RainBackground } from './components/RainBackground';

function App() {
  return (
    <div className="min-h-screen bg-pearl text-slate-800 font-sans selection:bg-lavender-100 selection:text-slate-900 relative">
      <RainBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Features />
        
        {/* Placeholder Section for content scrolling demonstration */}
        <section className="py-32 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-3xl md:text-5xl text-slate-800">
              A Gentle Approach to <br/> <span className="italic text-slate-500">Digital Wellness</span>
            </h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              We believe technology should support your humanity, not consume it. 
              Our platform uses adaptive algorithms to guide you back to yourself, 
              providing space for clarity when the world feels too loud.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default App;