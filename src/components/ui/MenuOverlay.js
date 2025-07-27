'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Import Link for client-side navigation

// Animation for the container to fade in
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeInOut' }
  },
};

// Animation for the list to stagger children
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animation for each link item
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// Updated navigation links to scroll to sections
const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'Projects', href: '#projects' },
  { title: 'Services', href: '#services' },
  { title: 'Contact', href: '#contact' },
];

export default function MenuOverlay({ onClose }) {
  return (
    <motion.div
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed inset-0 z-40 bg-black text-white p-8 md:p-12 lg:p-24" // Added padding to match header
    >
      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="pt-32 flex flex-col items-start space-y-8"
      >
        {navLinks.map((link, index) => (
          <motion.li key={index} variants={itemVariants} className="overflow-hidden w-full">
            {/* The Link component now wraps the entire row */}
            <Link
              href={link.href}
              onClick={onClose}
              className="flex justify-between items-end w-full transition-colors hover:text-gray-400"
            >
              <div className="flex items-center gap-4 md:gap-8 text-8xl sm:text-8xl md:text-9xl font-bold tracking-tighter uppercase">
                <span className="font-abel">{link.title}</span>
                {link.title === 'Home' && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: 'circOut' }}
                  >
                    <img
                      src="/images/gitprof.png"
                      alt="Jazznelle Vince"
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full object-cover"
                      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/100x100/333/FFF?text=JV'; }}
                    />
                  </motion.div>
                )}
              </div>
              {/* Hidden on mobile (default), visible from md breakpoint up */}
              <span className="hidden md:inline-block font-mono text-gray-500 text-sm mb-2">[0{index + 1}]</span>
            </Link>
            <div className="w-full h-px bg-gray-700 mt-4"></div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
