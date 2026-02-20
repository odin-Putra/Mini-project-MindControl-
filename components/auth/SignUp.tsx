import React, { useState } from 'react';
import { Mail, User, ArrowRight, KeyRound, CheckCircle } from 'lucide-react';
import { ViewState } from '../../App';

interface SignUpProps {
  onNavigate: (view: ViewState) => void;
}

export const SignUp: React.FC<SignUpProps> = ({ onNavigate }) => {
  const [step, setStep] = useState<'details' | 'verify'>('details');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'details') {
      console.log('Sending OTP to:', email);
      setStep('verify');
      // TODO: Implement send OTP logic
    } else {
      console.log('Verifying OTP:', otp);
      // TODO: Implement verify OTP logic
      alert('Account created successfully!');
      onNavigate('onboarding');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 md:p-10 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-bl-full -mr-10 -mt-10 opacity-50" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-sage-100 rounded-tr-full -ml-8 -mb-8 opacity-50" />

        <div className="relative z-10">
          <h2 className="font-serif text-3xl text-slate-800 mb-2">Create Account</h2>
          <p className="text-slate-500 mb-8 font-light">Join our community of mindful individuals.</p>

          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8">
            <div className={`flex items-center gap-2 ${step === 'details' ? 'text-slate-800 font-medium' : 'text-slate-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'details' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-400'}`}>1</div>
              <span>Details</span>
            </div>
            <div className="flex-1 h-px bg-slate-200 mx-4" />
            <div className={`flex items-center gap-2 ${step === 'verify' ? 'text-slate-800 font-medium' : 'text-slate-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'verify' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-400'}`}>2</div>
              <span>Verify</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {step === 'details' && (
              <div className="space-y-4 animate-fade-in-up">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">First Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-400 transition-all"
                        placeholder="Jane"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Last Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-400 transition-all"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Gender</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-400 transition-all appearance-none"
                    required
                  >
                    <option value="" disabled>Select your gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>

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
              </div>
            )}

            {step === 'verify' && (
              <div className="animate-fade-in-up space-y-4">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-lg font-medium text-slate-800">Check your email</h3>
                  <p className="text-slate-500 text-sm mt-1">
                    We've sent a verification code to <br/>
                    <span className="font-semibold text-slate-700">{email}</span>
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Verification Code</label>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-400 transition-all text-center tracking-widest text-lg"
                      placeholder="------"
                      maxLength={6}
                      required
                    />
                  </div>
                </div>
                
                <div className="text-center">
                  <button type="button" onClick={() => setStep('details')} className="text-sm text-slate-500 hover:text-slate-800 underline">
                    Change email address
                  </button>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 mt-6 shadow-lg shadow-slate-200"
            >
              {step === 'details' ? 'Continue' : 'Verify & Create Account'}
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              Already have an account?{' '}
              <button 
                onClick={() => onNavigate('signin')} 
                className="font-medium text-slate-800 hover:text-sky-600 transition-colors"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
