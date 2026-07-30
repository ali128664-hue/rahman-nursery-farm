import React from 'react';

export const NurseryCanvas = ({
  scrollProgress = 0,
  weatherMode = 'sunrise',
}) => {
  // Theme gradients & atmospheric accents based on selected weather/day mode
  const themeStyles = {
    sunrise: {
      bg: 'bg-gradient-to-br from-[#FFFDF9] via-[#F3F8F4] to-[#E6F4EA]',
      orb1: 'bg-amber-400/25',
      orb2: 'bg-emerald-500/20',
      glow: 'from-amber-300/15 via-emerald-200/10 to-transparent'
    },
    afternoon: {
      bg: 'bg-gradient-to-br from-[#F0FAF4] via-[#E1F5FE] to-[#E8F5E9]',
      orb1: 'bg-emerald-400/25',
      orb2: 'bg-sky-400/20',
      glow: 'from-emerald-300/20 via-sky-200/10 to-transparent'
    },
    golden: {
      bg: 'bg-gradient-to-br from-[#FFF8E1] via-[#FFF3E0] to-[#E8F5E9]',
      orb1: 'bg-amber-500/30',
      orb2: 'bg-orange-400/20',
      glow: 'from-amber-400/25 via-orange-300/15 to-transparent'
    },
    rain: {
      bg: 'bg-gradient-to-br from-[#ECEFF1] via-[#E0F2F1] to-[#E8F5E9]',
      orb1: 'bg-teal-400/25',
      orb2: 'bg-slate-400/25',
      glow: 'from-teal-300/20 via-emerald-200/15 to-transparent'
    },
    night: {
      bg: 'bg-gradient-to-br from-[#061C14] via-[#042F22] to-[#021811]',
      orb1: 'bg-emerald-500/20',
      orb2: 'bg-amber-500/15',
      glow: 'from-emerald-400/10 via-teal-300/5 to-transparent'
    }
  };

  const currentTheme = themeStyles[weatherMode] || themeStyles.sunrise;

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden transition-colors duration-1000 ease-in-out">
      {/* Base Background Gradient */}
      <div className={`absolute inset-0 w-full h-full ${currentTheme.bg} transition-all duration-1000`} />

      {/* Radiant Glowing Mesh Orbs */}
      <div
        className={`absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full blur-[120px] ${currentTheme.orb1} transition-all duration-1000 animate-pulse`}
      />
      <div
        className={`absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full blur-[130px] ${currentTheme.orb2} transition-all duration-1000 animate-pulse delay-700`}
      />
      <div
        className={`absolute -bottom-48 left-1/3 w-[800px] h-[800px] rounded-full blur-[140px] ${currentTheme.orb1} transition-all duration-1000`}
      />

      {/* Micro-Botanical Pattern Grid */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(#059669 1.5px, transparent 1.5px), radial-gradient(#D97706 1.5px, #f8fafc 1.5px)`,
          backgroundSize: '48px 48px',
          backgroundPosition: '0 0, 24px 24px'
        }}
      />

      {/* Atmospheric Soft Light Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${currentTheme.glow} pointer-events-none transition-all duration-1000`} />
    </div>
  );
};
