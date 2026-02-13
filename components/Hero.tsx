import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
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
            className="group relative px-8 py-4 bg-slate-800 text-white rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="relative z-10">Explore the Platform</span>
            <div className="absolute inset-0 rounded-full bg-slate-600 blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
          </button>
          
          <button className="px-8 py-4 text-slate-600 font-medium hover:text-slate-900 transition-colors flex items-center gap-2 group">
            Watch the Film
            <span className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center group-hover:border-slate-800 transition-colors">
              <span className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-slate-600 border-b-[5px] border-b-transparent ml-1" />
            </span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400 opacity-60">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};