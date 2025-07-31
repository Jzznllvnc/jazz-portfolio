'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/sections/Footer';

const BrandIdentityPage = () => {
  // Animation variants for parent container to stagger children
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for individual child elements
  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
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

      {/* Main Content */}
      <section className="w-full px-8 py-24 md:px-12 lg:px-24">
        <div className="w-full">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            {/* Left Column: Text Content */}
            <motion.div className="lg:sticky lg:top-32" variants={itemFadeIn}>
              <p className="text-sm uppercase tracking-wider text-gray-500">About Service —</p>
              <h2 className="text-3xl font-semibold tracking-tight uppercase mb-8 md:mb-20">Brand Identity</h2>
              <p className="text-xl xl:text-2xl font-light leading-relaxed">
                Crafting unique and memorable brand identities that resonate with audiences and set businesses apart.
              </p>
            </motion.div>

            {/* Right Column: Bento Grid Images */}
            <motion.div className="flex flex-col gap-8" variants={itemFadeIn}>
              <div className="w-full bg-gray-50 p-4 rounded-xl shadow-lg overflow-hidden">
                <Image
                  src="/images/branding1.png"
                  alt="Brand Identity Example 1"
                  width={1600}
                  height={900}
                  className="w-full h-auto object-cover rounded-md"
                  priority
                />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-gray-50 p-4 rounded-xl shadow-lg overflow-hidden">
                  <Image
                    src="/images/branding2.png"
                    alt="Brand Identity Example 2"
                    width={800}
                    height={800}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-xl shadow-lg overflow-hidden">
                  <Image
                    src="/images/branding3.jpg"
                    alt="Brand Identity Example 3"
                    width={800}
                    height={800}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
              </div>
            </motion.div>
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

export default BrandIdentityPage;
