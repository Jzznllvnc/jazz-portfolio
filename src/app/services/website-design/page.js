'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/sections/Footer';

const WebsiteDesignPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
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

      <section className="w-full px-8 py-16 md:py-8 md:px-12 lg:px-24 flex items-center min-h-[calc(100vh-200px)]">
        <div className="max-w-7xl mx-auto w-full">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-24 items-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              {/* Left Column: Single Landscape Image */}
              <div className="w-full md:col-span-2 bg-white p-3 rounded-2xl shadow-md overflow-hidden">
                <Image
                  src="/images/webdesign.png"
                  alt="Website Design Example"
                  width={1200}
                  height={675} 
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>

              {/* Right Column: Text Content */}
              <div className="md:col-span-1">
                <p className="text-sm uppercase tracking-wider text-gray-500">About Service —</p>
                <h2 className="text-2xl font-semibold tracking-tight uppercase mb-20">Website Design</h2>
                <p className="text-2xl md:text-3xl font-light leading-relaxed">
                  Creative and fully responsive website designs created from scratch with attention to every detail. Each project is built with user experience best practices and customized animations in mind.
                </p>
              </div>
            </motion.div>

            <div className="flex justify-center mt-24">
              <Link href="/#services" className="group inline-block w-14 h-14 bg-black rounded-full flex justify-center items-center transition-colors duration-300 hover:bg-[#00ffcc]">
                <svg className="w-6 h-6 text-white transform transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              </Link>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WebsiteDesignPage;
