"use client";
import { useState } from 'react';
import { 
  ChevronRight, 
  Mail, 
  MessageSquare, 
  Shield, 
  Key, 
  Globe, 
  Lock, 
  ShieldCheck, 
  Fingerprint,
  Wallet,
  Link
} from 'lucide-react';

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const [authType, setAuthType] = useState('');
  const [step, setStep] = useState(1);
  
  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1 && email) {
      setStep(2);
    }
  };
  
  const handleAuthTypeSelect = (type: string) => {
    setAuthType(type);
    // In a real app, this would trigger the appropriate auth flow
    console.log(`Selected auth type: ${type}`);
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-gray-800">
            Blockchain-Based Auth
          </h1>
          <p className="text-gray-600">
            Secure authentication for your DApp
          </p>
        </div>
        
        {/* Form */}
        <div className="space-y-6">
          {/* Step indicator */}
          <div className="flex items-center justify-center space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step === 1 ? 'bg-indigo-600 text-white' : 'bg-gray-300'}`}>
              1
            </div>
            <div className={`w-16 h-1 ${step === 2 ? 'bg-indigo-600' : 'bg-gray-300'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step === 2 ? 'bg-indigo-600 text-white' : 'bg-gray-300'}`}>
              2
            </div>
          </div>
          
          {step === 1 ? (
            <>
              {/* Google Sign Up Button */}
              <button className="w-full bg-white text-gray-700 font-medium border border-gray-300 rounded-lg px-4 py-3 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.798-1.677-4.198-2.702-6.735-2.702-5.522 0-9.999 4.477-9.999 9.999s4.477 9.999 9.999 9.999c5.772 0 9.999-4.066 9.999-9.999 0-0.799-0.075-1.531-0.225-2.265h-9.774z" fill="currentColor"/>
                </svg>
                Sign up with Google
              </button>
              
              <div className="relative flex items-center justify-center my-6">
                <div className="border-t border-gray-300 w-full"></div>
                <span className="bg-white px-4 text-sm font-medium text-gray-600 mx-2 whitespace-nowrap">
                  or continue with email
                </span>
                <div className="border-t border-gray-300 w-full"></div>
              </div>
              
              {/* Email Input */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
                
                <button
                  onClick={handleContinue}
                  className="w-full bg-indigo-600 text-white font-medium rounded-lg px-4 py-3 flex items-center justify-center hover:bg-indigo-700 transition-colors"
                >
                  Continue
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold text-gray-800 text-center">
                Choose authentication method
              </h2>
              
              <div className="grid grid-cols-2 gap-3">
                {/* OTP Based */}
                <button onClick={() => handleAuthTypeSelect('otp')}
                  className={`p-4 border rounded-lg flex items-center hover:bg-indigo-50 transition-colors ${authType === 'otp' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
                >
                  <MessageSquare className="h-6 w-6 text-indigo-600 mr-3" />
                  <div className="text-left">
                    <h3 className="font-medium text-gray-800">
                      OTP Based
                    </h3>
                    <p className="text-sm text-gray-600">
                      Verify with a code
                    </p>
                  </div>
                </button>
                
                {/* Magic Link */}
                <button onClick={() => handleAuthTypeSelect('magicLink')}
                  className={`p-4 border rounded-lg flex items-center hover:bg-indigo-50 transition-colors ${authType === 'magicLink' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
                >
                  <Link className="h-6 w-6 text-indigo-600 mr-3" />
                  <div className="text-left">
                    <h3 className="font-medium text-gray-800">
                      Magic Link
                    </h3>
                    <p className="text-sm text-gray-600">
                      Login via email link
                    </p>
                  </div>
                </button>
                
                {/* Multi Factor Auth */}
                <button onClick={() => handleAuthTypeSelect('mfa')}
                  className={`p-4 border rounded-lg flex items-center hover:bg-indigo-50 transition-colors ${authType === 'mfa' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
                >
                  <Shield className="h-6 w-6 text-indigo-600 mr-3" />
                  <div className="text-left">
                    <h3 className="font-medium text-gray-800">
                      Multi Factor Auth
                    </h3>
                    <p className="text-sm text-gray-600">
                      Enhanced security
                    </p>
                  </div>
                </button>
                
                {/* Custom Auth */}
                <button onClick={() => handleAuthTypeSelect('custom')}
                  className={`p-4 border rounded-lg flex items-center hover:bg-indigo-50 transition-colors ${authType === 'custom' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
                >
                  <Key className="h-6 w-6 text-indigo-600 mr-3" />
                  <div className="text-left">
                    <h3 className="font-medium text-gray-800">
                      Custom Auth
                    </h3>
                    <p className="text-sm text-gray-600">
                      Your own method
                    </p>
                  </div>
                </button>
              </div>
              
              <h2 className="text-xl font-semibold text-gray-800 text-center pt-4">
                Blockchain Authentication
              </h2>
              
              <div className="grid grid-cols-2 gap-3">
                {/* Wallet Connect */}
                <button onClick={() => handleAuthTypeSelect('walletConnect')}
                  className={`p-4 border rounded-lg flex items-center hover:bg-indigo-50 transition-colors ${authType === 'walletConnect' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
                >
                  <Wallet className="h-6 w-6 text-indigo-600 mr-3" />
                  <div className="text-left">
                    <h3 className="font-medium text-gray-800">
                      Wallet Connect
                    </h3>
                    <p className="text-sm text-gray-600">
                      Connect your wallet
                    </p>
                  </div>
                </button>
                
                {/* Self-Sovereign ID */}
                <button onClick={() => handleAuthTypeSelect('selfSovereign')}
                  className={`p-4 border rounded-lg flex items-center hover:bg-indigo-50 transition-colors ${authType === 'selfSovereign' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
                >
                  <Fingerprint className="h-6 w-6 text-indigo-600 mr-3" />
                  <div className="text-left">
                    <h3 className="font-medium text-gray-800">
                      Self-Sovereign ID
                    </h3>
                    <p className="text-sm text-gray-600">
                      Decentralized identity
                    </p>
                  </div>
                </button>
                
                {/* Smart Contract Auth */}
                <button onClick={() => handleAuthTypeSelect('smartContract')}
                  className={`p-4 border rounded-lg flex items-center hover:bg-indigo-50 transition-colors ${authType === 'smartContract' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
                >
                  <Globe className="h-6 w-6 text-indigo-600 mr-3" />
                  <div className="text-left">
                    <h3 className="font-medium text-gray-800">
                      Smart Contract Auth
                    </h3>
                    <p className="text-sm text-gray-600">
                      Contract-based access
                    </p>
                  </div>
                </button>
                
                {/* Zero Knowledge Proof */}
                <button onClick={() => handleAuthTypeSelect('zkProof')}
                  className={`p-4 border rounded-lg flex items-center hover:bg-indigo-50 transition-colors ${authType === 'zkProof' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
                >
                  <Lock className="h-6 w-6 text-indigo-600 mr-3" />
                  <div className="text-left">
                    <h3 className="font-medium text-gray-800">
                      Zero Knowledge Proof
                    </h3>
                    <p className="text-sm text-gray-600">
                      Private verification
                    </p>
                  </div>
                </button>
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <button onClick={() => setStep(1)} 
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Back to email
                </button>
                
                {authType && (
                  <button className="bg-indigo-600 text-white font-medium rounded-lg px-4 py-2 hover:bg-indigo-700 transition-colors">
                    Continue with {authType}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
        
        {/* Footer */}
        <div className="text-center pt-4">
          <a className="text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer">
            Already have an account? Log in
          </a>
        </div>
      </div>
    </div>
  );
}