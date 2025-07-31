'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectImage = ({ imageUrl, altText, priority = false }) => {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover)');
    setCanHover(mediaQuery.matches);
  }, []);

  // Variants for the image scale animation
  const imageScaleVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };

  if (canHover) {
    return (
      <div className="rounded-lg overflow-hidden h-[350px] md:h-[500px] bg-gray-100">
        <motion.div
          className="relative w-full h-full"
          variants={imageScaleVariants}
          initial="initial"
          whileHover="hover"
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <Image
            src={imageUrl}
            alt={altText}
            fill
            priority={priority}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    );
  }

  // Fallback for non-hover devices
  return (
    <div className="relative rounded-lg overflow-hidden bg-gray-100 h-[350px] md:h-[500px]">
      <Image
        src={imageUrl}
        alt={altText}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
};

export default ProjectImage;
