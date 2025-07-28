'use client';

import React from 'react';
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

export default function Header({ isOpen, setIsOpen }) {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed top-0 left-0 z-50 w-full px-8 py-6 md:px-12 lg:px-24 flex justify-between items-center bg-white"
    >
      {/* Name on the left */}
      <div className="text-3xl font-bold tracking-tighter text-black leading-tight">
        Jazznelle
        <br />
        Vince
      </div>

      {/* Menu button on the right */}
      <motion.button
        aria-label="Toggle menu"
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-black rounded-full flex flex-col justify-center items-center space-y-1.5 group transition-colors duration-300 hover:bg-[#00ffcc]"
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
