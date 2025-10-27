'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Microscope, 
  FlaskConical, 
  Monitor, 
  Code, 
  Zap, 
  Shield, 
  Leaf, 
  CircleDot,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import { skills } from '@/data/portfolio';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(skills.map(skill => skill.category)))];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'instrumentation': return Microscope;
      case 'research-techniques': return FlaskConical;
      case 'software': return Monitor;
      case 'programming': return Code;
      default: return TrendingUp;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'instrumentation': return 'text-navy';
      case 'research-techniques': return 'text-emerald';
      case 'software': return 'text-gold';
      case 'programming': return 'text-coral';
      default: return 'text-steel-blue';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'instrumentation': return 'Instrumentation Skills';
      case 'research-techniques': return 'Research Techniques';
      case 'software': return 'Software & Tools';
      case 'programming': return 'Programming';
      default: return category;
    }
  };

  const getProficiencyColor = (level: number) => {
    if (level >= 5) return 'bg-emerald';
    if (level >= 4) return 'bg-navy';
    if (level >= 3) return 'bg-gold';
    return 'bg-coral';
  };

  const getProficiencyLabel = (level: number) => {
    if (level >= 5) return 'Expert';
    if (level >= 4) return 'Advanced';
    if (level >= 3) return 'Intermediate';
    return 'Basic';
  };

  return (
    <section id="skills" className="section-padding bg-sage">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Technical Skills & Expertise
          </h2>
          <p className="text-lg text-steel-blue max-w-2xl mx-auto">
            Comprehensive range of technical skills and research methodologies
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
          {categories.map((category) => {
            const IconComponent = getCategoryIcon(category);
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-navy text-white shadow-lg'
                    : 'bg-white text-charcoal hover:bg-light-blue hover:text-navy'
                }`}
              >
                <IconComponent size={18} />
                <span>{category === 'all' ? 'All Skills' : getCategoryLabel(category)}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:shadow-xl transition-all duration-300"
            >
              {/* Skill Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-navy mb-1">
                    {skill.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(skill.category)} bg-opacity-10`}>
                      {getCategoryLabel(skill.category)}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getProficiencyColor(skill.proficiency)} text-white`}>
                      {getProficiencyLabel(skill.proficiency)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Proficiency Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-steel-blue mb-2">
                  <span>Proficiency</span>
                  <span>{skill.proficiency}/5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(skill.proficiency / 5) * 100}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`h-2 rounded-full ${getProficiencyColor(skill.proficiency)}`}
                  />
                </div>
              </div>

              {/* Description */}
              {skill.description && (
                <p className="text-charcoal text-sm leading-relaxed">
                  {skill.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-navy mb-6 text-center">
              Research Expertise Areas
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-navy to-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-semibold text-navy mb-2">
                  Plasma Physics
                </h4>
                <p className="text-steel-blue text-sm">
                  Advanced plasma diagnostics and applications
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald to-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-semibold text-navy mb-2">
                  Environmental Remediation
                </h4>
                <p className="text-steel-blue text-sm">
                  Plasma-based environmental cleanup technologies
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gold to-coral rounded-full flex items-center justify-center mx-auto mb-4">
                  <CircleDot className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-semibold text-navy mb-2">
                  Nanotechnology
                </h4>
                <p className="text-steel-blue text-sm">
                  Green synthesis of metallic nanoparticles
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-coral to-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-semibold text-navy mb-2">
                  Sustainable Chemistry
                </h4>
                <p className="text-steel-blue text-sm">
                  Green chemical processes and technologies
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <div className="bg-gradient-to-r from-navy to-emerald rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Technical Excellence
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm opacity-90">Advanced Instrumentation Skills</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">8+</div>
                <div className="text-sm opacity-90">Research Techniques</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-sm opacity-90">Software & Programming Tools</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 