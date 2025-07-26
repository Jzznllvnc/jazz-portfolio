'use client';

import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://placehold.co/400x500/1a1a1a/FFFFFF?text=Image+1',
  'https://placehold.co/400x500/3a3a3a/FFFFFF?text=Image+2',
  'https://placehold.co/400x500/5a5a5a/FFFFFF?text=Image+3',
  'https://placehold.co/400x500/7a7a7a/FFFFFF?text=Image+4',
];

export default function HomeSection() {
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-center items-center text-black overflow-hidden px-8">
      {/* Main container for all content */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Centered Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-none text-center mb-16"
        >
          UI / UX
          <br />
          WEB
          <br />
          DESIGNER.
        </motion.h1>

        {/* This is the main content grid. */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-40 items-center">
          
          {/* Left Column: Location */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
            className="w-full flex justify-center md:justify-end mb-8 md:mb-0"
          >
             <p className="font-light tracking-tight text-center md:text-right">
              <span className="text-2xl md:text-3xl">Manila</span>
              <br />
              {/* Increased font size for Philippines */}
              <span className="font-semibold text-4xl md:text-5xl">PHILIPPINES</span>
            </p>
          </motion.div>

          {/* Center Column: Image Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              className="relative w-64 h-80 md:w-80 md:h-96"
              whileHover="hover"
            >
              {images.map((src, index) => (
                <motion.div
                  key={src}
                  className="absolute top-0 left-0 w-full h-full"
                  initial={{ x: 0, y: 0, rotate: 0 }}
                  variants={{
                    hover: {
                      x: (index - 1.5) * 40,
                      rotate: (index - 1.5) * 5,
                      transition: { duration: 0.4, ease: 'easeOut' },
                    },
                  }}
                >
                  <img
                    src={src}
                    alt={`Portfolio image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-2xl"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
            className="w-full flex justify-center md:justify-start mt-8 md:mt-0"
          >
            <p className="max-w-xs text-sm text-gray-600 leading-relaxed text-center md:text-left">
              A passionate UI/UX designer from the Philippines, dedicated to crafting intuitive and visually compelling digital experiences. With a keen eye for detail and a user-centric approach, I transform complex problems into elegant, functional designs that connect with people.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
