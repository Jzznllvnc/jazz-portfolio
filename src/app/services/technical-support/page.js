'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/sections/Footer';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.1 } },
};

export default function TechnicalSupportPage() {
  return (
    <main className="bg-white text-black">
      <header className="sticky top-0 z-50 bg-white w-full px-8 py-6 md:px-12 lg:px-24 flex justify-between items-center">
        <div className="text-3xl font-bold tracking-tighter text-black leading-tight">
          Jazznelle
          <br />
          Vince
        </div>
        {/* Book a Schedule Button */}
        <Link 
          href="/#contact" 
          className="bg-black text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 hover:bg-gray-800"
        >
          Book a schedule
        </Link>
      </header>

      <section className="w-full px-8 pt-16 md:pt-8 md:px-12 lg:px-24">
        {/* Image Section */}
        <div className="relative w-full flex justify-center items-center md:h-[85vh] mb-24">
          <img
            src="/images/technical.png"
            alt="Technical Support Services"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        
        {/* Text Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="md:col-span-1">
            <p className="text-sm uppercase tracking-wider text-gray-500 mt-4">About service —</p>
            <h2 className="text-2xl font-semibold tracking-tight uppercase">Technical Support &<br></br>System Services</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-xl md:text-2xl font-light leading-tight mt-8 md:mt-30">
              Offering complete technical solutions — from software optimization and remote support to PC builds and hardware care. Whether you need help with OS installation, system tuning, driver management, cleaning, or diagnostics — get support tailored to your specific hardware or software needs.
            </p>
          </div>
        </motion.div>

        <div className="flex justify-center mt-24">
          <Link href="/#services" className="group inline-block w-14 h-14 bg-black rounded-full flex justify-center items-center transition-colors duration-300 hover:bg-[#00ffcc]">
            <svg className="w-6 h-6 text-white transform transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
