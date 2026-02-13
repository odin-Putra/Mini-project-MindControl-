import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <nav
        className={`
          w-full max-w-6xl mx-auto
          transition-all duration-500 ease-in-out
          ${scrolled ? 'py-3' : 'py-5'}
          rounded-full
          glass-panel
          px-8
          flex items-center justify-between
          shadow-sm hover:shadow-md
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
             <div className="w-3 h-3 rounded-full bg-white opacity-80" />
          </div>
          <span className="font-serif text-xl text-slate-800 tracking-wide font-medium">
            MindControl
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Features', 'Science', 'Community', 'About'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="bg-slate-800 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors shadow-lg shadow-slate-200">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-xl flex flex-col gap-4 items-center animate-fade-in-up border border-white/50">
           {['Features', 'Science', 'Community', 'About'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="w-full bg-slate-800 text-white px-6 py-3 rounded-xl text-base font-medium mt-2">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};