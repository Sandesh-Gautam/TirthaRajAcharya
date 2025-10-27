'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Linkedin, Mail, MapPin } from 'lucide-react';
import { navigationItems, contactInfo, personalInfo } from '@/data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{personalInfo.name}</h3>
                  <p className="text-emerald text-sm">{personalInfo.title}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Dedicated researcher specializing in non-thermal plasma physics and sustainable chemistry, 
                committed to developing innovative solutions for environmental challenges.
              </p>
              <div className="flex space-x-4">
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-emerald rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="w-10 h-10 bg-white/10 hover:bg-emerald rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-emerald transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-emerald" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-300 hover:text-emerald transition-colors duration-200 text-sm"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-emerald" />
                  <span className="text-gray-300 text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-300 text-sm"
            >
              © {currentYear} {personalInfo.name}. All rights reserved.
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 text-sm"
            >
              <a
                href="#privacy"
                className="text-gray-300 hover:text-emerald transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-gray-300 hover:text-emerald transition-colors duration-200"
              >
                Terms of Use
              </a>
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-gray-300 hover:text-emerald transition-colors duration-200"
              >
                <ArrowUp size={16} />
                <span>Back to Top</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
} 