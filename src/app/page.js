'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import Header from '@/components/sections/Header';
import HomeSection from '@/components/sections/HomeSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import MenuOverlay from '@/components/ui/MenuOverlay';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <main className="bg-white text-black">
      <Header isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      
      <AnimatePresence>
        {isMenuOpen && <MenuOverlay onClose={() => setIsMenuOpen(false)} />}
      </AnimatePresence>

      {/* All sections are in one page */}
      <HomeSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
