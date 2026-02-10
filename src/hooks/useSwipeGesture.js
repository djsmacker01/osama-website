import { useRef, useCallback } from 'react';

export const useSwipeGesture = ({ onSwipeLeft, onSwipeRight, threshold = 50 } = {}) => {
  const touchStart = useRef({ x: 0, y: 0 });
  const touchEnd = useRef({ x: 0, y: 0 });

  const onTouchStart = useCallback((e) => {
    const touch = e.targetTouches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
    touchEnd.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const onTouchMove = useCallback((e) => {
    const touch = e.targetTouches[0];
    touchEnd.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const onTouchEnd = useCallback(() => {
    const deltaX = touchStart.current.x - touchEnd.current.x;
    const deltaY = touchStart.current.y - touchEnd.current.y;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > threshold) {
      if (deltaX > 0) onSwipeLeft?.();
      else onSwipeRight?.();
    }
  }, [onSwipeLeft, onSwipeRight, threshold]);

  return { onTouchStart, onTouchMove, onTouchEnd };
};
