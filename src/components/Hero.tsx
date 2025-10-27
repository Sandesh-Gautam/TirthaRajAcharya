'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, Download, Eye } from 'lucide-react';
import { heroSection } from '@/data/portfolio';
import tirtha from '../../public/tirtha.jpg';

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={tirtha}
          alt="Dr. Tirtha Raj Acharya"
          fill
          className="object-cover opacity-40"
          style={{ objectPosition: 'center top 50%' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-white/60"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-plasma-pattern opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-4 h-4 bg-navy/20 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-6 h-6 bg-emerald/20 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-20 w-3 h-3 bg-steel-blue/20 rounded-full"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-navy mb-6"
          >
            {heroSection.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-charcoal mb-8 font-medium"
          >
            {heroSection.subtitle}
          </motion.p>

          {/* Current Affiliation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-lg text-emerald font-semibold mb-2">
              {heroSection.currentAffiliation}
            </p>
            <p className="text-steel-blue">
              {heroSection.location}
            </p>
          </motion.div>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href={heroSection.ctaButtons.primary.href}
              className="btn-primary flex items-center space-x-2"
            >
              <Eye size={20} />
              <span>{heroSection.ctaButtons.primary.text}</span>
            </a>
            <a
              href={heroSection.ctaButtons.secondary.href}
              download
              className="btn-outline flex items-center space-x-2"
            >
              <Download size={20} />
              <span>{heroSection.ctaButtons.secondary.text}</span>
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            onClick={scrollToNext}
            className="flex flex-col items-center space-y-2 text-steel-blue hover:text-navy transition-colors duration-300"
          >
            <span className="text-sm font-medium">Learn More</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
} 