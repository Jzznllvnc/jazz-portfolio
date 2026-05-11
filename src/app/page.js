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
import Preloader from '@/components/ui/Preloader';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCheckingLoader, setIsCheckingLoader] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [isContentReady, setIsContentReady] = useState(false);

  useEffect(() => {
    const hasSeenLoader = window.sessionStorage.getItem('hasSeenLoader');

    if (hasSeenLoader) {
      setIsContentReady(true);
      setShowLoader(false);
      setIsCheckingLoader(false);
      return;
    }

    setShowLoader(true);
    setIsCheckingLoader(false);
  }, []);

  useEffect(() => {
    if (isMenuOpen || showLoader || isCheckingLoader || !isContentReady) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
    document.body.style.overflowX = 'hidden';

    return () => {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = '';
    };
  }, [isMenuOpen, showLoader, isCheckingLoader, isContentReady]);

  useEffect(() => {
    if (!isContentReady) return;

    const shouldRestoreServicesScroll = window.sessionStorage.getItem('restoreServicesScroll');
    const savedScrollX = window.sessionStorage.getItem('servicesScrollX');
    const savedScrollY = window.sessionStorage.getItem('servicesScrollY');

    if (shouldRestoreServicesScroll !== 'true' || savedScrollY === null) return;

    window.sessionStorage.removeItem('restoreServicesScroll');
    window.sessionStorage.removeItem('servicesScrollX');
    window.sessionStorage.removeItem('servicesScrollY');

    const scrollX = Number(savedScrollX || 0);
    const scrollY = Number(savedScrollY);

    if (!Number.isFinite(scrollY)) return;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({
          left: Number.isFinite(scrollX) ? scrollX : 0,
          top: scrollY,
          behavior: 'auto',
        });
      });
    });
  }, [isContentReady]);

  const handleLoaderComplete = () => {
    window.sessionStorage.setItem('hasSeenLoader', 'true');
    setShowLoader(false);
    setIsContentReady(true);
  };

  if (isCheckingLoader) {
    return <main className="min-h-screen bg-white" />;
  }

  return (
    <>
      {showLoader && <Preloader onComplete={handleLoaderComplete} />}
      {isContentReady ? (
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
          <Footer showScrollToTop />
        </main>
      ) : (
        <main className="min-h-screen bg-white" aria-hidden="true" />
      )}
    </>
  );
}
