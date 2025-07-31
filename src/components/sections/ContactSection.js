'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SuccessModal from '../ui/SuccessModal';

// Animation variants
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

// Dropdown animation
const dropdownVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: -20, transition: { duration: 0.2 } }
};


export default function ContactSection() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const nameInputRef = useRef(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [serviceValue, setServiceValue] = useState("");
  const dropdownRef = useRef(null);

  const services = ["Website Design", "Brand Identity", "Tech Service", "Others"];

  // Effect to focus the name input on hash change
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#contact' && nameInputRef.current) {
        nameInputRef.current.focus({ preventScroll: true });
        setTimeout(() => {
            nameInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Effect to handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    formData.append('service', serviceValue);
    const data = Object.fromEntries(formData.entries());

    if (!data.service) {
        alert("Please select a service.");
        setIsLoading(false);
        return;
    }

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        event.target.reset();
        setServiceValue("");
      } else {
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
        {/* Section Title */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center mb-4">
            <motion.div className="w-[20%] h-[2px] bg-black" variants={lineVariants} style={{ originX: 0 }}></motion.div>
          </div>
          <motion.h2 className="text-7xl md:text-9xl font-bold font-abel tracking-tighter uppercase" variants={titleVariants}>
            Contact
          </motion.h2>
          <div className="flex items-center mt-4">
            <motion.div className="w-full h-[2px] bg-black" variants={lineVariants} style={{ originX: 0 }}></motion.div>
          </div>
        </motion.div>

        {/* Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}>
            <h3 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight mb-6">
              Have a project in mind or need tech help? <br/> I&apos;m here for it.
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              I&apos;m currently available for freelance work and open to discussing new projects, as well as techinical services. Feel free to reach out using the form.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn} className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-black">Let&apos;s Talk!</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input ref={nameInputRef} type="text" name="name" placeholder="Name" className="w-full bg-white rounded-md p-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black" required />
                <input type="email" name="email" placeholder="Email" className="w-full bg-white rounded-md p-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black" required />
              </div>
              <input type="tel" name="phone" placeholder="Phone (Optional)" className="w-full bg-white rounded-md p-3 mt-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black" />
              
              {/* Custom Service Dropdown */}
              <div className="relative mt-4" ref={dropdownRef}>
                <input type="hidden" name="service" value={serviceValue} />
                <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={`w-full bg-white rounded-md p-3 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-black ${!serviceValue ? 'text-gray-500' : 'text-black'}`}>
                  {serviceValue || "Select a service"}
                  <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.ul
                      variants={dropdownVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg overflow-hidden"
                    >
                      {services.map((service) => (
                        <li
                          key={service}
                          onClick={() => {
                            setServiceValue(service);
                            setIsDropdownOpen(false);
                          }}
                          className="px-4 py-3 text-black hover:bg-gray-100 cursor-pointer transition-colors duration-150"
                        >
                          {service}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
              
              <textarea name="message" placeholder="Message" rows="4" className="w-full bg-white rounded-md p-3 mt-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black" required></textarea>
              <button type="submit" className="w-full bg-black text-white font-bold py-3 mt-4 rounded-md transition-transform hover:scale-105 hover:bg-gray-800 disabled:bg-gray-500 disabled:scale-100" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* SuccessModal */}
      <AnimatePresence>
        {isSuccess && <SuccessModal onClose={() => setIsSuccess(false)} />}
      </AnimatePresence>
    </>
  );
}
