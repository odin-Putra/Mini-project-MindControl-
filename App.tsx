import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { RainBackground } from './components/RainBackground';
import { Heart, Leaf, Shield } from 'lucide-react';
import { About } from './components/About';
import { MindfulGames } from './components/MindfulGames';
import { ImmersiveSanctuary } from './components/ImmersiveSanctuary';
import { EmergencyCalmPage } from './components/EmergencyCalmPage';
import { Purpose } from './components/Purpose';

import { SignIn } from './components/auth/SignIn';
import { SignUp } from './components/auth/SignUp';
import { Onboarding } from './components/Onboarding';
import { Grounding } from './components/Grounding';
import { Unhooking } from './components/Unhooking';
import { ActingOnValues } from './components/ActingOnValues';
import { BeingKind } from './components/BeingKind';
import { MakingRoom } from './components/MakingRoom';

export type ViewState = 'home' | 'about' | 'games' | 'vr' | 'emergency' | 'purpose' | 'signin' | 'signup' | 'onboarding' | 'grounding' | 'unhooking' | 'acting-values' | 'being-kind' | 'making-room';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const handleNavigate = (page: ViewState) => {
    setCurrentView(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-pearl text-slate-800 font-sans selection:bg-lavender-100 selection:text-slate-900 relative">
      <RainBackground />
      <Header onNavigate={handleNavigate} />
      <main className="relative z-10">
        {currentView === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            <Features onNavigate={handleNavigate} />
            
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

            {/* Mission Section */}
            <section className="py-32 px-6 bg-pearl text-slate-800">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                    <div>
                      <span className="text-slate-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Our Mission</span>
                      <h2 className="font-serif text-3xl md:text-5xl text-slate-800 mb-6 leading-tight">
                        Rooted in Science, <br/><span className="italic text-slate-600">Grown with Intention</span>
                      </h2>
                    </div>
                    
                    <p className="text-lg text-slate-600 font-light leading-relaxed">
                      MindControl was founded on a radical premise: that the tools we use should leave us feeling fuller, not emptier. In a digital landscape designed to fracture your attention, we are building the infrastructure for wholeness.
                    </p>

                    <div className="space-y-6 pt-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 shrink-0">
                          <Leaf size={20} />
                        </div>
                        <div>
                          <h4 className="font-serif text-lg text-slate-800 mb-1">Ethical Design</h4>
                          <p className="text-slate-500 font-light text-sm leading-relaxed">No infinite scrolls. No dark patterns. Just tools designed to help you engage, then gently disconnect.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-lavender-100 flex items-center justify-center text-purple-600 shrink-0">
                          <Heart size={20} />
                        </div>
                        <div>
                          <h4 className="font-serif text-lg text-slate-800 mb-1">Human-Centric AI</h4>
                          <p className="text-slate-500 font-light text-sm leading-relaxed">Our algorithms don't optimize for engagement time. They optimize for your heart rate variability and reported calm.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                          <Shield size={20} />
                        </div>
                        <div>
                          <h4 className="font-serif text-lg text-slate-800 mb-1">Radical Privacy</h4>
                          <p className="text-slate-500 font-light text-sm leading-relaxed">Your emotional data stays yours. We use on-device processing to ensure your vulnerable moments remain private.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className="relative h-[600px] bg-white rounded-[40px] p-8 shadow-xl shadow-slate-200/50 overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-[100px] -z-10" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-slate-50 rounded-tr-[80px] -z-10" />
                    
                    <div className="h-full w-full border border-slate-100 rounded-[24px] flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-transparent to-slate-50/50">
                       <div className="absolute inset-0 flex items-center justify-center opacity-30">
                          <div className="w-64 h-64 bg-gradient-to-tr from-sage-200 to-sky-200 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
                          <div className="w-64 h-64 bg-gradient-to-tl from-lavender-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                       </div>
                       
                       <div className="relative z-10 text-center space-y-2 p-6">
                          <p className="font-serif text-2xl text-slate-400 italic">"The quiet mind is not empty,<br/>it is full of the universe."</p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
        
        {currentView === 'about' && <About />}
        {currentView === 'games' && <MindfulGames />}
        {currentView === 'vr' && <ImmersiveSanctuary onNavigate={handleNavigate} />}
        {currentView === 'emergency' && <EmergencyCalmPage onNavigate={handleNavigate} />}
        {currentView === 'purpose' && <Purpose onNavigate={handleNavigate} />}
        {currentView === 'signin' && <SignIn onNavigate={handleNavigate} />}
        {currentView === 'signup' && <SignUp onNavigate={handleNavigate} />}
        {currentView === 'onboarding' && <Onboarding onNavigate={handleNavigate} />}
        {currentView === 'grounding' && <Grounding onNavigate={handleNavigate} />}
        {currentView === 'unhooking' && <Unhooking onNavigate={handleNavigate} />}
        {currentView === 'acting-values' && <ActingOnValues onNavigate={handleNavigate} />}
        {currentView === 'being-kind' && <BeingKind onNavigate={handleNavigate} />}
        {currentView === 'making-room' && <MakingRoom onNavigate={handleNavigate} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;