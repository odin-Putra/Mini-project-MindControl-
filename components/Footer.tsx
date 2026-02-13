import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center">
             <div className="w-2 h-2 rounded-full bg-white opacity-80" />
          </div>
          <span className="font-serif text-lg text-slate-800">MindControl</span>
        </div>
        
        <div className="text-slate-400 text-sm font-light">
          © {new Date().getFullYear()} MindControl Wellness. All rights reserved.
        </div>

        <div className="flex gap-6">
           {['Privacy', 'Terms', 'Contact'].map(link => (
             <a key={link} href="#" className="text-sm text-slate-500 hover:text-slate-800 transition-colors">
               {link}
             </a>
           ))}
        </div>
      </div>
    </footer>
  );
};