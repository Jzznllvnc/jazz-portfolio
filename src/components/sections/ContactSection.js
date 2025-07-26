'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for elements fading in
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    }
  },
};

export default function ContactSection() {
  return (
    <section id="contact" className="w-full px-8 py-24 md:px-12 lg:px-24 bg-white text-black">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <div className="flex items-center mb-4">
          <div className="w-12 h-px bg-gray-300"></div>
        </div>
        <h2 className="text-7xl md:text-9xl font-bold tracking-tighter uppercase">
          Contact
        </h2>
        <div className="flex items-center mt-4">
          <div className="w-full h-px bg-gray-300"></div>
        </div>
      </motion.div>

      {/* Contact Info and Call to Action */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}
        className="max-w-3xl"
      >
        <h3 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight mb-6">
          Have a project in mind? <br/> Let's create something amazing.
        </h3>
        
        <p className="text-lg text-gray-700 mb-8">
          I'm currently available for freelance work and open to discussing new projects. Feel free to reach out.
        </p>

        <a 
          href="mailto:your-email@example.com" 
          className="inline-block bg-black text-white text-lg font-medium py-4 px-8 rounded-full transition-transform hover:scale-105"
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
}
