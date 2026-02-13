import React, { useState } from 'react';
import { X, Sparkles, Wind, Loader2 } from 'lucide-react';
import { generateCalmingContent } from '../services/geminiService';
import { EmergencyCalmResponse } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyCalmModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<EmergencyCalmResponse | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setLoading(true);
    const response = await generateCalmingContent(input);
    setResult(response);
    setLoading(false);
  };

  const handleClose = () => {
    setResult(null);
    setInput('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity" 
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-lavender-50 to-white p-6 flex justify-between items-center border-b border-slate-50">
          <div className="flex items-center gap-2 text-slate-700">
            <Sparkles size={20} className="text-purple-400" />
            <h3 className="font-serif text-xl">Emergency Calm</h3>
          </div>
          <button onClick={handleClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-8">
          {!result ? (
            <>
              <p className="text-slate-600 mb-6 text-center font-light">
                Tell us briefly how you are feeling right now. <br/>
                <span className="text-sm text-slate-400">e.g., "Overwhelmed by work deadlines" or "Anxious about the future"</span>
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                  className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-200 transition-all resize-none h-32"
                  placeholder="I am feeling..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={loading}
                />
                
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className={`w-full py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2
                    ${loading || !input.trim() 
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                      : 'bg-slate-800 text-white hover:bg-slate-700 hover:shadow-lg shadow-purple-100'
                    }
                  `}
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      Breathing...
                    </>
                  ) : (
                    'Find Center'
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="animate-fade-in text-center space-y-8">
              <div className="space-y-4">
                <p className="font-serif text-2xl text-slate-700 leading-snug">
                  "{result.message}"
                </p>
                <div className="w-16 h-1 bg-purple-100 mx-auto rounded-full" />
              </div>
              
              <div className="bg-sky-50 rounded-2xl p-6 flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sky-500 shadow-sm">
                  <Wind size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-700 mb-1 uppercase tracking-wider text-xs">Suggested Action</h4>
                  <p className="text-slate-600 font-light">{result.action}</p>
                </div>
              </div>

              <button 
                onClick={() => setResult(null)}
                className="text-slate-400 text-sm hover:text-slate-600 underline decoration-slate-200 underline-offset-4"
              >
                Start Over
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};