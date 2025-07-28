'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProjectImage = ({ imageUrl, altText }) => {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover)');
    setCanHover(mediaQuery.matches);
  }, []);

  if (canHover) {
    return (
      <motion.div
        className="relative rounded-lg overflow-hidden h-[700px] bg-gray-100"
        whileHover="hover"
        initial="initial"
      >
        <motion.img
          src={imageUrl}
          alt={altText}
          className="absolute inset-0 w-full h-full object-cover"
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.1 },
          }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/CCCCCC/FFFFFF?text=Image+Error'; }}
        />
      </motion.div>
    );
  }

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
