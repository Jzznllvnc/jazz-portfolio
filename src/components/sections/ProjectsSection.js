'use client'; // This directive is needed for components with interactivity

import React from 'react';
import { motion } from 'framer-motion';
import ProjectImage from '../ui/ProjectImage'; // Import the new component

// Project data updated with a liveUrl for each project
const projects = [
  {
    title: 'SCRAPNEAR',
    date: '07 / 2025',
    tags: ['HTML5', 'Tailwind', 'Javascript', 'Leaflet.js', 'OpenStreetMap APIs'],
    description: 'A simple community-based web app that aims to help users easily locate the nearest recycling centers near them.',
    imageUrl: '/images/scrap.png',
    liveUrl: 'https://scrapnear.vercel.app/', // Replace with your actual project link
  },
  {
    title: 'APPLIQ',
    date: '04 / 2025',
    tags: ['Javascript', 'Tailwind CSS', 'PHP', 'MySQL'],
    description: 'A simple HR applicant management we did as small project at school.',
    imageUrl: '/images/appliq.png',
    liveUrl: '#', // Replace with your actual project link
  },
  {
    title: 'CRAFTWISE',
    date: '06 / 2025',
    tags: ['HTML5', 'CSS3', 'Tailwind', 'Javascript', 'MySQL', 'Gemini API'],
    description: 'A dummy e-commerce web app exclusively for pc parts, with a chatbot.',
    imageUrl: '/images/craft.png',
    liveUrl: 'https://craftwise.web1337.net/', // Replace with your actual project link
  },
  {
    title: 'SUMMUP',
    date: '06 / 2025',
    tags: ['HTML5', 'CSS3', 'Javascript', 'Node.js', 'Gemini API'],
    description: 'An AI-powered tool to summarize content of documents (DOCx, PDFs, PPT.PPTx, Images).',
    imageUrl: '/images/sum.png',
    liveUrl: 'https://summup-alpha.vercel.app/', // Replace with your actual project link
  }
];

// Animation variants for the container of project cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // This will make the cards appear one after another
    },
  },
};

// Animation variants for each individual project card
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
            className="w-[20%] h-[1.5px] bg-black"
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
            className="w-full h-px bg-black"
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
          <motion.div key={index} variants={itemVariants} className="flex flex-col group"> {/* Added 'group' for hover effects */}
            
            {/* Use the new ProjectImage component */}
            <div className="mb-6">
              <ProjectImage imageUrl={project.imageUrl} altText={project.title} />
            </div>
            
            {/* Project Info */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <h3 className="relative text-xl font-semibold tracking-tight text-black uppercase">
                  {project.title}
                  {/* Underline effect on group hover */}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                </h3>
                <span className="text-gray-300">|</span>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group/visit relative text-sm font-medium text-black">
                  <span className="flex items-center gap-1">
                    Visit
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 transition-transform duration-300 ease-out group-hover/visit:-translate-y-0.5 group-hover/visit:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="18.7 12.4 18.7 5.3 11.6 5.3" />
                      <line x1="5.3" y1="18.7" x2="17.1" y2="6.9" />
                    </svg>
                  </span>
                </a>
              </div>
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
