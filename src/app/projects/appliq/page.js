'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/sections/Footer';

const projectImages = [
  { src: '/images/one.png', width: 1562, height: 791 },
  { src: '/images/two.png', width: 229, height: 327 },
  { src: '/images/three.png', width: 143, height: 134 },
  { src: '/images/four.png', width: 1304, height: 648 },
  { src: '/images/five.png', width: 992, height: 814 },
];

const sliderVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

// Animation for content fading in
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.1 } },
};

export default function AppliqPage() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    let newPage = page + newDirection;
    if (newPage < 0) {
      newPage = projectImages.length - 1;
    } else if (newPage >= projectImages.length) {
      newPage = 0;
    }
    setPage([newPage, newDirection]);
  };

  return (
    <main className="bg-white text-black">
      <header className="w-full px-8 py-6 md:px-12 lg:px-24 flex justify-between items-center">
        <div className="text-3xl font-bold tracking-tighter text-black leading-tight">
          Jazznelle
          <br />
          Vince
        </div>
      </header>

      <motion.section 
        className="w-full px-8 py-16 md:py-8 md:px-12 lg:px-24"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div 
          className="relative max-w-6xl mx-auto flex flex-col items-center"
          variants={fadeIn}
        >
          <div className="relative w-full h-[400px] md:h-[600px] flex justify-center items-center">
            <button 
              onClick={() => paginate(-1)} 
              className="hidden md:flex absolute left-0 z-10 group w-14 h-14 bg-gray-200 rounded-full justify-center items-center transition-colors duration-300 hover:bg-black"
            >
              <svg className="w-6 h-6 text-black transition-colors duration-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>

            <div className="relative w-full max-w-4xl h-full overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={page}
                  custom={direction}
                  variants={sliderVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 250, damping: 20 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute w-full h-full p-4 md:p-8"
                >
                  <div className="bg-black w-full h-full rounded-xl flex justify-center items-center p-4">
                    <Image
                      src={projectImages[page].src}
                      alt={`APPLIQ project image ${page + 1}`}
                      width={projectImages[page].width}
                      height={projectImages[page].height}
                      className="max-w-full h-auto max-h-full rounded-xl object-contain"
                      priority={page === 0}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button 
              onClick={() => paginate(1)} 
              className="hidden md:flex absolute right-0 z-10 group w-14 h-14 bg-gray-200 rounded-full justify-center items-center transition-colors duration-300 hover:bg-black"
            >
              <svg className="w-6 h-6 text-black transition-colors duration-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
          
          <div className="flex md:hidden justify-center items-center gap-4 mt-8">
              <button onClick={() => paginate(-1)} className="group w-14 h-14 bg-gray-200 rounded-full flex justify-center items-center transition-colors duration-300 hover:bg-black">
                  <svg className="w-6 h-6 text-black transition-colors duration-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button onClick={() => paginate(1)} className="group w-14 h-14 bg-gray-200 rounded-full flex justify-center items-center transition-colors duration-300 hover:bg-black">
                  <svg className="w-6 h-6 text-black transition-colors duration-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center mt-24"
          variants={fadeIn}
        >
          <div className="md:col-span-1">
            <p className="text-sm uppercase tracking-wider text-gray-500">About project —</p>
            <h2 className="text-2xl font-semibold tracking-tight uppercase">APPLIQ</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-xl md:text-2xl font-light leading-tight">
              I designed the HR applicant management system&apos;s whole frontend, as well as the logo.
            </p>
          </div>
        </motion.div>

        <div className="flex justify-center mt-24">
          <Link href="/" className="group inline-block w-14 h-14 bg-black rounded-full flex justify-center items-center transition-colors duration-300 hover:bg-[#00ffcc]">
            <svg className="w-6 h-6 text-white transform transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          </Link>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
