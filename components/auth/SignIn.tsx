import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, KeyRound } from 'lucide-react';
import { ViewState } from '../../App';

interface SignInProps {
  onNavigate: (view: ViewState) => void;
}

export const SignIn: React.FC<SignInProps> = ({ onNavigate }) => {
  const [mode, setMode] = useState<'password' | 'otp'>('password');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'password') {
      console.log('Sign in with password:', { email, password });
      // TODO: Implement actual authentication
      alert('Sign in logic would go here');
    } else {
      if (!otpSent) {
        console.log('Sending OTP to:', email);
        setOtpSent(true);
        // TODO: Implement send OTP logic
      } else {
        console.log('Verifying OTP:', otp);
        // TODO: Implement verify OTP logic
        alert('OTP verification logic would go here');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 md:p-10 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-sage-100 rounded-bl-full -mr-10 -mt-10 opacity-50" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-lavender-100 rounded-tr-full -ml-8 -mb-8 opacity-50" />

        <div className="relative z-10">
          <h2 className="font-serif text-3xl text-slate-800 mb-2">Welcome Back</h2>
          <p className="text-slate-500 mb-8 font-light">Enter your details to access your sanctuary.</p>

          {/* Tabs */}
          <div className="flex p-1 bg-slate-100 rounded-xl mb-8">
            <button
              onClick={() => { setMode('password'); setOtpSent(false); }}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                mode === 'password' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Password
            </button>
            <button
              onClick={() => setMode('otp')}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                mode === 'otp' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              One-Time Code
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-400 transition-all"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            {mode === 'password' && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-400 transition-all"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div className="flex justify-end mt-2">
                  <button type="button" className="text-xs text-slate-500 hover:text-slate-800">Forgot password?</button>
                </div>
              </div>
            )}

            {mode === 'otp' && otpSent && (
              <div className="animate-fade-in-up">
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Verification Code</label>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-400 transition-all"
                    placeholder="123456"
                    required
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  We sent a code to <span className="font-medium text-slate-700">{email}</span>. 
                  <button type="button" onClick={() => setOtpSent(false)} className="ml-1 text-sky-600 hover:underline">Change email</button>
                </p>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg shadow-slate-200"
            >
              {mode === 'password' ? 'Sign In' : otpSent ? 'Verify & Sign In' : 'Send Code'}
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              Don't have an account?{' '}
              <button 
                onClick={() => onNavigate('signup')} 
                className="font-medium text-slate-800 hover:text-sky-600 transition-colors"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
