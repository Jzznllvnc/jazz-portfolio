'use client'; // This directive is needed for components with interactivity

import React from 'react';
import { motion } from 'framer-motion';
import ProjectImage from '../ui/ProjectImage';
import Link from 'next/link';

// Project data updated with a flag to distinguish internal vs. external links
const projects = [
  {
    title: 'SCRAPNEAR',
    date: '07 / 2025',
    tags: ['HTML5', 'Tailwind', 'Javascript', 'Leaflet.js', 'OpenStreetMap APIs'],
    description: 'A simple community-based web app that aims to help users easily locate the nearest recycling centers near them.',
    imageUrl: '/images/scrap.png',
    liveUrl: 'https://scrapnear.vercel.app/',
    isInternal: false, // This is an external link
  },
  {
    title: 'APPLIQ',
    date: '04 / 2025',
    tags: ['Javascript', 'Tailwind CSS', 'PHP', 'MySQL'],
    description: 'A simple HR applicant management we did as small project at school.',
    imageUrl: '/images/appliq.png',
    liveUrl: '/projects/appliq', // This is an internal link
    isInternal: true,
  },
  {
    title: 'CRAFTWISE',
    date: '06 / 2025',
    tags: ['HTML5', 'CSS3', 'Tailwind', 'Javascript', 'MySQL', 'Gemini API'],
    description: 'A dummy e-commerce web app exclusively for pc parts, with a chatbot.',
    imageUrl: '/images/craft.png',
    liveUrl: 'https://craftwise.web1337.net/',
    isInternal: false, // This is an external link
  },
  {
    title: 'SUMMUP',
    date: '06 / 2025',
    tags: ['HTML5', 'CSS3', 'Javascript', 'Node.js', 'Gemini API'],
    description: 'An AI-powered tool to summarize content of documents (DOCx, PDFs, PPT.PPTx, Images).',
    imageUrl: '/images/sum.png',
    liveUrl: 'https://summup-alpha.vercel.app/',
    isInternal: false, // This is an external link
  }
];

// Animation variants for the container of project cards and individually
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
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

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full px-8 py-16 md:px-12 lg:px-24 pt-32">
      {/* Section Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.2 }}
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
          Projects
        </motion.h2>
        <div className="flex items-center mt-4">
          <motion.div 
            className="w-full h-[2px] bg-black"
            variants={lineVariants}
            style={{ originX: 0 }}
          ></motion.div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-16"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants} className="flex flex-col group">
            
            <div className="relative mb-6">
              <ProjectImage imageUrl={project.imageUrl} altText={project.title} />
              
              <div className="absolute top-4 right-4 z-10">
                {project.isInternal ? (
                  <Link href={project.liveUrl} className="group/visit flex items-center gap-2 bg-white/80 text-black text-sm font-semibold py-2 px-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-lg">
                    <span>Visit</span>
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 ease-out group-hover/visit:-translate-y-0.5 group-hover/visit:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="8.25 2.75,2.75 2.75,2.75 13.25,13.25 13.25,13.25 7.75" />
                      <path d="m13.25 2.75-5.5 5.5m3-6.5h3.5v3.5" />
                    </svg>
                  </Link>
                ) : (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group/visit flex items-center gap-2 bg-white/80 text-black text-sm font-semibold py-2 px-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-lg">
                    <span>Visit</span>
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 ease-out group-hover/visit:-translate-y-0.5 group-hover/visit:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="8.25 2.75,2.75 2.75,2.75 13.25,13.25 13.25,13.25 7.75" />
                      <path d="m13.25 2.75-5.5 5.5m3-6.5h3.5v3.5" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-8">
              <h3 className="relative text-xl font-semibold tracking-tight text-black uppercase">
                {project.title}
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </h3>
              <span className="text-sm text-gray-500">{project.date}</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="text-xs uppercase tracking-wider border border-gray-300 rounded-full px-3 py-1 text-gray-600">
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-gray-700 leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
