import React from 'react';
import { Compass, ArrowLeft, Anchor, Unplug, Heart, Smile, Box } from 'lucide-react';
import { ViewState } from '../App';

interface Props {
  onNavigate: (page: ViewState) => void;
}

const methods = [
  {
    id: 1,
    title: 'Grounding',
    description: 'Connect with the present moment through your senses.',
    icon: Anchor,
    color: 'bg-emerald-100 text-emerald-600',
    image: 'https://picsum.photos/seed/grounding/400/300' // Placeholder: Replace with grounding.png
  },
  {
    id: 2,
    title: 'Unhooking',
    description: 'Step back from difficult thoughts and feelings.',
    icon: Unplug,
    color: 'bg-indigo-100 text-indigo-600',
    image: 'https://picsum.photos/seed/unhooking/400/300' // Placeholder: Replace with unhooking.png
  },
  {
    id: 3,
    title: 'Acting on your values',
    description: 'Identify what matters most and take small steps towards it.',
    icon: Compass,
    color: 'bg-amber-100 text-amber-600',
    image: 'https://picsum.photos/seed/values/400/300' // Placeholder: Replace with values.png
  },
  {
    id: 4,
    title: 'Being kind',
    description: 'Practice self-compassion and kindness towards others.',
    icon: Heart,
    color: 'bg-rose-100 text-rose-600',
    image: 'https://picsum.photos/seed/kindness/400/300' // Placeholder: Replace with kindness.png
  },
  {
    id: 5,
    title: 'Making room',
    description: 'Allow difficult feelings to be present without fighting them.',
    icon: Box,
    color: 'bg-sky-100 text-sky-600',
    image: 'https://picsum.photos/seed/makingroom/400/300' // Placeholder: Replace with making-room.png
  }
];

export const Purpose: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 relative z-10 flex flex-col items-center">
      <div className="max-w-6xl w-full mx-auto text-center space-y-12 animate-fade-in-up">
        
        {/* Header Badge */}
        <span className="inline-block py-1 px-3 rounded-full bg-white/60 border border-white text-xs font-semibold tracking-widest text-slate-500 uppercase backdrop-blur-sm">
          Core Values
        </span>

        {/* Main Title Area */}
        <div className="space-y-6">
          <div className="w-20 h-20 bg-slate-100 rounded-3xl mx-auto flex items-center justify-center text-slate-800 shadow-sm mb-8">
            <Compass size={40} strokeWidth={1.5} />
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl text-slate-800 leading-tight">
            What Doing Matters
          </h1>
          
          <p className="text-lg text-slate-500 font-light max-w-lg mx-auto leading-relaxed">
            Align your daily actions with your core values through guided reflection and journaling.
          </p>
        </div>

        {/* Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {methods.map((method) => (
            <div 
              key={method.id} 
              onClick={() => {
                if (method.title === 'Grounding') {
                  onNavigate('grounding');
                } else if (method.title === 'Unhooking') {
                  onNavigate('unhooking');
                } else if (method.title === 'Acting on your values') {
                  onNavigate('acting-values');
                } else if (method.title === 'Being kind') {
                  onNavigate('being-kind');
                } else if (method.title === 'Making room') {
                  onNavigate('making-room');
                }
              }}
              className={`bg-white/60 backdrop-blur-sm rounded-3xl border border-white/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full ${method.title === 'Grounding' || method.title === 'Unhooking' || method.title === 'Acting on your values' || method.title === 'Being kind' || method.title === 'Making room' ? 'cursor-pointer' : ''}`}
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img 
                  src={method.image} 
                  alt={method.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content */}
              <div className="p-8 flex flex-col items-center text-center flex-grow">
                <div className={`w-12 h-12 rounded-xl ${method.color} flex items-center justify-center mb-4 shadow-sm`}>
                  <method.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-slate-800 mb-3">{method.title}</h3>
                <p className="text-slate-500 font-light text-sm leading-relaxed">{method.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Searching New Methods Message */}
        <div className="relative max-w-md mx-auto mt-16 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
          <div className="relative px-8 py-6 bg-white ring-1 ring-gray-900/5 rounded-2xl leading-none flex items-center justify-center space-x-6">
            <div className="space-y-2 text-center">
              <p className="text-slate-800 font-medium">We are searching new methods</p>
            </div>
          </div>
        </div>

        <div className="pt-12">
           <button 
             onClick={() => onNavigate('home')}
             className="flex items-center gap-2 px-8 py-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-all duration-300 hover:shadow-lg mx-auto"
           >
             <ArrowLeft size={18} />
             Return to Home
           </button>
        </div>

      </div>
    </section>
  );
};