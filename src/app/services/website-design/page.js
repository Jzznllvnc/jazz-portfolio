'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/sections/Footer';

const WebsiteDesignPage = () => {
  // Animation variants for fading in elements
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: 'easeInOut',
        staggerChildren: 0.2
      } 
    },
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  return (
    <main className="bg-white text-black">
       <header className="sticky top-0 z-50 bg-white w-full px-8 py-6 md:px-12 lg:px-24 flex justify-between items-center">
        <div className="text-3xl font-bold tracking-tighter text-black leading-tight">
          Jazznelle
          <br />
          Vince
        </div>
      </header>

      <section className="w-full px-8 py-16 md:py-8 md:px-12 lg:px-24 flex items-center min-h-[calc(100vh-200px)]">
        <motion.div 
          className="max-w-7xl mx-auto w-full"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 items-center">
              {/* Left Column: Image */}
              <motion.div 
                className="w-full md:col-span-2 bg-white p-3 rounded-2xl shadow-md overflow-hidden"
                variants={itemFadeIn}
              >
                <Image
                  src="/images/webdesign.png"
                  alt="Website Design Example"
                  width={1200}
                  height={675} 
                  className="w-full h-auto object-cover rounded-md"
                  priority
                />
              </motion.div>

              {/* Right Column: Text Content */}
              <motion.div 
                className="md:col-span-1"
                variants={itemFadeIn}
              >
                <p className="text-sm uppercase tracking-wider text-gray-500">About Service —</p>
                <h2 className="text-2xl font-semibold tracking-tight uppercase mb-8 md:mb-20">Website Design</h2>
                <p className="text-xl md:text-2xl font-light leading-relaxed">
                  Creative and fully responsive website designs created from scratch with attention to every detail. Each project is built with user experience best practices and customized animations in mind.
                </p>
              </motion.div>
            </div>

            <div className="flex justify-center mt-24">
              <Link
                href="/#services"
                className="group flex h-14 w-14 items-center overflow-hidden rounded-full bg-black px-4 text-white transition-[width,padding] duration-300 ease-out md:hover:w-[132px] md:hover:px-5"
              >
                <span className="flex w-6 shrink-0 items-center justify-center transition-transform duration-300 ease-out md:group-hover:-translate-x-0.5">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                </span>
                <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap transition-[max-width,margin] duration-300 ease-out md:group-hover:ml-3 md:group-hover:max-w-[58px]">
                  <span className="block translate-y-3 opacity-0 text-sm font-medium uppercase tracking-[0.22em] transition-all duration-300 ease-out md:group-hover:translate-y-0 md:group-hover:opacity-100">
                    Back
                  </span>
                </span>
              </Link>
            </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
};

export default WebsiteDesignPage;
