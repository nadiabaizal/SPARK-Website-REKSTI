import React from 'react';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div 
      className="min-h-screen flex flex-col justify-center items-center relative p-4"
      style={{
        // Ganti URL ini dengan path gambar background dari Figma kamu (bisa ditaruh di folder public/ atau src/assets/)
        backgroundImage: "url('/background-city.jpg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Logo SPARK di pojok kiri atas */}
      <div className="absolute top-6 left-6 flex items-center gap-2">
        {/* Kamu bisa ganti div ini dengan tag <img> logo SPARK yang asli */}
        <div className="bg-red-600 text-white p-2 rounded-lg font-bold flex items-center justify-center">
          <span className="material-icons text-xl">🚘</span> {/* Placeholder icon */}
        </div>
        <span className="text-red-700 font-bold text-xl tracking-wide">SPARK</span>
      </div>

      {/* Card Container */}
      <div className="bg-[#FFFDFB] border border-red-200 shadow-xl rounded-[2rem] p-8 w-full max-w-md z-10 relative">
        <Outlet /> {/* Di sinilah komponen Login, Register, dll akan dirender */}
      </div>
    </div>
  );
}