'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Data for the services you offer
const services = [
  {
    title: 'Website Design',
    description: 'Creative and fully responsive website designs created from scratch with attention to every detail. Each project is created with user experience best practices and customized animations in mind.',
  },
  {
    title: 'Branding',
    description: 'Developing strong brand identities that resonate with the target audience. This includes logo design, color palettes, typography, and overall brand guidelines to ensure consistency.',
  },
  // You can add more services here
];

// Animation variants for elements fading in from below
const fadeInFromBottom = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const titleVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="w-full px-8 py-24 md:px-12 lg:px-24 bg-white pt-32">
      {/* Section Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="mb-16"
      >
        <div className="flex items-center mb-4">
          <motion.div 
            className="w-[20%] h-[2px] bg-black"
            variants={lineVariants}
            style={{ originX: 0 }}
          ></motion.div>
        </div>
        <motion.h2 
          className="text-7xl md:text-9xl font-bold font-abel tracking-tighter text-black uppercase"
          variants={titleVariants}
        >
          Services
        </motion.h2>
        <div className="flex items-center mt-4">
          <motion.div 
            className="w-full h-[2px] bg-black"
            variants={lineVariants}
            style={{ originX: 0 }}
          ></motion.div>
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: Introductory Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInFromBottom}
        >
          <h3 className="text-3xl font-semibold leading-tight tracking-tight mb-6">
            Open to new challenges in two specialized categories —
          </h3>
          <p className="text-gray-600 mb-4 uppercase text-sm tracking-wider">
            Collaborate and create together something exceptional for your success.
          </p>
          {/* "Currently Available" Pill with Green Dot */}
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-gray-700 text-xs font-medium uppercase tracking-wider">
              Currently Available
            </span>
          </div>
        </motion.div>

        {/* Right Column: List of Services */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInFromBottom}
              className="border-b border-gray-200 pb-8"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-semibold tracking-tight uppercase">
                    {service.title}
                  </h4>
                  <span className="text-sm text-gray-400 font-mono">[0{index + 1}]</span>
                </div>
              </div>
              <div className="flex justify-between items-end gap-8">
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
                {/* Animated Plus Button */}
                <button className="group flex-shrink-0 w-14 h-14 bg-black rounded-full flex justify-center items-center transition-colors duration-300 hover:bg-[#00ffcc]">
                  <svg className="w-6 h-6 text-white transform transition-transform duration-300 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6"></path></svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
