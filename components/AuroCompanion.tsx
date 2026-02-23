import React, { useState } from 'react';
import { ArrowLeft, Upload, Sparkles, MessageCircle, RefreshCw } from 'lucide-react';
import { ViewState } from '../App';
import { GoogleGenAI } from "@google/genai";

interface AuroCompanionProps {
  onNavigate: (page: ViewState) => void;
}

export const AuroCompanion: React.FC<AuroCompanionProps> = ({ onNavigate }) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [greeting, setGreeting] = useState<string | null>(null);
  const [isAlive, setIsAlive] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setGreeting(null);
      setIsAlive(false);
    }
  };

  const bringToLife = async () => {
    if (!imageFile || !imagePreview) return;

    try {
      setIsGenerating(true);
      setIsAlive(true); // Start animation immediately

      // Initialize GenAI with the system key (Free tier)
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

      // Convert base64 to raw data
      const base64Data = imagePreview.split(',')[1];

      // Generate a greeting using Gemini Flash (Free)
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-latest',
        contents: [
          {
            inlineData: {
              mimeType: imageFile.type,
              data: base64Data
            }
          },
          {
            text: "You are this character. Say a short, warm, encouraging hello to your friend who might be feeling stressed. Keep it under 15 words. Be empathetic and kind."
          }
        ]
      });

      setGreeting(response.text());

    } catch (err) {
      console.error('Greeting generation error:', err);
      setGreeting("Hello! I'm here to support you."); // Fallback
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col items-center px-6 pt-32 pb-20 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <button 
        onClick={() => onNavigate('purpose')}
        className="absolute top-8 left-8 p-2 text-slate-500 hover:text-slate-800 transition-colors z-20"
      >
        <ArrowLeft size={24} />
      </button>

      <div className="relative z-10 w-full max-w-4xl mx-auto space-y-8 text-center">
        
        <div className="space-y-4">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto text-indigo-600 animate-float">
            <Sparkles size={40} strokeWidth={1.5} />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-slate-800 leading-tight">
            Meet <span className="text-indigo-600 italic">Auro</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Upload a picture of Auro (or any character) to bring them to life as your supportive companion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Upload Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-white/50 shadow-lg p-8 flex flex-col items-center justify-center min-h-[400px]">
            {imagePreview ? (
              <div className="relative w-full h-full flex flex-col items-center">
                <div className={`relative transition-all duration-1000 ${isAlive ? 'animate-breathe' : ''}`}>
                  <img 
                    src={imagePreview} 
                    alt="Auro Preview" 
                    className="w-full h-64 object-contain rounded-xl mb-6 bg-slate-100"
                  />
                  {/* Speech Bubble */}
                  {greeting && (
                    <div className="absolute -top-4 -right-4 bg-white px-6 py-4 rounded-2xl rounded-bl-none shadow-xl animate-pop-in max-w-[200px] text-left border border-indigo-50">
                      <p className="text-slate-800 font-serif text-lg leading-snug">{greeting}</p>
                    </div>
                  )}
                </div>

                <div className="flex gap-4 mt-6">
                  <label className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-50 cursor-pointer transition-all shadow-sm">
                    Change Image
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                  <button
                    onClick={bringToLife}
                    disabled={isGenerating || isAlive}
                    className="px-6 py-3 bg-indigo-600 text-white rounded-full text-sm font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md flex items-center gap-2"
                  >
                    {isGenerating ? <RefreshCw className="animate-spin" size={16} /> : <Sparkles size={16} />}
                    {isAlive ? 'Auro is Alive!' : 'Bring to Life'}
                  </button>
                </div>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer group">
                <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-400 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-all mb-4">
                  <Upload size={32} />
                </div>
                <p className="text-slate-600 font-medium text-lg">Upload Auro's Photo</p>
                <p className="text-slate-400 text-sm mt-2">Click to browse</p>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              </label>
            )}
          </div>

          {/* Interaction Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-white/50 shadow-lg p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
            {isAlive ? (
              <div className="space-y-6 animate-fade-in">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto text-indigo-600">
                  <MessageCircle size={32} />
                </div>
                <h3 className="text-2xl font-serif text-slate-800">Auro is listening</h3>
                <p className="text-slate-500">
                  Take a deep breath. Auro is here to keep you company.
                </p>
                <div className="p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                  <p className="text-indigo-800 italic">"You are doing great, just by being here."</p>
                </div>
              </div>
            ) : (
              <div className="text-center text-slate-400 space-y-4">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                  <Sparkles size={24} />
                </div>
                <p>Click "Bring to Life" to activate your companion.</p>
              </div>
            )}
          </div>

        </div>

        <style>{`
          @keyframes breathe {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.03); }
          }
          @keyframes pop-in {
            0% { opacity: 0; transform: scale(0.8) translate(-10px, 10px); }
            100% { opacity: 1; transform: scale(1) translate(0, 0); }
          }
          .animate-breathe {
            animation: breathe 4s ease-in-out infinite;
          }
          .animate-pop-in {
            animation: pop-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          }
        `}</style>

      </div>
    </section>
  );
};
