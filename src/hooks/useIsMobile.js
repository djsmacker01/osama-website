import { useState, useEffect, useMemo } from 'react';

const getWidth = () => typeof window !== 'undefined' ? window.innerWidth : 1024;

export const useIsMobile = () => {
  const [screenWidth, setScreenWidth] = useState(getWidth);

  useEffect(() => {
    let rafId;
    const handleResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setScreenWidth(window.innerWidth));
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const isTouch = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  }, []);

  const isReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  return {
    isMobile: screenWidth <= 768,
    isTablet: screenWidth > 768 && screenWidth <= 1024,
    isTouch,
    isReducedMotion,
    screenWidth,
  };
};
