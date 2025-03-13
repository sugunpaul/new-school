
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ClassroomSection from '../components/ClassroomSection';
import ActivitiesSection from '../components/ActivitiesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  // Add smooth scrolling to anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.replace('#', '');
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for the fixed header
            behavior: 'smooth',
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen w-full">
      <Header />
      <main>
        <Hero />
        <ClassroomSection />
        <ActivitiesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
