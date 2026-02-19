import React from 'react';
import { Compass, ArrowLeft } from 'lucide-react';

interface Props {
  onNavigate: (page: 'home') => void;
}

export const Purpose: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 relative z-10 flex flex-col items-center">
      <div className="max-w-3xl w-full mx-auto text-center space-y-12 animate-fade-in-up">
        
        {/* Header Badge */}
        <span className="inline-block py-1 px-3 rounded-full bg-white/60 border border-white text-xs font-semibold tracking-widest text-slate-500 uppercase backdrop-blur-sm">
          Core Values
        </span>

        {/* Main Title Area */}
        <div className="space-y-6">
          <div className="w-20 h-20 bg-slate-100 rounded-3xl mx-auto flex items-center justify-center text-slate-800 shadow-sm mb-8">
            <Compass size={40} strokeWidth={1.5} />
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl text-slate-800 leading-tight">
            What Doing Matters
          </h1>
          
          <p className="text-lg text-slate-500 font-light max-w-lg mx-auto leading-relaxed">
            Align your daily actions with your core values through guided reflection and journaling.
          </p>
        </div>

        {/* Status Card */}
        <div className="relative overflow-hidden rounded-[2rem] bg-white/40 backdrop-blur-md border border-white/60 p-12 md:p-16 shadow-xl shadow-slate-200/50 max-w-2xl mx-auto">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-amber-50 to-orange-50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 opacity-60" />
          
          <div className="relative z-10 flex flex-col items-center">
             <h2 className="font-serif text-3xl text-slate-700 mb-4">We are working on this</h2>
             <div className="w-16 h-1 bg-slate-200 rounded-full mb-6" />
             <p className="text-slate-600 font-light mb-8">
               To provide you with the best experience, our journaling and reflection tools are currently being developed to ensure maximum privacy and clarity.
             </p>
             <button 
               onClick={() => onNavigate('home')}
               className="flex items-center gap-2 px-8 py-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-all duration-300 hover:shadow-lg"
             >
               <ArrowLeft size={18} />
               Return to Home
             </button>
          </div>
        </div>

      </div>
    </section>
  );
};