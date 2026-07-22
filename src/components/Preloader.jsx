import React, { useState, useEffect } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 1300);

    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 1650);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-ink flex flex-col items-center justify-center p-6 text-center transition-opacity duration-300 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Radial Ambient Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-brand-purple/20 blur-3xl pointer-events-none animate-pulse" />

      <div className="relative z-10 flex flex-col items-center space-y-6 max-w-lg mx-auto">
        {/* Logo Mark with Soft-Edged White Background */}
        <div className="bg-white p-3.5 rounded-2xl shadow-xl shadow-brand-purple/30 border border-white/30 flex items-center justify-center animate-pulse">
          <img
            src="/lockup-crop.png"
            alt="Arisva logo"
            className="h-14 sm:h-16 w-auto object-contain"
          />
        </div>

        {/* Brand Name */}
        <div className="font-logo font-extrabold text-3xl sm:text-4xl tracking-[0.16em] text-white">
          ARISVA
        </div>

        {/* Slogan */}
        <h1 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight bg-gradient-to-r from-brand-cyan via-brand-purple-soft to-purple-400 bg-clip-text text-transparent">
          Rise through excellence
        </h1>

        {/* Animated Progress Bar */}
        <div className="w-52 sm:w-64 h-1.5 bg-white/10 rounded-full overflow-hidden relative mt-4">
          <div className="h-full bg-gradient-to-r from-brand-cyan via-brand-purple-soft to-brand-purple rounded-full animate-[loadingProgress_1.3s_ease-in-out_forwards]" />
        </div>
      </div>
    </div>
  );
}
