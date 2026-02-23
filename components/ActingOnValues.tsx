import React, { useState } from 'react';
import { ArrowLeft, Compass, Star, Target, CheckCircle2 } from 'lucide-react';
import { ViewState } from '../App';

interface ActingOnValuesProps {
  onNavigate: (page: ViewState) => void;
}

type Step = 'intro' | 'values' | 'action' | 'commit' | 'completion';

const VALUES = [
  'Doing my best',
  'Being disciplined',
  'Learning consistently',
  'Staying calm',
  'Supporting my future goals'
];

const EXAMPLE_ACTIONS = [
  'Study for 20 minutes',
  'Revise one topic',
  'Organize notes',
  'Avoid phone for 30 minutes'
];

export const ActingOnValues: React.FC<ActingOnValuesProps> = ({ onNavigate }) => {
  const [step, setStep] = useState<Step>('intro');
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [customValue, setCustomValue] = useState('');
  const [selectedAction, setSelectedAction] = useState<string>('');
  const [customAction, setCustomAction] = useState('');
  const [isCommitted, setIsCommitted] = useState(false);

  const finalValue = customValue || selectedValue;
  const finalAction = customAction || selectedAction;

  const renderContent = () => {
    switch (step) {
      case 'intro':
        return (
          <div className="text-center space-y-8 animate-fade-in-up max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto text-orange-600 mb-6 animate-pulse">
              <Compass size={40} strokeWidth={1.5} />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-slate-800 leading-tight">
              When stress feels heavy,<br />
              pause and ask yourself…<br />
              <span className="italic text-orange-600">What kind of student do I want to be?</span>
            </h1>
            <button
              onClick={() => setStep('values')}
              className="px-8 py-4 bg-slate-800 text-white rounded-full text-lg font-medium hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 mt-8"
            >
              ▶ Start Reflection
            </button>
          </div>
        );

      case 'values':
        return (
          <div className="text-center space-y-8 animate-fade-in-up max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-slate-800 leading-tight">
              What matters most to you right now?
            </h2>
            <div className="grid gap-4 max-w-md mx-auto">
              {VALUES.map((val) => (
                <button
                  key={val}
                  onClick={() => { setSelectedValue(val); setCustomValue(''); }}
                  className={`p-4 rounded-xl border transition-all text-lg ${
                    selectedValue === val 
                      ? 'bg-orange-100 border-orange-300 text-orange-800 shadow-md' 
                      : 'bg-white/60 border-white/50 text-slate-600 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  {val}
                </button>
              ))}
              <input
                type="text"
                placeholder="Or type your own..."
                value={customValue}
                onChange={(e) => { setCustomValue(e.target.value); setSelectedValue(''); }}
                className="p-4 rounded-xl border border-white/50 bg-white/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-200 text-center text-lg placeholder:text-slate-400"
              />
            </div>
            <button
              disabled={!finalValue}
              onClick={() => setStep('action')}
              className="px-10 py-4 bg-slate-800 text-white rounded-full text-lg font-medium hover:bg-slate-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-8"
            >
              Next
            </button>
          </div>
        );

      case 'action':
        return (
          <div className="text-center space-y-8 animate-fade-in-up max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-slate-800 leading-tight">
              If <span className="text-orange-600 italic">{finalValue.toLowerCase()}</span> matters to you,<br />
              what is one small action you can take right now?
            </h2>
            
            <div className="space-y-6 max-w-md mx-auto">
              <div className="grid grid-cols-1 gap-3">
                {EXAMPLE_ACTIONS.map((act) => (
                  <button
                    key={act}
                    onClick={() => { setSelectedAction(act); setCustomAction(''); }}
                    className={`p-3 rounded-lg border transition-all text-base ${
                      selectedAction === act
                        ? 'bg-orange-100 border-orange-300 text-orange-800 shadow-md'
                        : 'bg-white/60 border-white/50 text-slate-600 hover:bg-white'
                    }`}
                  >
                    {act}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-300/50"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-transparent text-slate-500">or</span>
                </div>
              </div>

              <input
                type="text"
                placeholder="Type your own small action..."
                value={customAction}
                onChange={(e) => { setCustomAction(e.target.value); setSelectedAction(''); }}
                className="w-full p-4 rounded-xl border border-white/50 bg-white/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-200 text-center text-lg placeholder:text-slate-400"
              />
            </div>

            <button
              disabled={!finalAction}
              onClick={() => setStep('commit')}
              className="px-10 py-4 bg-slate-800 text-white rounded-full text-lg font-medium hover:bg-slate-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-8"
            >
              Next
            </button>
          </div>
        );

      case 'commit':
        return (
          <div className="text-center space-y-8 animate-fade-in-up max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto text-orange-600 mb-6">
              <Target size={40} strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-800 leading-tight">
              Take one small step.<br />
              Small actions build strong habits.
            </h2>
            
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-orange-100 shadow-lg max-w-md mx-auto transform transition-all hover:scale-105">
              <p className="text-xl text-slate-700 mb-6 font-medium">
                I will <span className="text-orange-600">{finalAction.toLowerCase()}</span> right now.
              </p>
              
              <label className="flex items-center justify-center gap-4 cursor-pointer group">
                <div className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${isCommitted ? 'bg-orange-500 border-orange-500' : 'border-slate-300 group-hover:border-orange-400'}`}>
                  {isCommitted && <CheckCircle2 className="text-white" size={20} />}
                </div>
                <input 
                  type="checkbox" 
                  className="hidden" 
                  checked={isCommitted} 
                  onChange={(e) => {
                    setIsCommitted(e.target.checked);
                    if (e.target.checked) {
                      setTimeout(() => setStep('completion'), 1000);
                    }
                  }} 
                />
                <span className="text-lg text-slate-600 group-hover:text-slate-800 transition-colors">I will start this action now.</span>
              </label>
            </div>
          </div>
        );

      case 'completion':
        return (
          <div className="text-center space-y-8 animate-fade-in-up max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto text-orange-600 mb-6 animate-bounce">
              <Star size={48} fill="currentColor" className="text-orange-500" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-800 leading-tight">
              You are stronger than your stress.<br />
              Your actions define your progress.
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
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex flex-col items-center justify-center px-6 pt-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-yellow-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
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
