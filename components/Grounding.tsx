import React, { useState, useEffect } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { ViewState } from '../App';

interface GroundingProps {
  onNavigate: (page: ViewState) => void;
}

type SessionState = 'intro' | 'breathing' | 'grounding-step-1' | 'grounding-step-2' | 'grounding-step-3' | 'grounding-step-4' | 'grounding-step-5' | 'completion';

export const Grounding: React.FC<GroundingProps> = ({ onNavigate }) => {
  const [sessionState, setSessionState] = useState<SessionState>('intro');
  const [breathingText, setBreathingText] = useState('Inhale');
  const [breathingScale, setBreathingScale] = useState(1);
  const [cycleCount, setCycleCount] = useState(0);

  // Breathing Logic
  useEffect(() => {
    if (sessionState === 'breathing') {
      let isActive = true;
      const totalCycles = 3; // Doing 3 cycles for brevity, user said 3-5
      
      const runCycle = async () => {
        if (!isActive) return;
        
        // Inhale (4s)
        setBreathingText('Inhale');
        setBreathingScale(1.5);
        await new Promise(r => setTimeout(r, 4000));
        
        if (!isActive) return;

        // Hold (4s)
        setBreathingText('Hold');
        setBreathingScale(1.5); // Stay expanded
        await new Promise(r => setTimeout(r, 4000));

        if (!isActive) return;

        // Exhale (6s)
        setBreathingText('Exhale');
        setBreathingScale(1);
        await new Promise(r => setTimeout(r, 6000));

        if (!isActive) return;

        setCycleCount(prev => {
          const newCount = prev + 1;
          if (newCount >= totalCycles) {
            setSessionState('grounding-step-1');
          } else {
            runCycle();
          }
          return newCount;
        });
      };

      runCycle();

      return () => {
        isActive = false;
      };
    }
  }, [sessionState]);

  const renderContent = () => {
    switch (sessionState) {
      case 'intro':
        return (
          <div className="text-center space-y-8 animate-fade-in-up">
            <h1 className="font-serif text-4xl md:text-5xl text-slate-800 leading-tight">
              Take a moment.<br />
              You are safe.<br />
              Let’s calm your mind together.
            </h1>
            <button
              onClick={() => setSessionState('breathing')}
              className="px-8 py-4 bg-slate-800 text-white rounded-full text-lg font-medium hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              ▶ Start Calm Session
            </button>
          </div>
        );

      case 'breathing':
        return (
          <div className="flex flex-col items-center justify-center space-y-12 animate-fade-in">
            <div 
              className="w-64 h-64 rounded-full bg-gradient-to-br from-teal-200 to-emerald-200 flex items-center justify-center shadow-2xl transition-all duration-[4000ms] ease-in-out"
              style={{ 
                transform: `scale(${breathingScale})`,
                transitionDuration: breathingText === 'Exhale' ? '6000ms' : '4000ms'
              }}
            >
              <div className="text-slate-700 font-medium text-2xl tracking-widest uppercase">
                {breathingText}
              </div>
            </div>
            <p className="text-slate-500 text-lg font-light">
              Follow the rhythm...
            </p>
          </div>
        );

      case 'grounding-step-1':
        return (
          <GroundingStep 
            step="1"
            instruction="Look around."
            subInstruction="Name 5 things you can see."
            onNext={() => setSessionState('grounding-step-2')}
          />
        );
      case 'grounding-step-2':
        return (
          <GroundingStep 
            step="2"
            instruction="Notice 4 things you can feel."
            subInstruction="(texture of your clothes, feet on the floor...)"
            onNext={() => setSessionState('grounding-step-3')}
          />
        );
      case 'grounding-step-3':
        return (
          <GroundingStep 
            step="3"
            instruction="Listen carefully."
            subInstruction="Name 3 things you can hear."
            onNext={() => setSessionState('grounding-step-4')}
          />
        );
      case 'grounding-step-4':
        return (
          <GroundingStep 
            step="4"
            instruction="Notice 2 things you can smell."
            subInstruction="(or your favorite scents)"
            onNext={() => setSessionState('grounding-step-5')}
          />
        );
      case 'grounding-step-5':
        return (
          <GroundingStep 
            step="5"
            instruction="Name 1 thing you can taste."
            subInstruction="(or a taste you enjoy)"
            onNext={() => setSessionState('completion')}
          />
        );

      case 'completion':
        return (
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 mb-6">
              <Check size={40} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-800 leading-tight">
              You are present.<br />
              You are grounded.<br />
              You are in control.
            </h2>
            <button
              onClick={() => onNavigate('home')}
              className="px-8 py-4 bg-slate-800 text-white rounded-full text-lg font-medium hover:bg-slate-700 transition-all shadow-lg"
            >
              Return to Home
            </button>
          </div>
        );
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 via-emerald-50 to-teal-50 flex flex-col items-center justify-center px-6 pt-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-sky-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-3xl" />
      </div>

      {/* Navigation (only show if not in deep process or allow exit?) - Let's allow exit */}
      <button 
        onClick={() => onNavigate('purpose')}
        className="absolute top-8 left-8 p-2 text-slate-500 hover:text-slate-800 transition-colors z-20"
      >
        <ArrowLeft size={24} />
      </button>

      <div className="relative z-10 w-full max-w-2xl">
        {renderContent()}
      </div>
    </section>
  );
};

const GroundingStep: React.FC<{
  step: string;
  instruction: string;
  subInstruction: string;
  onNext: () => void;
}> = ({ step, instruction, subInstruction, onNext }) => (
  <div className="text-center space-y-8 animate-fade-in-up">
    <span className="inline-block px-4 py-1 rounded-full bg-white/60 border border-slate-200 text-slate-500 text-sm font-medium tracking-widest uppercase mb-4">
      Step {step}
    </span>
    <h2 className="font-serif text-3xl md:text-5xl text-slate-800 leading-tight">
      {instruction}
    </h2>
    <p className="text-xl text-slate-500 font-light">
      {subInstruction}
    </p>
    <div className="pt-8">
      <button
        onClick={onNext}
        className="px-10 py-4 bg-white border border-slate-200 text-slate-800 rounded-full text-lg font-medium hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm hover:shadow-md"
      >
        Next
      </button>
    </div>
  </div>
);
