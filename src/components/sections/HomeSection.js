'use client';

import React from 'react';
import { motion } from 'framer-motion';

const images = [
  '/images/me2.jpeg',
  '/images/random2.jpg',
  '/images/random.jpg',
  '/images/me.png',
];

export default function HomeSection() {
  // The spread value is now constant for all devices
  const spread = 60;

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-center items-center text-black overflow-hidden px-8 pt-32">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-7xl md:text-8xl font-bold font-righteous tracking-wide uppercase leading-none text-center mb-16"
        >
          UI / UX
          <br />
          WEB
          <br />
          DESIGNER.
        </motion.h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-x-[170px] items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
            className="hidden md:flex justify-end"
          >
             <p className="font-light tracking-tight text-left">
              <span className="text-2xl md:text-3xl">Manila</span>
              <br />
              <span className="font-semibold text-4xl md:text-5xl">PHILIPPINES</span>
            </p>
          </motion.div>

          {/* Center Column: Image Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
            className="relative flex justify-center items-center order-first md:order-none"
          >
            <div
              className="relative w-64 h-80 md:w-80 md:h-96"
            >
              {images.map((src, index) => (
                <motion.div
                  key={src}
                  className="absolute top-0 left-0 w-full h-full"
                  initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
                  animate={{
                    x: (index - 1.5) * spread,
                    rotate: (index - 1.5) * 5,
                    opacity: 1
                  }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 + index * 0.1 }}
                >
                  <img
                    src={src}
                    alt={`Portfolio image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-[0_8px_15px_5px_rgba(0,0,0,0.1)]"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
            className="flex justify-center md:justify-start mt-8 md:mt-0"
          >
            <p className="max-w-xs text-sm text-gray-600 leading-relaxed text-center md:text-left">
              An aspiring UI/UX designer from the Philippines, eager to create intuitive and visually engaging digital experiences. With a growing eye for detail and a user-focused mindset, I'm learning to turn complex challenges into functional, people-centered designs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
