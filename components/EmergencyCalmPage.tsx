import React from 'react';
import { Sparkles, ArrowLeft, Play } from 'lucide-react';
import { ViewState } from '../App';

interface Props {
  onNavigate: (page: ViewState) => void;
}

export const EmergencyCalmPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 relative z-10 flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto text-center space-y-12 animate-fade-in-up">
        
        {/* Header Badge */}
        <span className="inline-block py-1 px-3 rounded-full bg-white/60 border border-white text-xs font-semibold tracking-widest text-slate-500 uppercase backdrop-blur-sm">
          AI Assistant
        </span>

        {/* Main Title Area */}
        <div className="space-y-6">
          <div className="w-20 h-20 bg-slate-100 rounded-3xl mx-auto flex items-center justify-center text-slate-800 shadow-sm mb-8">
            <Sparkles size={40} strokeWidth={1.5} />
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl text-slate-800 leading-tight">
            Emergency Calm
          </h1>
          
          <p className="text-lg text-slate-500 font-light max-w-lg mx-auto leading-relaxed">
            Instant, AI-generated grounding techniques tailored to your current emotional state.
          </p>
        </div>

        {/* Meet Auro Card */}
        <div 
          onClick={() => onNavigate('auro-companion')}
          className="relative overflow-hidden rounded-[2rem] bg-white/60 backdrop-blur-md border border-white/60 shadow-xl shadow-slate-200/50 max-w-2xl mx-auto cursor-pointer group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
          {/* Animation Preview Container */}
          <div className="relative h-80 w-full bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center overflow-hidden">
            
            {/* Animated Auro Character Placeholder */}
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg animate-bounce-gentle">
                 <img 
                   src="https://picsum.photos/seed/auro/400/400" 
                   alt="Auro" 
                   className="w-full h-full object-cover"
                 />
              </div>
              
              {/* Speech Bubble Animation */}
              <div className="absolute -top-12 -right-12 bg-white px-6 py-3 rounded-2xl rounded-bl-none shadow-md animate-pop-in">
                <span className="text-slate-800 font-serif text-lg">Hello! 👋</span>
              </div>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-indigo-600 shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                <Play size={32} fill="currentColor" />
              </div>
            </div>
          </div>

          <div className="p-8 text-center space-y-4">
             <h2 className="font-serif text-2xl text-slate-800">Meet Auro</h2>
             <p className="text-slate-500">Bring your companion to life with AI video generation.</p>
          </div>
        </div>

        {/* Custom Message */}
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <p className="text-lg text-slate-600 leading-relaxed">
            Auro is hero of our <span className="font-bold">MindControl</span> idea, we are improving our hero to help make <span className="font-bold text-orange-500">feel you better</span>
          </p>
        </div>

        <div className="pt-8">
           <button 
             onClick={() => onNavigate('home')}
             className="flex items-center gap-2 px-8 py-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-all duration-300 hover:shadow-lg mx-auto"
           >
             <ArrowLeft size={18} />
             Return to Home
           </button>
        </div>

        <style>{`
          @keyframes bounce-gentle {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes pop-in {
            0% { opacity: 0; transform: scale(0.8) translate(-10px, 10px); }
            20% { opacity: 1; transform: scale(1) translate(0, 0); }
            80% { opacity: 1; transform: scale(1) translate(0, 0); }
            100% { opacity: 0; transform: scale(0.8) translate(-10px, 10px); }
          }
          .animate-bounce-gentle {
            animation: bounce-gentle 3s ease-in-out infinite;
          }
          .animate-pop-in {
            animation: pop-in 4s ease-in-out infinite;
          }
        `}</style>

      </div>
    </section>
  );
};