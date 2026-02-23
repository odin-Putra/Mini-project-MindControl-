import React, { useState } from 'react';
import { ArrowDown, Loader2 } from 'lucide-react';
import { ViewState } from '../App';

interface HeroProps {
  onNavigate?: (view: ViewState) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGetStarted = () => {
    if (!onNavigate) return;
    setIsLoading(true);
    // Simulate a short delay for better UX feedback before navigating
    setTimeout(() => {
      onNavigate('signin');
      setIsLoading(false);
    }, 800);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20">
      
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-sage-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float" />
      <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[10%] left-[20%] w-[350px] h-[350px] bg-lavender-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-5xl md:text-7xl text-slate-800 mb-6 leading-tight animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
          Welcome to <br/>
          <span className="italic text-slate-600">MindControl</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-sans font-light leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
          Reclaim your focus. Restore your calm. <br className="hidden md:block" />
          A sanctuary for your mind in a noisy world.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={handleGetStarted}
            disabled={isLoading}
            className="group relative px-8 py-4 bg-slate-800 text-white rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-80 disabled:cursor-not-allowed disabled:transform-none min-w-[160px] flex justify-center"
          >
            <span className="relative z-10 flex items-center gap-2">
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  <span>Loading...</span>
                </>
              ) : (
                'Get Started'
              )}
            </span>
            {!isLoading && (
              <div className="absolute inset-0 rounded-full bg-slate-600 blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
            )}
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400 opacity-60">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};