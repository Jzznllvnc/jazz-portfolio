'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Animation for the container to fade in
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeInOut' }
  },
};

// Animation for the list to stagger children
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animation for each link item
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'Projects', href: '#projects' },
  { title: 'Services', href: '#services' },
  { title: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/jzznllvnc',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path></svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/jzznllvnc',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.946 6.29a6.606 6.606 0 0 0-.418-2.185 4.412 4.412 0 0 0-1.039-1.594 4.412 4.412 0 0 0-1.594-1.039 6.606 6.606 0 0 0-2.184-.418C12.75 1.01 12.444 1 10 1s-2.75.01-3.71.054a6.606 6.606 0 0 0-2.185.418A4.412 4.412 0 0 0 2.51 2.511a4.412 4.412 0 0 0-1.039 1.594 6.606 6.606 0 0 0-.418 2.184C1.01 7.25 1 7.556 1 10s.01 2.75.054 3.71a6.606 6.606 0 0 0 .418 2.185 4.412 4.412 0 0 0 1.039 1.594 4.411 4.411 0 0 0 1.594 1.039 6.606 6.606 0 0 0 2.184.418C7.25 18.99 7.556 19 10 19s2.75-.01 3.71-.054a6.606 6.606 0 0 0 2.185-.418 4.602 4.602 0 0 0 2.633-2.633 6.606 6.606 0 0 0 .418-2.184C18.99 12.75 19 12.444 19 10s-.01-2.75-.054-3.71zm-1.62 7.347a4.978 4.978 0 0 1-.31 1.67 2.98 2.98 0 0 1-1.708 1.709 4.979 4.979 0 0 1-1.671.31c-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052a4.979 4.979 0 0 1-1.67-.31 2.788 2.788 0 0 1-1.036-.673 2.788 2.788 0 0 1-.673-1.035 4.978 4.978 0 0 1-.31-1.671c-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637a4.979 4.979 0 0 1 .31-1.67 2.788 2.788 0 0 1 .673-1.036 2.788 2.788 0 0 1 1.035-.673 4.979 4.979 0 0 1 1.671-.31c.95-.043 1.234-.052 3.637-.052s2.688.009 3.637.052a4.979 4.979 0 0 1 1.67.31 2.788 2.788 0 0 1 1.036.673 2.788 2.788 0 0 1 .673 1.035 4.979 4.979 0 0 1 .31 1.671c.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637zM10 5.378A4.622 4.622 0 1 0 14.622 10 4.622 4.622 0 0 0 10 5.378zM10 13a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm5.884-7.804a1.08 1.08 0 1 1-1.08-1.08 1.08 1.08 0 0 1 1.08 1.08z" transform="translate(-1 -1)"></path>
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/jzznllvnc_',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66 h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z" transform="scale(0.33)"></path>
      </svg>
    ),
  },
];

export default function MenuOverlay({ onClose }) {
  return (
    <motion.div
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed inset-0 z-40 bg-black text-white p-8 md:p-12 lg:p-24 overflow-y-auto no-scrollbar"
    >
      {/* hidden scrollbar across different browsers */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
      
      <div className="flex min-h-full flex-col">
        <motion.ul
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="pt-32 flex flex-col items-start space-y-8"
        >
          {navLinks.map((link, index) => (
            <motion.li key={index} variants={itemVariants} className="overflow-hidden w-full">
              <Link
                href={link.href}
                onClick={onClose}
                className="flex justify-between items-end w-full transition-colors hover:text-gray-400"
              >
                <div className="flex items-center gap-4 md:gap-8 text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter uppercase">
                  <span className="font-abel">{link.title}</span>
                  {link.title === 'Home' && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5, ease: 'circOut' }}
                    >
                      <Image
                        src="/images/gitprof.png"
                        alt="Jazznelle Vince"
                        width={112}
                        height={112}
                        sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 112px"
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full object-cover"
                      />
                    </motion.div>
                  )}
                </div>
                <span className="inline-block font-mono text-gray-500 text-sm mb-2">[0{index + 1}]</span>
              </Link>
              <div className="w-full h-px bg-gray-700 mt-4"></div>
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-auto flex justify-center gap-4 pb-2 pt-14">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-white transition-colors duration-300 hover:bg-white hover:text-black"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
