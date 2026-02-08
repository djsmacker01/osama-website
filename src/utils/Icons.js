import React from 'react';

// Professional Lucide-style SVG icons
// Consistent: 24x24 viewBox, 2px stroke, round caps/joins, no fill

const defaultProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const Trophy = ({ size = 24, className = '', ...props }) => (
  <svg {...defaultProps} width={size} height={size} className={className} {...props}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

export const FlaskConical = ({ size = 24, className = '', ...props }) => (
  <svg {...defaultProps} width={size} height={size} className={className} {...props}>
    <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
    <path d="M8.5 2h7" />
    <path d="M7 16.5h10" />
  </svg>
);

export const Mic = ({ size = 24, className = '', ...props }) => (
  <svg {...defaultProps} width={size} height={size} className={className} {...props}>
    <path d="m12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" x2="12" y1="19" y2="23" />
    <line x1="8" x2="16" y1="23" y2="23" />
  </svg>
);

export const MapPin = ({ size = 24, className = '', ...props }) => (
  <svg {...defaultProps} width={size} height={size} className={className} {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const ArrowRight = ({ size = 24, className = '', ...props }) => (
  <svg {...defaultProps} width={size} height={size} className={className} {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const ArrowUpRight = ({ size = 24, className = '', ...props }) => (
  <svg {...defaultProps} width={size} height={size} className={className} {...props}>
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

export const Check = ({ size = 24, className = '', ...props }) => (
  <svg {...defaultProps} width={size} height={size} className={className} {...props}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Mail = ({ size = 24, className = '', ...props }) => (
  <svg {...defaultProps} width={size} height={size} className={className} {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const ExternalLink = ({ size = 24, className = '', ...props }) => (
  <svg {...defaultProps} width={size} height={size} className={className} {...props}>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

export const Github = ({ size = 24, className = '', ...props }) => (
  <svg {...defaultProps} width={size} height={size} className={className} {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Code = ({ size = 24, className = '', ...props }) => (
  <svg {...defaultProps} width={size} height={size} className={className} {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const Sparkles = ({ size = 24, className = '', ...props }) => (
  <svg {...defaultProps} width={size} height={size} className={className} {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

export const Zap = ({ size = 24, className = '', ...props }) => (
  <svg {...defaultProps} width={size} height={size} className={className} {...props}>
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
  </svg>
);

export const Calendar = ({ size = 24, className = '', ...props }) => (
  <svg {...defaultProps} width={size} height={size} className={className} {...props}>
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M3 10h18" />
  </svg>
);

export const Briefcase = ({ size = 24, className = '', ...props }) => (
  <svg {...defaultProps} width={size} height={size} className={className} {...props}>
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <rect width="20" height="14" x="2" y="6" rx="2" />
  </svg>
);

export const ChevronRight = ({ size = 24, className = '', ...props }) => (
  <svg {...defaultProps} width={size} height={size} className={className} {...props}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);
