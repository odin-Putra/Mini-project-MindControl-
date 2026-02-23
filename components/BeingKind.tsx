import React, { useState } from 'react';
import { ArrowLeft, Heart, Hand, Sparkles, User } from 'lucide-react';
import { ViewState } from '../App';

interface BeingKindProps {
  onNavigate: (page: ViewState) => void;
}

type Step = 'intro' | 'notice' | 'replace' | 'statement' | 'completion';

const CRITICAL_EXAMPLES = [
  "I am not good enough.",
  "I always fail.",
  "Others are better than me."
];

const KIND_EXAMPLES = [
  "You are trying your best.",
  "One exam does not define you.",
  "You can improve step by step."
];

export const BeingKind: React.FC<BeingKindProps> = ({ onNavigate }) => {
  const [step, setStep] = useState<Step>('intro');
  const [criticalThought, setCriticalThought] = useState('');
  const [kindThought, setKindThought] = useState('');

  const renderContent = () => {
    switch (step) {
      case 'intro':
        return (
          <div className="text-center space-y-8 animate-fade-in-up max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center mx-auto text-rose-500 mb-6 animate-pulse-slow">
              <Heart size={48} strokeWidth={1.5} fill="currentColor" className="text-rose-300" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-slate-800 leading-tight">
              Everyone struggles sometimes.<br />
              It’s okay to feel this way.<br />
              <span className="italic text-rose-500">Let’s treat ourselves with kindness.</span>
            </h1>
            <button
              onClick={() => setStep('notice')}
              className="px-8 py-4 bg-slate-800 text-white rounded-full text-lg font-medium hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 mt-8"
            >
              ▶ Start Exercise
            </button>
          </div>
        );

      case 'notice':
        return (
          <div className="text-center space-y-8 animate-fade-in-up max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-slate-800 leading-tight">
              What are you saying to yourself right now?
            </h2>
            
            <div className="grid gap-3 max-w-md mx-auto mb-6">
              {CRITICAL_EXAMPLES.map((ex, i) => (
                <div key={i} className="p-3 bg-white/40 rounded-lg text-slate-500 italic text-sm">
                  "{ex}"
                </div>
              ))}
            </div>

            <div className="max-w-md mx-auto">
              <input
                type="text"
                value={criticalThought}
                onChange={(e) => setCriticalThought(e.target.value)}
                placeholder="Write your current thought..."
                className="w-full px-6 py-4 bg-white/60 border border-rose-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-300 text-center text-lg text-slate-700 placeholder:text-slate-400 shadow-sm"
              />
            </div>

            <button
              onClick={() => setStep('replace')}
              className="px-10 py-4 bg-white border border-rose-200 text-slate-800 rounded-full text-lg font-medium hover:bg-rose-50 hover:border-rose-300 transition-all shadow-sm hover:shadow-md mt-8"
            >
              Next
            </button>
          </div>
        );

      case 'replace':
        return (
          <div className="text-center space-y-8 animate-fade-in-up max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto text-rose-500 mb-4">
              <User size={32} strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-800 leading-tight">
              Now imagine your best friend feels the same.<br />
              <span className="text-rose-600">What would you say to them?</span>
            </h2>

            <div className="grid gap-3 max-w-md mx-auto mb-6">
              {KIND_EXAMPLES.map((ex, i) => (
                <div key={i} className="p-3 bg-white/40 rounded-lg text-slate-500 italic text-sm">
                  "{ex}"
                </div>
              ))}
            </div>

            <div className="max-w-md mx-auto">
              <textarea
                value={kindThought}
                onChange={(e) => setKindThought(e.target.value)}
                placeholder="Write a kind response..."
                rows={3}
                className="w-full px-6 py-4 bg-white/60 border border-rose-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-300 text-center text-lg text-slate-700 placeholder:text-slate-400 shadow-sm resize-none"
              />
            </div>

            <button
              onClick={() => setStep('statement')}
              className="px-10 py-4 bg-white border border-rose-200 text-slate-800 rounded-full text-lg font-medium hover:bg-rose-50 hover:border-rose-300 transition-all shadow-sm hover:shadow-md mt-8"
            >
              Next
            </button>
          </div>
        );

      case 'statement':
        return (
          <div className="text-center space-y-12 animate-fade-in-up max-w-3xl mx-auto relative">
            {/* Soft Glow Background Animation */}
            <div className="absolute inset-0 bg-rose-200/30 blur-[100px] rounded-full animate-pulse-slow pointer-events-none" />
            
            <h2 className="font-serif text-2xl text-slate-600 relative z-10">
              Say this gently to yourself:
            </h2>

            <div className="relative z-10 space-y-6">
              <p className="font-serif text-4xl md:text-6xl text-slate-800 leading-tight drop-shadow-sm">
                "I am doing my best."
              </p>
              <p className="font-serif text-4xl md:text-6xl text-slate-800 leading-tight drop-shadow-sm delay-300 animate-fade-in">
                "It’s okay to make mistakes."
              </p>
              <p className="font-serif text-4xl md:text-6xl text-slate-800 leading-tight drop-shadow-sm delay-700 animate-fade-in">
                "I deserve patience and growth."
              </p>
            </div>

            <button
              onClick={() => setStep('completion')}
              className="relative z-10 px-10 py-4 bg-white/80 backdrop-blur-sm border border-rose-200 text-slate-800 rounded-full text-lg font-medium hover:bg-white hover:shadow-md transition-all mt-12"
            >
              Next
            </button>
          </div>
        );

      case 'completion':
        return (
          <div className="text-center space-y-8 animate-fade-in-up max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center mx-auto text-rose-500 mb-6 animate-float">
              <Sparkles size={48} strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-800 leading-tight">
              You deserve kindness.<br />
              Especially from yourself.
            </h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto mt-8 border-t border-rose-200 pt-8">
              This feature adapts self-compassion techniques recommended by the World Health Organization into a supportive digital experience for college students.
            </p>
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
    <section className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-slate-50 flex flex-col items-center justify-center px-6 pt-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-rose-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-pink-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
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
