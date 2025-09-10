'use client';
import { useEffect, useState, useCallback } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import './style.css';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const onScroll = useCallback(() => {
    setVisible(window.scrollY > 200);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handle = () => requestAnimationFrame(onScroll);
    window.addEventListener('scroll', handle, { passive: true });
    onScroll(); // init
    return () => window.removeEventListener('scroll', handle);
  }, [onScroll]);

  const scrollToTop = () => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? 'auto' : 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="scroll-to-top"
    >
      <FaArrowCircleUp />
    </button>
  );
}
