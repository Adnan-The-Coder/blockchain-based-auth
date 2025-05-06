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
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-lg space-y-6 rounded-xl bg-white p-6 shadow-lg">
        {/* Header */}
        <div className="space-y-2 text-center">
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
            <div className={`flex size-8 items-center justify-center rounded-full text-sm font-medium ${step === 1 ? 'bg-indigo-600 text-white' : 'bg-gray-300'}`}>
              1
            </div>
            <div className={`h-1 w-16 ${step === 2 ? 'bg-indigo-600' : 'bg-gray-300'}`}></div>
            <div className={`flex size-8 items-center justify-center rounded-full text-sm font-medium ${step === 2 ? 'bg-indigo-600 text-white' : 'bg-gray-300'}`}>
              2
            </div>
          </div>
          {step === 1 ? (
            <>
              {/* Google Sign Up Button */}
              <button className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50">
                <svg className="mr-2 size-5" viewBox="0 0 24 24">
                  <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.798-1.677-4.198-2.702-6.735-2.702-5.522 0-9.999 4.477-9.999 9.999s4.477 9.999 9.999 9.999c5.772 0 9.999-4.066 9.999-9.999 0-0.799-0.075-1.531-0.225-2.265h-9.774z" fill="currentColor"/>
                </svg>
                Sign up with Google
              </button>
              <div className="relative my-6 flex items-center justify-center">
                <div className="w-full border-t border-gray-300"></div>
                <span className="mx-2 whitespace-nowrap bg-white px-4 text-sm font-medium text-gray-600">
                  or continue with email
                </span>
                <div className="w-full border-t border-gray-300"></div>
              </div>
              {/* Email Input */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Mail className="size-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
                <button
                  onClick={handleContinue}
                  className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
                >
                  Continue
                  <ChevronRight className="ml-2 size-5" />
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-center text-xl font-semibold text-gray-800">
                Choose authentication method
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {/* OTP Based */}
                <button onClick={() => handleAuthTypeSelect('otp')}
                  className={`flex items-center rounded-lg border p-4 transition-colors hover:bg-indigo-50 ${authType === 'otp' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
                >
                  <MessageSquare className="mr-3 size-6 text-indigo-600" />
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
                  className={`flex items-center rounded-lg border p-4 transition-colors hover:bg-indigo-50 ${authType === 'magicLink' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
                >
                  <Link className="mr-3 size-6 text-indigo-600" />
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
                  className={`flex items-center rounded-lg border p-4 transition-colors hover:bg-indigo-50 ${authType === 'mfa' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
                >
                  <Shield className="mr-3 size-6 text-indigo-600" />
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
                  className={`flex items-center rounded-lg border p-4 transition-colors hover:bg-indigo-50 ${authType === 'custom' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
                >
                  <Key className="mr-3 size-6 text-indigo-600" />
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
              <h2 className="pt-4 text-center text-xl font-semibold text-gray-800">
                Blockchain Authentication
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {/* Wallet Connect */}
                <button onClick={() => handleAuthTypeSelect('walletConnect')}
                  className={`flex items-center rounded-lg border p-4 transition-colors hover:bg-indigo-50 ${authType === 'walletConnect' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
                >
                  <Wallet className="mr-3 size-6 text-indigo-600" />
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
                  className={`flex items-center rounded-lg border p-4 transition-colors hover:bg-indigo-50 ${authType === 'selfSovereign' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
                >
                  <Fingerprint className="mr-3 size-6 text-indigo-600" />
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
                  className={`flex items-center rounded-lg border p-4 transition-colors hover:bg-indigo-50 ${authType === 'smartContract' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
                >
                  <Globe className="mr-3 size-6 text-indigo-600" />
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
                  className={`flex items-center rounded-lg border p-4 transition-colors hover:bg-indigo-50 ${authType === 'zkProof' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
                >
                  <Lock className="mr-3 size-6 text-indigo-600" />
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
                  className="font-medium text-indigo-600 hover:text-indigo-800"
                >
                  Back to email
                </button>
                {authType && (
                  <button className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition-colors hover:bg-indigo-700">
                    Continue with {authType}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
        {/* Footer */}
        <div className="pt-4 text-center">
          <a className="cursor-pointer font-medium text-indigo-600 hover:text-indigo-800">
            Already have an account? Log in
          </a>
        </div>
      </div>
    </div>
  );
}