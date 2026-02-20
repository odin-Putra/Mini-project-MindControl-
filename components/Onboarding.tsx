import React, { useState } from 'react';
import { ArrowRight, Check, Wind, Gamepad2, Glasses, ShieldCheck } from 'lucide-react';
import { ViewState } from '../App';

interface OnboardingProps {
  onNavigate: (view: ViewState) => void;
}

const steps = [
  {
    id: 1,
    title: "Welcome to Sanctuary",
    description: "You've taken the first step towards a calmer, more focused mind. MindControl is designed to help you reclaim your attention.",
    icon: <ShieldCheck size={48} className="text-sage-500" />,
    color: "bg-sage-100"
  },
  {
    id: 2,
    title: "Emergency Calm",
    description: "Feeling overwhelmed? Access our 'Emergency Calm' tool instantly for guided breathing and grounding techniques when you need them most.",
    icon: <Wind size={48} className="text-sky-500" />,
    color: "bg-sky-100"
  },
  {
    id: 3,
    title: "Mindful Play",
    description: "Engage with our collection of gentle, non-addictive games designed to sharpen your focus without the dopamine spikes.",
    icon: <Gamepad2 size={48} className="text-lavender-500" />,
    color: "bg-lavender-100"
  },
  {
    id: 4,
    title: "Immersive Spaces",
    description: "Step into our VR-ready visual sanctuaries. Perfect for deep relaxation sessions or just a moment of peace.",
    icon: <Glasses size={48} className="text-pink-500" />,
    color: "bg-pink-100"
  }
];

export const Onboarding: React.FC<OnboardingProps> = ({ onNavigate }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onNavigate('home');
    }
  };

  const step = steps[currentStep];

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-[40px] shadow-2xl p-8 md:p-12 relative overflow-hidden animate-fade-in-up">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
          <div 
            className="h-full bg-slate-800 transition-all duration-500 ease-out"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>

        <div className="flex flex-col items-center text-center space-y-8 mt-4">
          {/* Icon Bubble */}
          <div className={`w-32 h-32 rounded-full ${step.color} flex items-center justify-center mb-4 transition-colors duration-500`}>
            {step.icon}
          </div>

          {/* Content */}
          <div className="space-y-4 max-w-lg">
            <h2 className="font-serif text-3xl md:text-4xl text-slate-800 transition-all duration-300">
              {step.title}
            </h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed min-h-[100px]">
              {step.description}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between w-full pt-8">
            <div className="flex gap-2">
              {steps.map((_, idx) => (
                <div 
                  key={idx}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentStep ? 'bg-slate-800 w-8' : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="group flex items-center gap-2 px-8 py-4 bg-slate-800 text-white rounded-full font-medium hover:bg-slate-700 transition-all hover:pr-6"
            >
              <span>{currentStep === steps.length - 1 ? 'Get Started' : 'Next'}</span>
              {currentStep === steps.length - 1 ? (
                <Check size={20} />
              ) : (
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
