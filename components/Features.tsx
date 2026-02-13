import React, { useState } from 'react';
import { Trophy, Headset, Sparkles, Compass } from 'lucide-react';
import { FeatureItem } from '../types';
import { EmergencyCalmModal } from './EmergencyCalmModal';

const features: FeatureItem[] = [
  {
    id: 'gamification',
    title: 'Mindful Progression',
    description: 'Turn your wellness journey into a gentle garden that grows as you focus. No leaderboards, just personal bloom.',
    icon: Trophy,
    color: 'bg-sage-50',
    delay: '0s'
  },
  {
    id: 'vr',
    title: 'Immersive Sanctuary',
    description: 'Step into VR environments designed for decompression. Float in clouds or sit by a digital stream.',
    icon: Headset,
    color: 'bg-sky-50',
    delay: '0.2s'
  },
  {
    id: 'emergency',
    title: 'Emergency Calm',
    description: 'Feeling overwhelmed? Get an instant, AI-generated grounding technique tailored to your current state.',
    icon: Sparkles,
    color: 'bg-lavender-50',
    delay: '0.4s'
  },
  {
    id: 'purpose',
    title: 'What Doing Matters',
    description: 'Align your daily actions with your core values through guided reflection and intention setting.',
    icon: Compass,
    color: 'bg-orange-50',
    delay: '0.6s'
  }
];

export const Features: React.FC = () => {
  const [activeModal, setActiveModal] = useState<boolean>(false);

  const handleCardClick = (id: string) => {
    if (id === 'emergency') {
      setActiveModal(true);
    }
  };

  return (
    <section id="features" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-slate-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Features</span>
          <h2 className="font-serif text-4xl text-slate-800 mb-6">Designed for Serenity</h2>
          <p className="text-slate-500 max-w-xl mx-auto font-light">
            Tools built with empathy, grounded in science, and designed to help you reclaim your peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              onClick={() => handleCardClick(feature.id)}
              className={`
                group relative p-8 rounded-[32px] 
                bg-white border border-slate-100
                transition-all duration-500 ease-out
                hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]
                cursor-pointer
                flex flex-col items-center text-center
                opacity-0 animate-fade-in-up
              `}
              style={{ animationDelay: feature.delay, animationFillMode: 'forwards' }}
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 text-slate-700 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <feature.icon strokeWidth={1.5} size={32} />
              </div>
              
              <h3 className="font-serif text-xl text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              
              {feature.id === 'emergency' && (
                <span className="mt-6 text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  Try Now
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <EmergencyCalmModal isOpen={activeModal} onClose={() => setActiveModal(false)} />
    </section>
  );
};