import React from 'react';

export const NurseryCanvas = ({
  scrollProgress = 0,
  weatherMode = 'sunrise',
}) => {
  // Theme gradients & atmospheric accents based on selected weather/day mode
  const themeStyles = {
    sunrise: {
      bg: 'bg-gradient-to-br from-amber-50/90 via-emerald-50/95 to-teal-100/90',
      orb1: 'bg-amber-300/30',
      orb2: 'bg-emerald-400/25',
      glow: 'from-amber-200/20 to-emerald-300/10'
    },
    afternoon: {
      bg: 'bg-gradient-to-br from-emerald-50 via-sky-50/90 to-green-100/90',
      orb1: 'bg-emerald-300/30',
      orb2: 'bg-sky-300/25',
      glow: 'from-emerald-300/20 to-sky-300/10'
    },
    golden: {
      bg: 'bg-gradient-to-br from-amber-100/90 via-orange-50/90 to-emerald-100/90',
      orb1: 'bg-amber-400/35',
      orb2: 'bg-orange-300/25',
      glow: 'from-amber-300/25 to-orange-200/15'
    },
    rain: {
      bg: 'bg-gradient-to-br from-slate-100 via-emerald-100/80 to-teal-200/80',
      orb1: 'bg-teal-300/30',
      orb2: 'bg-slate-300/30',
      glow: 'from-teal-300/20 to-emerald-200/20'
    },
    night: {
      bg: 'bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-950',
      orb1: 'bg-emerald-600/20',
      orb2: 'bg-teal-700/20',
      glow: 'from-emerald-500/10 to-teal-400/5'
    }
  };

  const currentTheme = themeStyles[weatherMode] || themeStyles.sunrise;

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden transition-colors duration-1000 ease-in-out">
      {/* Base Background Gradient */}
      <div className={`absolute inset-0 w-full h-full ${currentTheme.bg} transition-all duration-1000`} />

      {/* Atmospheric Ambient Glow Orbs */}
      <div
        className={`absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full blur-3xl ${currentTheme.orb1} transition-all duration-1000 animate-pulse`}
      />
      <div
        className={`absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full blur-3xl ${currentTheme.orb2} transition-all duration-1000 animate-pulse delay-700`}
      />
      <div
        className={`absolute -bottom-40 left-1/4 w-[700px] h-[700px] rounded-full blur-3xl ${currentTheme.orb1} transition-all duration-1000`}
      />

      {/* Subtle Botanical Leaf Overlay Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(#059669 1px, transparent 1px), radial-gradient(#047857 1px, #f8fafc 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}
      />

      {/* Soft Light Beams */}
      <div className={`absolute inset-0 bg-gradient-to-t ${currentTheme.glow} pointer-events-none transition-all duration-1000`} />
    </div>
  );
};
