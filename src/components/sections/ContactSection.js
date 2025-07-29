'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SuccessModal from '../ui/SuccessModal';

// Animation variants from your original file
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

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const titleVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
};

export default function ContactSection() {
  // State for the success modal and loading status
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle form submission by calling our API route
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true); // Trigger your existing SuccessModal
        event.target.reset();
      } else {
        // Handle server errors
        console.error('Failed to send message.');
        alert('An error occurred, please try again.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred, please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section id="contact" className="relative w-full px-8 py-24 md:px-12 lg:px-24 bg-white text-black">
        {/* All your animations and layout are preserved */}
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
            className="text-7xl md:text-9xl font-bold font-abel tracking-tighter uppercase"
            variants={titleVariants}
          >
            Contact
          </motion.h2>
          <div className="flex items-center mt-4">
            <motion.div 
              className="w-full h-[2px] bg-black"
              variants={lineVariants}
              style={{ originX: 0 }}
            ></motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeIn}
          >
            <h3 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight mb-6">
              Have a project in mind? <br/> Let&apos;s create something amazing.
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              I&apos;m currently available for freelance work and open to discussing new projects. Feel free to reach out using the form.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeIn}
            className="bg-gray-100 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-black">Let&apos;s Talk!</h3>
            {/* The form now calls the new handleSubmit function */}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Name" className="w-full bg-white rounded-md p-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black" required />
                <input type="email" name="email" placeholder="Email" className="w-full bg-white rounded-md p-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black" required />
              </div>
              <input type="tel" name="phone" placeholder="Phone (Optional)" className="w-full bg-white rounded-md p-3 mt-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black" />
              <textarea name="message" placeholder="Message" rows="4" className="w-full bg-white rounded-md p-3 mt-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black" required></textarea>
              <button 
                type="submit" 
                className="w-full bg-black text-white font-bold py-3 mt-4 rounded-md transition-transform hover:scale-105 hover:bg-gray-800 disabled:bg-gray-500 disabled:scale-100"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Your SuccessModal logic remains unchanged */}
      <AnimatePresence>
        {isSuccess && <SuccessModal onClose={() => setIsSuccess(false)} />}
      </AnimatePresence>
    </>
  );
}
