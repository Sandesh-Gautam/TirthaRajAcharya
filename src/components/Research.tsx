'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Zap, Atom, Leaf, Shield, CircleDot, FlaskConical, Recycle } from 'lucide-react';
import { researchInterests } from '@/data/portfolio';

const iconMap = {
  Zap,
  Atom,
  Leaf,
  Shield,
  CircleDot,
  FlaskConical,
  Recycle
};

export default function Research() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const categories = ['all', ...Array.from(new Set(researchInterests.map(item => item.category)))];

  const filteredInterests = selectedCategory === 'all' 
    ? researchInterests 
    : researchInterests.filter(item => item.category === selectedCategory);

  return (
    <section id="research" className="section-padding bg-sage">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Research Interests
          </h2>
          <p className="text-lg text-steel-blue max-w-2xl mx-auto">
            Exploring innovative solutions for environmental challenges through plasma physics and sustainable chemistry
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-navy text-white shadow-lg'
                  : 'bg-white text-charcoal hover:bg-light-blue hover:text-navy'
              }`}
            >
              {category === 'all' ? 'All Areas' : category}
            </button>
          ))}
        </motion.div>

        {/* Research Interests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInterests.map((interest, index) => {
            const IconComponent = iconMap[interest.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={interest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredItem(interest.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className="group relative"
              >
                <div className="card h-full p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredItem === interest.id 
                        ? 'bg-gradient-to-r from-navy to-emerald text-white scale-110' 
                        : 'bg-light-blue text-navy'
                    }`}>
                      <IconComponent size={32} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-navy mb-3 text-center">
                    {interest.title}
                  </h3>

                  {/* Description */}
                  <p className="text-charcoal text-center leading-relaxed">
                    {interest.description}
                  </p>

                  {/* Category Badge */}
                  <div className="mt-4 flex justify-center">
                    <span className="px-3 py-1 bg-emerald/10 text-emerald text-sm font-medium rounded-full">
                      {interest.category}
                    </span>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-navy/5 to-emerald/5 rounded-xl transition-opacity duration-300 ${
                    hoveredItem === interest.id ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Current Research Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-navy mb-6 text-center">
              Current Research Focus
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-navy to-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                  <Atom className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-semibold text-navy mb-2">
                  NTP-driven Nitrogen Fixation
                </h4>
                <p className="text-steel-blue">
                  Developing sustainable alternatives to the Haber-Bosch process using non-thermal plasma technology
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald to-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-semibold text-navy mb-2">
                  CO2 Conversion
                </h4>
                <p className="text-steel-blue">
                  Converting CO2 into value-added chemicals using plasma-activated chemical reactions
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gold to-coral rounded-full flex items-center justify-center mx-auto mb-4">
                  <FlaskConical className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-semibold text-navy mb-2">
                  Plasma Catalysis
                </h4>
                <p className="text-steel-blue">
                  Integration of plasma technology with catalytic processes for enhanced chemical reactions
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 