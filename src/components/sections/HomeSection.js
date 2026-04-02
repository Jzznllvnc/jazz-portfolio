'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  { src: '/images/me2.png', alt: 'Pixelated portrait', width: 731, height: 758 },
  { src: '/images/random2.jpg', alt: 'Abstract circular art', width: 768, height: 1086 },
  { src: '/images/random.jpg', alt: 'Abstract blurry portrait', width: 727, height: 727 },
  { src: '/images/me.png', alt: 'Profile silhouette', width: 3672, height: 3672 },
];

const typewriterWords = ['WEB', 'BRAND', 'SYSTEM', 'TECH'];

export default function HomeSection() {
  const [canHover, setCanHover] = useState(false);
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [typedWord, setTypedWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover)');
    setCanHover(mediaQuery.matches);
  }, []);

  useEffect(() => {
    const currentWord = typewriterWords[activeWordIndex];
    if (!currentWord) return;

    const isWordComplete = !isDeleting && typedWord === currentWord;
    const isWordEmpty = isDeleting && typedWord.length === 0;

    let delay = isDeleting ? 105 : 120;
    if (isWordComplete) delay = 1500;
    if (isWordEmpty) delay = 170;

    const timer = setTimeout(() => {
      if (isWordComplete) {
        setIsDeleting(true);
        return;
      }

      if (isWordEmpty) {
        const nextWordIndex = (activeWordIndex + 1) % typewriterWords.length;
        setIsDeleting(false);
        setActiveWordIndex(nextWordIndex);
        return;
      }

      setTypedWord((prev) => (
        isDeleting
          ? currentWord.slice(0, prev.length - 1)
          : currentWord.slice(0, prev.length + 1)
      ));
    }, delay);

    return () => clearTimeout(timer);
  }, [activeWordIndex, isDeleting, typedWord]);

  // Image spread
  const spread = canHover ? 70 : 35;

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-center items-center text-black px-8 pt-32 pb-16 md:pb-24">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-7xl md:text-8xl font-bold font-righteous uppercase leading-none text-center mb-16"
        >
          <span className="flex min-h-[1em] items-center justify-center mb-2 md:mb-3">
            <span className="inline-block">{typedWord}</span>
            <span aria-hidden="true" className="ml-[2px] inline-block h-[0.9em] w-[0.09em] animate-pulse bg-black" />
          </span>
          <span className="block">SOLUTIONS.</span>
        </motion.h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-x-[170px] items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
            className="hidden md:flex justify-end"
          >
             <p className="font-light tracking-tight text-left">
              <span className="text-2xl md:text-3xl">Manila</span>
              <br />
              <span className="font-semibold text-4xl md:text-5xl">PHILIPPINES</span>
            </p>
          </motion.div>

          {/* Image Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
            className="relative flex justify-center items-center order-first md:order-none"
          >
            <div
              className="relative w-64 h-80 md:w-80 md:h-96"
            >
              {images.map((image, index) => (
                <motion.div
                  key={image.src}
                  className="absolute top-0 left-0 w-full h-full shadow-[0_20px_25px_15px_rgba(0,0,0,0.12)] rounded-lg overflow-hidden"
                  initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
                  animate={{
                    x: (index - 1.5) * spread,
                    rotate: (index - 1.5) * 5,
                    opacity: 1
                  }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 + index * 0.1 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="w-full h-full object-cover"
                    priority={index === 0}
                    sizes="(max-width: 768px) 256px, 320px"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Paragraph description on the right*/}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
            className="flex justify-center md:justify-start mt-8 md:mt-0"
          >
            <p className="max-w-xs text-base text-gray-600 leading-relaxed text-center md:text-left">
              I combine creative design with reliable technology. Whether I&apos;m designing a brand, building a website, or providing hands-on system support, my goal is to make things that look great and run smoothly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
