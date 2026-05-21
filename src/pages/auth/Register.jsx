import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, EyeOff, Eye, UserPlus, User, ChevronDown } from 'lucide-react';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* Icon Top */}
      <div className="border border-red-200 rounded-xl p-3 mb-4 text-red-600">
        <UserPlus size={28} />
      </div>

      <h1 className="text-2xl font-bold text-red-600 mb-1">Sign Up</h1>
      <p className="text-sm text-red-800/70 text-center mb-6 px-4">
        Find available parking faster with real-time smart guidance
      </p>

      <form className="w-full space-y-4">
        {/* Name Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-red-600">
            <User size={18} />
          </div>
          <input
            type="text"
            placeholder="Name"
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-red-300 bg-transparent text-red-900 placeholder-red-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

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
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-red-600 hover:text-red-800">
            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        </div>

        {/* Confirm Password Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-red-600">
            <Lock size={18} />
          </div>
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full pl-11 pr-12 py-3 rounded-xl border border-red-300 bg-transparent text-red-900 placeholder-red-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-red-600 hover:text-red-800">
            {showConfirmPassword ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        </div>

        {/* Role Select */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-red-600 z-10">
            <User size={18} />
          </div>
          <select className="w-full pl-11 pr-10 py-3 rounded-xl border border-red-300 bg-transparent text-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none cursor-pointer">
            <option value="" disabled selected className="text-red-400">Choose role..</option>
            <option value="mahasiswa">Mahasiswa</option>
            <option value="dosen">Dosen</option>
            <option value="staf">Staf</option>
          </select>
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-red-600">
            <ChevronDown size={18} />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition duration-200 mt-2"
        >
          Sign Up
        </button>
      </form>

      <p className="text-sm text-red-800/70 mt-6">
        Already have an account? <Link to="/login" className="text-red-600 font-bold hover:underline">Sign In</Link>
      </p>
    </div>
  );
}