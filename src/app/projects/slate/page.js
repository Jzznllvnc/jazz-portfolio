'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/sections/Footer';

const projectImages = [
  { src: '/images/system1.png', width: 1562, height: 791, description: 'Login & Registration portal interface' },
  { src: '/images/system2.png', width: 1304, height: 614, description: 'Login security verification, OTP for supplier and QR code for admin/employees' },
  { src: '/images/system3.png', width: 301, height: 208, description: 'System logo design' },
  { src: '/images/system0.png', width: 1562, height: 791, description: 'System dashboard overview' },
  { src: '/images/system4.png', width: 522, height: 729, description: 'Sidebar navigation, expanded and collapsed states' },
  { src: '/images/system5.png', width: 1562, height: 791, description: 'Smart inventory management, showing warehouse blueprint' },
  { src: '/images/system6.png', width: 1562, height: 791, description: 'Procurement workflow, purchase order creation through bidding or direct purchase' },
  { src: '/images/system7.png', width: 1562, height: 791, description: 'Project & Shipment tracking, real-time updates' },
  { src: '/images/system8.png', width: 1562, height: 791, description: 'Assets & maintenance management, equipment tracking' },
  { src: '/images/system9.png', width: 1562, height: 791, description: 'Document management, invoices, contracts, etc. directs here' },
  { src: '/images/system10.png', width: 939, height: 673, description: 'Supplier portal, mobile app friendly' },
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

export default function SlatePage() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const swipeStartXRef = useRef(null);
  const swipeCurrentXRef = useRef(null);
  const suppressNextImageClickRef = useRef(false);

  const paginate = (newDirection) => {
    let newPage = page + newDirection;
    if (newPage < 0) {
      newPage = projectImages.length - 1;
    } else if (newPage >= projectImages.length) {
      newPage = 0;
    }
    setPage([newPage, newDirection]);
  };

  const resetSwipeTracking = () => {
    swipeStartXRef.current = null;
    swipeCurrentXRef.current = null;
  };

  const handleSwipeStart = (event) => {
    if (event.touches.length !== 1) return;
    swipeStartXRef.current = event.touches[0].clientX;
    swipeCurrentXRef.current = event.touches[0].clientX;
    suppressNextImageClickRef.current = false;
  };

  const handleSwipeMove = (event) => {
    if (swipeStartXRef.current === null || event.touches.length !== 1) return;
    swipeCurrentXRef.current = event.touches[0].clientX;
  };

  const getSwipeDirection = () => {
    if (swipeStartXRef.current === null || swipeCurrentXRef.current === null) {
      resetSwipeTracking();
      return 0;
    }

    const deltaX = swipeStartXRef.current - swipeCurrentXRef.current;
    resetSwipeTracking();

    if (Math.abs(deltaX) < 45) return 0;
    return deltaX > 0 ? 1 : -1;
  };

  const handleSliderSwipeEnd = () => {
    const swipeDirection = getSwipeDirection();
    if (swipeDirection === 0) return;

    paginate(swipeDirection);
    suppressNextImageClickRef.current = true;
  };

  const handleImagePreviewOpen = () => {
    if (suppressNextImageClickRef.current) {
      suppressNextImageClickRef.current = false;
      return;
    }
    setIsPreviewOpen(true);
  };

  useEffect(() => {
    if (!isPreviewOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsPreviewOpen(false);
        return;
      }

      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        const keyDirection = event.key === 'ArrowRight' ? 1 : -1;
        setPage(([currentPage]) => {
          let newPage = currentPage + keyDirection;
          if (newPage < 0) {
            newPage = projectImages.length - 1;
          } else if (newPage >= projectImages.length) {
            newPage = 0;
          }
          return [newPage, keyDirection];
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPreviewOpen]);

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
          <div className="relative w-full flex flex-col items-center">
            <div className="relative w-full h-[400px] md:h-[600px] flex justify-center items-center">
            <button 
              onClick={() => paginate(-1)} 
              className="hidden md:flex absolute left-0 z-10 group w-14 h-14 bg-gray-200 rounded-full justify-center items-center transition-colors duration-300 hover:bg-black"
            >
              <svg className="w-6 h-6 text-black transition-colors duration-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>

            <div className="relative w-full max-w-4xl h-full">
              <div className="relative w-full h-full overflow-hidden">
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
                    <button
                      type="button"
                      onClick={handleImagePreviewOpen}
                      onTouchStart={handleSwipeStart}
                      onTouchMove={handleSwipeMove}
                      onTouchEnd={handleSliderSwipeEnd}
                      onTouchCancel={resetSwipeTracking}
                      className="bg-black w-full h-full rounded-xl flex justify-center items-center p-4 cursor-zoom-in"
                      aria-label={`Open SLATE project image ${page + 1} in full size`}
                    >
                      <Image
                        src={projectImages[page].src}
                        alt={`SLATE project image ${page + 1}`}
                        width={projectImages[page].width}
                        height={projectImages[page].height}
                        className="max-w-full h-auto max-h-full rounded-xl object-contain"
                        priority={page === 0}
                      />
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>
              <p className="absolute right-4 md:right-8 top-full mt-2 text-sm text-gray-500 italic text-right leading-snug max-w-[85%]">
                {projectImages[page].description}
              </p>
            </div>

            <button 
              onClick={() => paginate(1)} 
              className="hidden md:flex absolute right-0 z-10 group w-14 h-14 bg-gray-200 rounded-full justify-center items-center transition-colors duration-300 hover:bg-black"
            >
              <svg className="w-6 h-6 text-black transition-colors duration-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
            </div>
            
          </div>
          
          <div className="flex md:hidden justify-center items-center gap-4 mt-20">
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
            <h2 className="text-2xl font-semibold tracking-tight uppercase">SLATE</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-xl md:text-2xl font-light leading-tight">
              I managed the entirety of the UI/UX for SLATE&apos;s Logistic 1, and also contributed to some backend functionality.
            </p>
          </div>
        </motion.div>

        <div className="flex justify-center mt-24">
          <Link href="/" className="group inline-block w-14 h-14 bg-black rounded-full flex justify-center items-center transition-colors duration-300 hover:bg-[#00ffcc]">
            <svg className="w-6 h-6 text-white transform transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          </Link>
        </div>
      </motion.section>

      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 p-4 md:p-8 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPreviewOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsPreviewOpen(false)}
              className="absolute z-20 top-4 right-4 md:top-6 md:right-6 w-11 h-11 rounded-full bg-white/20 text-white text-2xl leading-none flex items-center justify-center hover:bg-white/30"
              aria-label="Close full-size image preview"
            >
              ×
            </button>

            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={projectImages[page].src}
                alt={`SLATE project image ${page + 1} full size`}
                width={projectImages[page].width}
                height={projectImages[page].height}
                className="w-auto h-auto max-w-full max-h-full object-contain"
                priority
              />
            </motion.div>

            <div className="absolute inset-x-0 bottom-6 flex md:hidden justify-center items-center gap-4 z-20">
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  paginate(-1);
                }}
                className="group w-14 h-14 bg-gray-200 rounded-full flex justify-center items-center transition-colors duration-300 hover:bg-black"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6 text-black transition-colors duration-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  paginate(1);
                }}
                className="group w-14 h-14 bg-gray-200 rounded-full flex justify-center items-center transition-colors duration-300 hover:bg-black"
                aria-label="Next image"
              >
                <svg className="w-6 h-6 text-black transition-colors duration-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
