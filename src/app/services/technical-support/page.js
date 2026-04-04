'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/sections/Footer';

// Animation variants for fading in elements
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
};

const bookScheduleGlowStyle = {
  backgroundImage: 'conic-gradient(from 0deg, rgba(0, 255, 204, 0.18) 0%, rgba(0, 255, 204, 0.08) 6%, transparent 12%, transparent 62%, rgba(0, 255, 204, 0.12) 70%, rgba(0, 255, 204, 0.4) 82%, #00ffcc 90%, rgba(0, 255, 204, 0.4) 98%, rgba(0, 255, 204, 0.18) 100%)',
};
const bookScheduleAuraStyle = {
  backgroundImage: 'conic-gradient(from 0deg, rgba(0, 255, 204, 0.1) 0%, rgba(0, 255, 204, 0.05) 6%, transparent 14%, transparent 64%, rgba(0, 255, 204, 0.06) 72%, rgba(0, 255, 204, 0.18) 86%, rgba(0, 255, 204, 0.1) 100%)',
};

export default function TechnicalSupportPage() {
  return (
    <main className="bg-white text-black">
      {/* Header Section */}
      <header className="sticky top-0 z-50 bg-white w-full px-8 py-6 md:px-12 lg:px-24 flex justify-between items-center">
        <div className="text-3xl font-bold tracking-tighter text-black leading-tight">
          Jazznelle
          <br />
          Vince
        </div>
        {/* Book a Schedule Button */}
        <Link 
          href="/#contact" 
          scroll={false}
          className="group relative inline-flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-4"
        >
          <span
            aria-hidden="true"
            className="absolute -inset-6 rounded-full opacity-50 blur-xl animate-[spin_3.25s_linear_infinite]"
            style={bookScheduleAuraStyle}
          />
          <span aria-hidden="true" className="absolute inset-0 rounded-full overflow-hidden">
            <span
              className="absolute inset-[-135%] animate-[spin_3.25s_linear_infinite]"
              style={bookScheduleGlowStyle}
            />
          </span>
          <span className="relative z-10 m-[3px] inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white">
            Book a schedule
          </span>
        </Link>
      </header>

      {/* Main content section */}
      <motion.section 
        className="w-full px-8 pt-16 md:pt-8 md:px-12 lg:px-24"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Image Section */}
        <motion.div 
          className="relative w-full flex justify-center items-center md:h-[85vh] mb-24"
          variants={fadeIn}
        >
          <Image
            src="/images/technical.png"
            alt="Technical Support Services"
            width={1919}
            height={1079}
            className="w-full h-full object-contain rounded-lg"
            priority
          />
        </motion.div>
        
        {/* Text Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-x-16 items-center"
          variants={fadeIn}
        >
          <div className="md:col-span-1">
            <p className="text-sm uppercase tracking-wider text-gray-500">About service —</p>
            <h2 className="text-2xl font-semibold tracking-tight uppercase">Technical Support &<br/>System Services</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-xl md:text-2xl font-light leading-tight mt-8 md:mt-0">
              Offering complete technical solutions — from software optimization and remote support to PC builds and hardware care. Whether you need help with OS installation, system tuning, driver management, cleaning, or diagnostics — get support tailored to your specific hardware or software needs.
            </p>
          </div>
        </motion.div>

        {/* Back to Services Button */}
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
      </motion.section>

      <Footer />
    </main>
  );
}
