import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showHindi?: boolean;
  showTagline?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showHindi = true,
  showTagline = false,
  className = '',
  onClick,
}) => {
  const isLight = variant === 'light' || variant === 'white';
  
  // Sizing scales
  const sizeMap = {
    sm: { icon: 32, text: 'text-lg', hindi: 'text-[10px]', tag: 'text-[9px]' },
    md: { icon: 42, text: 'text-2xl', hindi: 'text-xs', tag: 'text-[10px]' },
    lg: { icon: 54, text: 'text-3xl', hindi: 'text-sm', tag: 'text-xs' },
    xl: { icon: 70, text: 'text-4xl', hindi: 'text-base', tag: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none ${onClick ? 'cursor-pointer group' : ''} ${className}`}
      id="brand-logo"
    >
      {/* Authentic VahanKavach Shield Emblem SVG */}
      <svg
        width={currentSize.icon}
        height={currentSize.icon * 1.14}
        viewBox="0 0 100 114"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
      >
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B1B3D" />
            <stop offset="60%" stopColor="#0F2B66" />
            <stop offset="100%" stopColor="#081426" />
          </linearGradient>

          <linearGradient id="shieldBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EA580C" />
            <stop offset="35%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#0B1B3D" />
          </linearGradient>

          <linearGradient id="saffronWing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7A00" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>

          <linearGradient id="blueWing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>

          <linearGradient id="roadGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          <linearGradient id="carGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0F2B66" />
          </linearGradient>
        </defs>

        {/* Outer Shield Outline */}
        <path
          d="M50 4 L90 20 C90 68 50 108 50 108 C50 108 10 68 10 20 L50 4 Z"
          fill="url(#shieldGrad)"
          stroke="url(#shieldBorderGrad)"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Left Saffron Dynamic Wing Swoop */}
        <path
          d="M14 32 C12 56 30 84 50 102 C38 88 18 68 18 42 C18 36 15 34 14 32 Z"
          fill="url(#saffronWing)"
        />

        {/* Right Tech Blue Wing Swoop */}
        <path
          d="M86 32 C88 56 70 84 50 102 C62 88 82 68 82 42 C82 36 85 34 86 32 Z"
          fill="url(#blueWing)"
        />

        {/* Center Converging Highway / Road */}
        <path
          d="M44 52 L56 52 L68 100 L32 100 Z"
          fill="url(#roadGrad)"
        />

        {/* White Center Road Markings (Dashed) */}
        <line x1="50" y1="56" x2="50" y2="64" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="50" y1="70" x2="50" y2="80" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="86" x2="50" y2="98" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />

        {/* Modern Car Silhouette over the Road */}
        {/* Car Roof & Windshield */}
        <path
          d="M32 38 L37 28 C39 25 61 25 63 28 L68 38 Z"
          fill="#1E3A8A"
        />
        <path
          d="M36 37 L39 29 C40 27 60 27 61 29 L64 37 Z"
          fill="#38BDF8"
          opacity="0.85"
        />

        {/* Car Body / Hood & Headlights */}
        <path
          d="M26 42 C26 38 31 38 34 38 L66 38 C69 38 74 38 74 42 C74 46 72 49 68 50 L32 50 C28 49 26 46 26 42 Z"
          fill="#0F2B66"
        />

        {/* Sleek Headlights */}
        <path d="M28 43 L36 41 L34 45 Z" fill="#F8FAFC" />
        <path d="M72 43 L64 41 L66 45 Z" fill="#F8FAFC" />

        {/* Center Grille Accent */}
        <line x1="42" y1="46" x2="58" y2="46" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className={`font-extrabold tracking-tight flex items-baseline ${currentSize.text}`}>
          <span className={isLight ? 'text-white' : 'text-[#0B1B3D]'}>Vahan</span>
          <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 bg-clip-text text-transparent ml-0.5">
            Kavach
          </span>
        </div>

        {showHindi && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="h-[1.5px] w-4 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full" />
            <span
              className={`font-semibold tracking-wider ${currentSize.hindi} ${
                isLight ? 'text-slate-200' : 'text-[#0B1B3D]'
              }`}
            >
              वाहनकवच
            </span>
            <span className="h-[1.5px] w-4 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full" />
          </div>
        )}

        {showTagline && (
          <span
            className={`mt-1 font-medium tracking-wide ${currentSize.tag} ${
              isLight ? 'text-slate-300' : 'text-slate-500'
            }`}
          >
            Protection for Every Journey
          </span>
        )}
      </div>
    </div>
  );
};
