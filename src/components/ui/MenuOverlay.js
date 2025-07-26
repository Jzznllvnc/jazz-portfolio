'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
      className="fixed inset-0 z-40 bg-black text-white p-8"
    >
      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="h-full flex flex-col justify-center items-center space-y-8"
      >
        {navLinks.map((link, index) => (
          <motion.li key={index} variants={itemVariants} className="overflow-hidden w-full text-center">
            {/* Use a simple <a> tag for same-page scrolling */}
            <a
              href={link.href}
              onClick={onClose}
              className="text-6xl md:text-8xl font-bold tracking-tighter uppercase transition-colors hover:text-gray-400"
            >
              {link.title}
            </a>
            <div className="w-4/5 mx-auto h-px bg-gray-700 mt-4"></div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
