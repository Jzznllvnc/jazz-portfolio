'use client';

import React, { useState, useEffect, useLayoutEffect } from 'react';

// useLayoutEffect runs before paint on the client, but causes a warning on the
// server (SSR). This isomorphic version falls back to useEffect on the server.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * Reusable sticky page header with the scroll-collapse logo animation.
 * "Jazznelle Vince" collapses to "JV" after scrolling past the threshold.
 *
 * @param {{
 *   children?: React.ReactNode,
 *   mobileCollapsed?: boolean
 * }} props
 *   children        — optional right-side content (e.g. a CTA button)
 *   mobileCollapsed — when true, the logo is permanently "JV" on mobile
 *                     (below md breakpoint), regardless of scroll position.
 *                     On desktop the normal scroll animation still applies.
 */
export default function PageHeader({ children, mobileCollapsed = false }) {
  const [scrolled, setScrolled] = useState(false);

  // Initialise to `mobileCollapsed` so the very first render (SSR + hydration)
  // already has the correct value for pages that need it. On desktop,
  // useIsomorphicLayoutEffect corrects this BEFORE the first paint → no flash.
  const [isMobile, setIsMobile] = useState(mobileCollapsed);

  // Correct isMobile before the browser paints (avoids the "glimpse" flash).
  useIsomorphicLayoutEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 767px)');
    setIsMobile(mobileQuery.matches);

    const handleResize = (e) => setIsMobile(e.matches);
    mobileQuery.addEventListener('change', handleResize);
    return () => mobileQuery.removeEventListener('change', handleResize);
  }, []);

  // Scroll listener — passive for performance.
  useEffect(() => {
    const SCROLL_THRESHOLD = 60;
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Collapsed when: scrolled past threshold OR (mobileCollapsed AND on mobile)
  const isCollapsed = scrolled || (mobileCollapsed && isMobile);

  return (
    <header className="sticky top-0 z-50 bg-white w-full px-8 py-6 md:px-12 lg:px-24 flex justify-between items-center">
      {/* Logo — collapses to "JV" on scroll (or always on mobile when mobileCollapsed=true) */}
      <div
        className="flex items-baseline text-3xl font-bold tracking-tighter text-black leading-none select-none"
        aria-label="Jazznelle Vince"
      >
        {/* "J" — always visible */}
        <span>J</span>

        {/* "azznelle" — collapses */}
        <span
          className="inline-block overflow-hidden whitespace-nowrap transition-[max-width,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            maxWidth: isCollapsed ? '0ch' : '8ch',
            opacity: isCollapsed ? 0 : 1,
          }}
        >
          azznelle
        </span>

        {/* space — collapses */}
        <span
          className="inline-block overflow-hidden whitespace-nowrap transition-[max-width,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            maxWidth: isCollapsed ? '0ch' : '1ch',
            opacity: isCollapsed ? 0 : 1,
          }}
        >
          &nbsp;
        </span>

        {/* "V" — always visible */}
        <span>V</span>

        {/* "ince" — collapses */}
        <span
          className="inline-block overflow-hidden whitespace-nowrap transition-[max-width,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            maxWidth: isCollapsed ? '0ch' : '4ch',
            opacity: isCollapsed ? 0 : 1,
          }}
        >
          ince
        </span>
      </div>

      {/* Optional right-side slot (e.g. CTA button) */}
      {children}
    </header>
  );
}
