import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { ViewState } from '../App';

interface HeaderProps {
  onNavigate: (page: ViewState) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const navItems = ['Home', 'Features', 'Community', 'About'];

  const handleLinkClick = (e: React.MouseEvent, item: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (item === 'About') {
      onNavigate('about');
      return;
    } 
    
    // For Home and other sections (Features, Community), navigate to home view
    onNavigate('home');

    // If it's just "Home", we are done (onNavigate scrolls to top)
    if (item === 'Home') {
      return;
    }

    // For specific sections, scroll to them after a short delay to allow rendering
    setTimeout(() => {
      const id = item.toLowerCase();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

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
          dark:bg-slate-900/80 dark:border-slate-700
        `}
      >
        {/* Logo */}
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-full bg-slate-800 dark:bg-white flex items-center justify-center">
             <div className="w-3 h-3 rounded-full bg-white dark:bg-slate-900 opacity-80" />
          </div>
          <span className="font-serif text-xl text-slate-800 dark:text-white tracking-wide font-medium">
            MindControl
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleLinkClick(e, item)}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => onNavigate('signin')}
            className="bg-slate-800 dark:bg-white text-white dark:text-slate-900 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-700 dark:hover:bg-slate-100 transition-colors shadow-lg shadow-slate-200 dark:shadow-none"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="text-slate-700 dark:text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6 shadow-xl flex flex-col gap-4 items-center animate-fade-in-up border border-white/50 dark:border-slate-700">
           {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleLinkClick(e, item)}
              className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <button 
            onClick={() => {
              onNavigate('signin');
              setMobileMenuOpen(false);
            }}
            className="w-full bg-slate-800 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-xl text-base font-medium mt-2"
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};