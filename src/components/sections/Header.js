'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Animation variants for the top bar of the hamburger menu
const topBarVariants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: 45, y: 5.5 },
};

// Animation variants for the bottom bar of the hamburger menu
const bottomBarVariants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: -45, y: -5.5 },
};

// "Jazznelle Vince" split into:
//  - "J"          → always visible (anchor)
//  - "azznelle"   → collapses on scroll
//  - " "          → space collapses on scroll
//  - "V"          → always visible (anchor)
//  - "ince"       → collapses on scroll

export default function Header({ isOpen, setIsOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const SCROLL_THRESHOLD = 60;

    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-x-0 top-0 z-50 box-border flex items-center justify-between bg-white px-8 py-6 md:px-12 lg:px-24"
    >
      {/* Name on the left — collapses to "JV" on scroll */}
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
            maxWidth: scrolled ? '0ch' : '8ch',
            opacity: scrolled ? 0 : 1,
          }}
        >
          azznelle
        </span>

        {/* space between first and last name — collapses */}
        <span
          className="inline-block overflow-hidden whitespace-nowrap transition-[max-width,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            maxWidth: scrolled ? '0ch' : '1ch',
            opacity: scrolled ? 0 : 1,
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
            maxWidth: scrolled ? '0ch' : '4ch',
            opacity: scrolled ? 0 : 1,
          }}
        >
          ince
        </span>
      </div>

      {/* Menu button on the right */}
      <motion.button
        aria-label="Toggle menu"
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 shrink-0 rounded-full bg-black flex flex-col items-center justify-center space-y-1.5 group transition-colors duration-300 hover:bg-[#00ffcc]"
        animate={isOpen ? 'open' : 'closed'}
      >
        <motion.span
          className="w-6 h-0.5 bg-white"
          variants={topBarVariants}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        ></motion.span>
        <motion.span
          className="w-6 h-0.5 bg-white"
          variants={bottomBarVariants}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        ></motion.span>
      </motion.button>
    </motion.header>
  );
}
