import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, EyeOff, Eye, LogIn } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* Icon Top */}
      <div className="border border-red-200 rounded-xl p-3 mb-4 text-red-600">
        <LogIn size={28} />
      </div>

      <h1 className="text-2xl font-bold text-red-600 mb-1">Sign In</h1>
      <p className="text-sm text-red-800/70 text-center mb-8 px-4">
        Find available parking faster with real-time smart guidance
      </p>

      <form className="w-full space-y-4">
        {/* Email Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-red-600">
            <Mail size={18} />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-red-300 bg-transparent text-red-900 placeholder-red-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Password Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-red-600">
            <Lock size={18} />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full pl-11 pr-12 py-3 rounded-xl border border-red-300 bg-transparent text-red-900 placeholder-red-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-red-600 hover:text-red-800"
          >
            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        </div>

        <div className="flex justify-end w-full">
          <Link to="/forgot-password" className="text-sm text-red-600 hover:underline">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition duration-200 mt-2"
        >
          Sign In
        </button>
      </form>

      <p className="text-sm text-red-800/70 mt-6">
        Don't have an account? <Link to="/register" className="text-red-600 font-bold hover:underline">Sign Up</Link>
      </p>
    </div>
  );
}