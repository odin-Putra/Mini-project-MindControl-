import React, { useState, useEffect } from 'react';
import { ArrowLeft, Cloud, Feather, Wind } from 'lucide-react';
import { ViewState } from '../App';

interface UnhookingProps {
  onNavigate: (page: ViewState) => void;
}

type Step = 'intro' | 'step1' | 'step2' | 'step3' | 'step4' | 'completion';

export const Unhooking: React.FC<UnhookingProps> = ({ onNavigate }) => {
  const [step, setStep] = useState<Step>('intro');
  const [thought, setThought] = useState('');

  const renderContent = () => {
    switch (step) {
      case 'intro':
        return (
          <div className="text-center space-y-8 animate-fade-in-up max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto text-indigo-600 mb-6 animate-float">
              <Feather size={40} strokeWidth={1.5} />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-slate-800 leading-tight">
              Sometimes thoughts feel overwhelming.<br />
              But remember…<br />
              <span className="italic text-indigo-600">Thoughts are not facts.</span>
            </h1>
            <button
              onClick={() => setStep('step1')}
              className="px-8 py-4 bg-slate-800 text-white rounded-full text-lg font-medium hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 mt-8"
            >
              ▶ Start Exercise
            </button>
          </div>
        );

      case 'step1':
        return (
          <div className="text-center space-y-8 animate-fade-in-up max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1 rounded-full bg-white/60 border border-slate-200 text-slate-500 text-sm font-medium tracking-widest uppercase mb-4">
              Step 1
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-800 leading-tight">
              Close your eyes for a moment.<br />
              What thought is bothering you right now?
            </h2>
            <div className="max-w-md mx-auto">
              <input
                type="text"
                value={thought}
                onChange={(e) => setThought(e.target.value)}
                placeholder="Type your thought here (optional)..."
                className="w-full px-6 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-200 text-center text-lg text-slate-700 placeholder:text-slate-400"
              />
            </div>
            <p className="text-slate-500 font-light">
              Or simply keep the thought in your mind.
            </p>
            <button
              onClick={() => setStep('step2')}
              className="px-10 py-4 bg-white border border-slate-200 text-slate-800 rounded-full text-lg font-medium hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm hover:shadow-md mt-8"
            >
              Next
            </button>
          </div>
        );

      case 'step2':
        return (
          <div className="text-center space-y-8 animate-fade-in-up max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1 rounded-full bg-white/60 border border-slate-200 text-slate-500 text-sm font-medium tracking-widest uppercase mb-4">
              Step 2
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-800 leading-tight">
              Now say to yourself:
            </h2>
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-sm inline-block">
              <p className="text-2xl md:text-3xl text-indigo-800 font-serif italic">
                "I am noticing the thought that...<br />
                <span className="not-italic text-slate-600 text-xl mt-4 block">
                  {thought ? `...${thought}` : '...[your thought]'}
                </span>"
              </p>
            </div>
            <p className="text-slate-500 font-light max-w-lg mx-auto">
              Notice how this creates a little distance between you and the thought?
            </p>
            <button
              onClick={() => setStep('step3')}
              className="px-10 py-4 bg-white border border-slate-200 text-slate-800 rounded-full text-lg font-medium hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm hover:shadow-md mt-8"
            >
              Next
            </button>
          </div>
        );

      case 'step3':
        return (
          <div className="text-center space-y-8 animate-fade-in-up max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1 rounded-full bg-white/60 border border-slate-200 text-slate-500 text-sm font-medium tracking-widest uppercase mb-4">
              Step 3
            </span>
            <div className="relative h-40 flex items-center justify-center">
               <div className="absolute animate-float text-indigo-900/20 text-6xl font-serif select-none pointer-events-none blur-sm">
                  {thought || "Thought"}
               </div>
               <div className="absolute animate-float" style={{ animationDelay: '1s' }}>
                  <h2 className="font-serif text-3xl md:text-4xl text-slate-800 leading-tight relative z-10">
                    Your thought is just a mental event.<br />
                    It is not a fact.<br />
                    It will pass.
                  </h2>
               </div>
            </div>
            
            <button
              onClick={() => setStep('step4')}
              className="px-10 py-4 bg-white border border-slate-200 text-slate-800 rounded-full text-lg font-medium hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm hover:shadow-md mt-12"
            >
              Next
            </button>
          </div>
        );

      case 'step4':
        return (
          <div className="text-center space-y-8 animate-fade-in-up max-w-2xl mx-auto relative">
            <span className="inline-block px-4 py-1 rounded-full bg-white/60 border border-slate-200 text-slate-500 text-sm font-medium tracking-widest uppercase mb-4">
              Step 4
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-800 leading-tight">
              Imagine placing this thought on a cloud.<br />
              Watch it slowly float away.
            </h2>
            
            <div className="relative h-64 w-full overflow-hidden rounded-3xl bg-sky-50/50 border border-white/50">
               {/* Cloud Animation */}
               <div className="absolute top-1/2 left-[-100px] animate-[float-right_15s_linear_infinite] flex flex-col items-center">
                  <Cloud size={64} className="text-white fill-white drop-shadow-md" />
                  <span className="text-xs text-slate-400 mt-2 max-w-[100px] truncate">{thought || "The thought"}</span>
               </div>
               <div className="absolute top-1/3 left-[-50px] animate-[float-right_20s_linear_infinite] opacity-60" style={{ animationDelay: '5s' }}>
                  <Cloud size={48} className="text-white fill-white" />
               </div>
               <div className="absolute top-2/3 left-[-150px] animate-[float-right_18s_linear_infinite] opacity-40" style={{ animationDelay: '2s' }}>
                  <Cloud size={80} className="text-white fill-white" />
               </div>
            </div>

            <style>{`
              @keyframes float-right {
                from { transform: translateX(0); }
                to { transform: translateX(800px); }
              }
            `}</style>

            <button
              onClick={() => setStep('completion')}
              className="px-10 py-4 bg-white border border-slate-200 text-slate-800 rounded-full text-lg font-medium hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm hover:shadow-md mt-8"
            >
              Next
            </button>
          </div>
        );

      case 'completion':
        return (
          <div className="text-center space-y-8 animate-fade-in-up max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto text-indigo-600 mb-6">
              <Wind size={40} strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-800 leading-tight">
              You are not your thoughts.<br />
              You are the observer.<br />
              You are in control.
            </h2>
            <button
              onClick={() => onNavigate('home')}
              className="px-8 py-4 bg-slate-800 text-white rounded-full text-lg font-medium hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl mt-8"
            >
              ✔ Return to Home
            </button>
          </div>
        );
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-slate-50 flex flex-col items-center justify-center px-6 pt-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      {/* Navigation */}
      <button 
        onClick={() => onNavigate('purpose')}
        className="absolute top-8 left-8 p-2 text-slate-500 hover:text-slate-800 transition-colors z-20"
      >
        <ArrowLeft size={24} />
      </button>

      <div className="relative z-10 w-full">
        {renderContent()}
      </div>
    </section>
  );
};
