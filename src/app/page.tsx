'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Research from '@/components/Research';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Publications from '@/components/Publications';
import Skills from '@/components/Skills';
import Awards from '@/components/Awards';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-white">
      <Header />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Research />
        <Experience />
        <Education />
        <Publications />
        <Skills />
        <Awards />
        <Contact />
        <Footer />
      </motion.div>
    </main>
  );
} 