import React from 'react';
import { Play, Lock, Wind, Palette, Music, Move, Cloud } from 'lucide-react';

interface Game {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgGradient: string;
  status: 'active' | 'locked' | 'coming-soon';
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const games: Game[] = [
  {
    id: 'zen-garden',
    title: 'Digital Zen Garden',
    category: 'Focus',
    description: 'Rake sand and arrange stones in a minimalist digital garden. No goals, just patterns.',
    icon: Wind,
    color: 'text-stone-600',
    bgGradient: 'from-stone-100 to-orange-50',
    status: 'active',
    difficulty: 'Easy'
  },
  {
    id: 'breath-bubble',
    title: 'Resonance Breathing',
    category: 'Somatic',
    description: 'Sync your breath with an expanding and contracting sphere to lower HRV.',
    icon: Cloud,
    color: 'text-sky-600',
    bgGradient: 'from-sky-50 to-blue-50',
    status: 'active',
    difficulty: 'Easy'
  },
  {
    id: 'color-flow',
    title: 'Chroma Flow',
    category: 'Creativity',
    description: 'Connect matching colors with flowing streams without crossing paths.',
    icon: Palette,
    color: 'text-purple-600',
    bgGradient: 'from-purple-50 to-fuchsia-50',
    status: 'coming-soon',
    difficulty: 'Medium'
  },
  {
    id: 'sound-forest',
    title: 'Binaural Forest',
    category: 'Audio',
    description: 'Explore a 3D audio landscape. Find the source of calming sounds.',
    icon: Music,
    color: 'text-emerald-600',
    bgGradient: 'from-emerald-50 to-teal-50',
    status: 'locked',
    difficulty: 'Medium'
  },
  {
    id: 'cloud-drift',
    title: 'Thought Drifter',
    category: 'Cognitive',
    description: 'Type your worries onto clouds and watch them gently float away.',
    icon: Move,
    color: 'text-slate-600',
    bgGradient: 'from-slate-100 to-gray-200',
    status: 'locked',
    difficulty: 'Hard'
  }
];

export const MindfulGames: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 min-h-screen relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-white/60 border border-white text-xs font-semibold tracking-widest text-slate-500 uppercase backdrop-blur-sm">
            Interactive Therapy
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-slate-800 leading-tight">
            Mindful Progression
          </h1>
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
            Engage with purpose. These tools are designed to reset your dopamine baseline through slow, intentional interaction.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div 
              key={game.id}
              className={`
                group relative overflow-hidden rounded-[2rem] p-1 
                bg-white/40 backdrop-blur-md border border-white/60 
                hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2
                transition-all duration-500
                animate-fade-in-up
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Content Container */}
              <div className={`h-full bg-gradient-to-br ${game.bgGradient} rounded-[1.8rem] p-8 flex flex-col relative overflow-hidden`}>
                
                {/* Decorative Background Blob */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                {/* Header: Category & Icon */}
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <span className="text-xs font-bold tracking-wider uppercase text-slate-400 bg-white/50 px-3 py-1 rounded-full">
                    {game.category}
                  </span>
                  <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center ${game.color}`}>
                    <game.icon size={24} />
                  </div>
                </div>

                {/* Title & Desc */}
                <div className="mb-8 relative z-10">
                  <h3 className="font-serif text-2xl text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    {game.description}
                  </p>
                </div>

                {/* Footer: Action Button */}
                <div className="mt-auto flex items-center justify-between relative z-10">
                  <span className="text-xs font-medium text-slate-400">
                    Difficulty: {game.difficulty}
                  </span>
                  
                  {game.status === 'active' ? (
                    <button className="w-12 h-12 rounded-full bg-slate-800 text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-slate-300">
                      <Play size={20} fill="currentColor" />
                    </button>
                  ) : (
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 text-slate-400 text-sm font-medium">
                      <Lock size={14} />
                      {game.status === 'coming-soon' ? 'Soon' : 'Locked'}
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}

          {/* "More Coming" Placeholder */}
          <div className="rounded-[2rem] border-2 border-dashed border-slate-300 p-8 flex flex-col items-center justify-center text-center text-slate-400 hover:bg-slate-50/50 transition-colors animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
             <h3 className="font-serif text-xl mb-2">More coming soon</h3>
             <p className="text-sm font-light">We are constantly developing new ways to help you disconnect.</p>
          </div>
        </div>
      </div>
    </section>
  );
};