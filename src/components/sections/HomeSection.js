'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
  '/images/me2.jpeg',
  '/images/random2.jpg',
  '/images/random.jpg',
  '/images/me.png',
];

export default function HomeSection() {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    // This check runs on the client to see if the device supports hover
    const mediaQuery = window.matchMedia('(hover: hover)');
    setCanHover(mediaQuery.matches);
  }, []);

  // Define different spread values for desktop and mobile
  const spread = canHover ? 70 : 40;

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-center items-center text-black overflow-hidden px-8 pt-32">
      {/* Main container for all content */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Centered Title */}
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

        {/* Precise 3-column grid for centering */}
        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-x-[170px] items-center">
          
          {/* Left Column: Location (Now hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
            className="hidden md:flex justify-end" // Changed to hidden on mobile
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
            className="relative flex justify-center items-center order-first md:order-none" // Image appears first on mobile
          >
            <motion.div
              className="relative w-64 h-80 md:w-80 md:h-96"
              whileHover={canHover ? "hover" : ""}
              animate={canHover ? "initial" : "hover"} // On mobile, animate directly to the "hover" state
            >
              {images.map((src, index) => (
                <motion.div
                  key={src}
                  className="absolute top-0 left-0 w-full h-full"
                  variants={{
                    initial: { x: 0, y: 0, rotate: 0 },
                    hover: {
                      x: (index - 1.5) * spread, // Use the dynamic spread value
                      rotate: (index - 1.5) * 5,
                      transition: { duration: 0.4, ease: 'easeOut' },
                    },
                  }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <img
                    src={src}
                    alt={`Portfolio image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-[0_8px_15px_5px_rgba(0,0,0,0.1)]"
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
            className="flex justify-center md:justify-start mt-8 md:mt-0"
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
