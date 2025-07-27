'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProjectImage = ({ imageUrl, altText }) => {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    // This check runs on the client and sets canHover to true only on devices that support hover.
    const mediaQuery = window.matchMedia('(hover: hover)');
    setCanHover(mediaQuery.matches);
  }, []);

  // If the device supports hover, render the animated version.
  if (canHover) {
    return (
      <motion.div
        className="relative rounded-lg overflow-hidden h-[700px] bg-gray-100"
        whileHover="hover"
        initial="initial"
      >
        {/* Grayscale Image (Bottom Layer) */}
        <motion.img
          src={imageUrl}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover grayscale"
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.1 }, // Added zoom effect
          }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/CCCCCC/FFFFFF?text=Image+Error'; }}
        />
        {/* Color Image (Top Layer) with animated clipPath */}
        <motion.img
          src={imageUrl}
          alt={altText}
          className="absolute inset-0 w-full h-full object-cover"
          variants={{
            initial: { clipPath: 'circle(0% at 50% 50%)', scale: 1 },
            hover: { clipPath: 'circle(150% at 50% 50%)', scale: 1.1 }, // Added zoom effect
          }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/CCCCCC/FFFFFF?text=Image+Error'; }}
        />
      </motion.div>
    );
  }

  // Otherwise, for touch devices, render a simple, non-animated, full-color image.
  return (
    <div className="relative rounded-lg overflow-hidden h-[500px] bg-gray-100">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/CCCCCC/FFFFFF?text=Image+Error'; }}
      />
    </div>
  );
};

export default ProjectImage;
