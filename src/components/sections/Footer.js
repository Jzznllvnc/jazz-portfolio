'use client';

import React from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/Jzznllvnc',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/jzznllvnc/',
    icon: (
        <svg className="w-5 h-5 relative top-[3px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-1.623C8.724.54 8.316.529 7.053.472 3.734.323 1.948 2.11 1.799 5.433c-.056 1.265-.067 1.644-.067 4.85s.011 3.585.067 4.85c.149 3.323 1.935 5.11 5.254 5.254 1.266.056 1.645.067 4.85.067s3.585-.011 4.85-.067c3.323-.149 5.11-1.931 5.254-5.254.056-1.265.067-1.644.067-4.85s-.011-3.585-.067-4.85C22.052 2.11 20.266.323 16.947.173 15.684.117 15.276.105 12 .105zm0 5.838a6.028 6.028 0 100 12.056 6.028 6.028 0 000-12.056zm0 9.946a3.918 3.918 0 110-7.836 3.918 3.918 0 010 7.836zm6.406-9.696a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z"></path>
        </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://x.com/jzznllvnc_',
    icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
    ),
  },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="bg-white text-gray-500 px-8 py-6 md:px-12 lg:px-24"
    >
      <div className="container mx-auto flex justify-between items-center border-t border-gray-200 pt-6">
        <p className="text-sm uppercase tracking-wider">
          © jzznllvnc 2025. All rights reserved.
        </p>
        <div className="flex space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors duration-300"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
