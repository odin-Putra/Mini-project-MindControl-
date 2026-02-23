import React, { useState, useEffect } from 'react';
import { ArrowLeft, Cloud, Waves, Circle, Check, Wind } from 'lucide-react';
import { ViewState } from '../App';

interface MakingRoomProps {
  onNavigate: (page: ViewState) => void;
}

type Step = 'intro' | 'identify' | 'locate' | 'breathe' | 'acceptance' | 'completion';

const FEELINGS = [
  'Anxiety',
  'Fear',
  'Sadness',
  'Frustration',
  'Overwhelm'
];

const BODY_LOCATIONS = [
  'Chest tightness',
  'Stomach discomfort',
  'Head tension',
  'Heavy shoulders'
];

export const MakingRoom: React.FC<MakingRoomProps> = ({ onNavigate }) => {
  const [step, setStep] = useState<Step>('intro');
  const [selectedFeeling, setSelectedFeeling] = useState('');
  const [customFeeling, setCustomFeeling] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [customLocation, setCustomLocation] = useState('');
  const [breathingState, setBreathingState] = useState<'inhale' | 'exhale'>('inhale');

  useEffect(() => {
    if (step === 'breathe') {
      const interval = setInterval(() => {
        setBreathingState(prev => prev === 'inhale' ? 'exhale' : 'inhale');
      }, 4000); // 4 second cycle
      return () => clearInterval(interval);
    }
  }, [step]);

  const finalFeeling = customFeeling || selectedFeeling;

  const renderContent = () => {
    switch (step) {
      case 'intro':
        return (
          <div className="text-center space-y-8 animate-fade-in-up max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-sky-100 rounded-full flex items-center justify-center mx-auto text-sky-600 mb-6 animate-float">
              <Cloud size={48} strokeWidth={1.5} />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-slate-800 leading-tight">
              Strong emotions can feel uncomfortable.<br />
              But we don’t have to fight them.<br />
              <span className="italic text-sky-600">Let’s make room for them.</span>
            </h1>
            <button
              onClick={() => setStep('identify')}
              className="px-8 py-4 bg-slate-800 text-white rounded-full text-lg font-medium hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 mt-8"
            >
              ▶ Start Exercise
            </button>
          </div>
        );

      case 'identify':
        return (
          <div className="text-center space-y-8 animate-fade-in-up max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-slate-800 leading-tight">
              What are you feeling right now?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
              {FEELINGS.map((feeling) => (
                <button
                  key={feeling}
                  onClick={() => { setSelectedFeeling(feeling); setCustomFeeling(''); }}
                  className={`p-4 rounded-xl border transition-all text-lg ${
                    selectedFeeling === feeling
                      ? 'bg-sky-100 border-sky-300 text-sky-800 shadow-md'
                      : 'bg-white/60 border-white/50 text-slate-600 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  {feeling}
                </button>
              ))}
            </div>
            <div className="max-w-lg mx-auto mt-4">
              <input
                type="text"
                placeholder="Or type your own..."
                value={customFeeling}
                onChange={(e) => { setCustomFeeling(e.target.value); setSelectedFeeling(''); }}
                className="w-full p-4 rounded-xl border border-white/50 bg-white/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-200 text-center text-lg placeholder:text-slate-400"
              />
            </div>
            <button
              disabled={!finalFeeling}
              onClick={() => setStep('locate')}
              className="px-10 py-4 bg-slate-800 text-white rounded-full text-lg font-medium hover:bg-slate-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-8"
            >
              Next
            </button>
          </div>
        );

      case 'locate':
        return (
          <div className="text-center space-y-8 animate-fade-in-up max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-slate-800 leading-tight">
              Where do you feel this emotion in your body?
            </h2>
            <p className="text-slate-500 font-light">
              Encourage awareness, not judgment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
              {BODY_LOCATIONS.map((loc) => (
                <button
                  key={loc}
                  onClick={() => { setSelectedLocation(loc); setCustomLocation(''); }}
                  className={`p-4 rounded-xl border transition-all text-lg ${
                    selectedLocation === loc
                      ? 'bg-sky-100 border-sky-300 text-sky-800 shadow-md'
                      : 'bg-white/60 border-white/50 text-slate-600 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>
            <div className="max-w-lg mx-auto mt-4">
               <input
                type="text"
                placeholder="Or describe the sensation..."
                value={customLocation}
                onChange={(e) => { setCustomLocation(e.target.value); setSelectedLocation(''); }}
                className="w-full p-4 rounded-xl border border-white/50 bg-white/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-200 text-center text-lg placeholder:text-slate-400"
              />
            </div>
            <button
              onClick={() => setStep('breathe')}
              className="px-10 py-4 bg-slate-800 text-white rounded-full text-lg font-medium hover:bg-slate-700 transition-all shadow-lg mt-8"
            >
              Next
            </button>
          </div>
        );

      case 'breathe':
        return (
          <div className="text-center space-y-12 animate-fade-in-up max-w-2xl mx-auto relative min-h-[500px] flex flex-col items-center justify-center">
            <h2 className="font-serif text-3xl md:text-4xl text-slate-800 leading-tight relative z-10">
              Take a slow breath.<br />
              Imagine creating space around this feeling.
            </h2>
            
            {/* Breathing Animation */}
            <div className="relative w-64 h-64 flex items-center justify-center my-8">
              <div 
                className={`absolute inset-0 bg-sky-200/30 rounded-full blur-xl transition-all duration-[4000ms] ease-in-out ${breathingState === 'inhale' ? 'scale-150 opacity-60' : 'scale-100 opacity-30'}`}
              />
              <div 
                className={`absolute inset-0 border-2 border-sky-300/50 rounded-full transition-all duration-[4000ms] ease-in-out ${breathingState === 'inhale' ? 'scale-125' : 'scale-90'}`}
              />
              <div className="relative z-10 text-sky-800 font-medium text-xl tracking-widest uppercase">
                {breathingState}
              </div>
            </div>

            <p className="text-slate-600 text-lg font-light max-w-md mx-auto relative z-10 animate-fade-in delay-500">
              You don’t need to remove the feeling.<br />
              Just allow it to be there.
            </p>

            <button
              onClick={() => setStep('acceptance')}
              className="px-10 py-4 bg-white/80 backdrop-blur-sm border border-sky-200 text-slate-800 rounded-full text-lg font-medium hover:bg-white hover:shadow-md transition-all mt-8 relative z-10"
            >
              Next
            </button>
          </div>
        );

      case 'acceptance':
        return (
          <div className="text-center space-y-8 animate-fade-in-up max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto text-sky-600 mb-6">
              <Waves size={40} strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-800 leading-tight">
              This feeling is temporary.<br />
              I can carry it and still move forward.
            </h2>
            <button
              onClick={() => setStep('completion')}
              className="px-10 py-4 bg-slate-800 text-white rounded-full text-lg font-medium hover:bg-slate-700 transition-all shadow-lg mt-12"
            >
              Next
            </button>
          </div>
        );

      case 'completion':
        return (
          <div className="text-center space-y-8 animate-fade-in-up max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-sky-100 rounded-full flex items-center justify-center mx-auto text-sky-600 mb-6 animate-pulse">
              <Check size={48} strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-800 leading-tight">
              You made space for your emotion.<br />
              That is strength.
            </h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto mt-8 border-t border-sky-200 pt-8">
              This feature adapts emotional acceptance techniques recommended by the World Health Organization into a structured digital self-help tool for students.
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
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-blue-50 flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-sky-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '15s' }} />
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
