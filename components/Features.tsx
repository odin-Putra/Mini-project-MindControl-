import React from 'react';
import { Trophy, Headset, Sparkles, Compass, ArrowUpRight } from 'lucide-react';
import { FeatureItem } from '../types';

interface FeaturesProps {
  onNavigate: (view: 'games' | 'vr' | 'emergency' | 'purpose') => void;
}

const features: FeatureItem[] = [
  {
    id: 'gamification',
    title: 'Mindful Progression',
    description: 'Turn your wellness journey into a gentle garden that grows as you focus.',
    icon: Trophy,
    color: 'text-slate-800',
    delay: '0s'
  },
  {
    id: 'vr',
    title: 'Immersive Sanctuary',
    description: 'Step into VR environments designed for decompression. Float in clouds or sit by a stream.',
    icon: Headset,
    color: 'text-slate-800',
    delay: '0.1s'
  },
  {
    id: 'emergency',
    title: 'Emergency Calm',
    description: 'Instant, AI-generated grounding techniques tailored to your current emotional state.',
    icon: Sparkles,
    color: 'text-slate-800',
    delay: '0.2s'
  },
  {
    id: 'purpose',
    title: 'What Doing Matters',
    description: 'Align your daily actions with your core values through guided reflection.',
    icon: Compass,
    color: 'text-slate-800',
    delay: '0.3s'
  }
];

export const Features: React.FC<FeaturesProps> = ({ onNavigate }) => {

  const handleCardClick = (id: string) => {
    switch (id) {
      case 'gamification':
        onNavigate('games');
        break;
      case 'vr':
        onNavigate('vr');
        break;
      case 'emergency':
        onNavigate('emergency');
        break;
      case 'purpose':
        onNavigate('purpose');
        break;
      default:
        break;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="features" className="py-24 px-4 md:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Gradient Container */}
        <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-teal-100 via-indigo-100 to-sky-200 p-8 md:p-16 shadow-sm">
          
          {/* Header Content */}
          <div className="relative z-10 mb-16 max-w-3xl">
            <span className="text-slate-600 text-sm font-bold tracking-widest uppercase mb-4 block">
              INTRODUCING
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6 leading-tight">
              The Serenity Engine
            </h2>
            <p className="text-lg md:text-xl text-slate-700 font-light leading-relaxed">
              To solve the noise of the digital world, you need a sanctuary. MindControl is designed to help you:
            </p>
          </div>

          {/* Cards Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                onClick={() => handleCardClick(feature.id)}
                className={`
                  group relative p-6 rounded-xl
                  bg-white/40 backdrop-blur-sm
                  border border-white/30
                  hover:bg-white/60 transition-all duration-300
                  cursor-pointer
                  flex flex-col items-start text-left
                  h-full min-h-[220px]
                `}
              >
                {/* Icon */}
                <div className="mb-6 text-slate-800">
                  <feature.icon strokeWidth={1.5} size={28} />
                </div>
                
                {/* Content */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between w-full mb-2">
                    <h3 className="font-sans font-semibold text-lg text-slate-900">
                      {feature.title}
                    </h3>
                    <ArrowUpRight size={16} className="text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Subtle Background Decoration inside the card */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        </div>
      </div>
    </section>
  );
};