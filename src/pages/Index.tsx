
import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Blog from '@/components/Blog';
import Achievements from '@/components/Achievements';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import FloatingGradients from '@/components/FloatingGradients';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground relative">
        {/* Background animations */}
        <AnimatedBackground />
        <FloatingGradients />
        
        {/* Main content with higher z-index */}
        <div className="relative z-10">
          <Navigation />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Blog />
            <Achievements />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
