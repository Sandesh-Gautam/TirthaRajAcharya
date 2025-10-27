'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { GraduationCap, MapPin, Calendar, Award, FileText, Star } from 'lucide-react';
import { education } from '@/data/portfolio';

export default function Education() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const getDegreeIcon = (degree: string) => {
    if (degree.toLowerCase().includes('phd')) return 'text-gold';
    if (degree.toLowerCase().includes('master')) return 'text-emerald';
    return 'text-navy';
  };

  const getDegreeLevel = (degree: string) => {
    if (degree.toLowerCase().includes('phd')) return 'Doctorate';
    if (degree.toLowerCase().includes('master')) return 'Master\'s';
    return 'Bachelor\'s';
  };

  return (
    <section id="education" className="section-padding bg-light-blue">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Education
          </h2>
          <p className="text-lg text-steel-blue max-w-2xl mx-auto">
            Academic journey and research achievements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="card h-full p-6 hover:shadow-xl transition-all duration-300">
                {/* Degree Level Badge */}
                <div className="absolute -top-3 left-6">
                  <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                    getDegreeIcon(edu.degree)
                  } bg-opacity-90`}>
                    {getDegreeLevel(edu.degree)}
                  </span>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-6 mt-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    getDegreeIcon(edu.degree)
                  } bg-opacity-10`}>
                    <GraduationCap size={32} />
                  </div>
                </div>

                {/* Degree Title */}
                <h3 className="text-xl font-semibold text-navy mb-3 text-center">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <div className="text-center mb-4">
                  <p className="text-emerald font-medium">{edu.institution}</p>
                  <div className="flex items-center justify-center space-x-2 text-steel-blue text-sm mt-1">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Date Range */}
                <div className="flex items-center justify-center space-x-2 text-steel-blue text-sm mb-4">
                  <Calendar size={14} />
                  <span>{edu.startDate} - {edu.endDate}</span>
                </div>

                {/* Grade */}
                {edu.grade && edu.grade !== 'Not specified' && (
                  <div className="flex items-center justify-center space-x-2 text-gold font-medium mb-4">
                    <Star size={16} />
                    <span>Grade: {edu.grade}</span>
                  </div>
                )}

                {/* Thesis Information */}
                {edu.thesis && (
                  <div className="mb-4">
                    <button
                      onClick={() => toggleExpanded(edu.id)}
                      className="text-navy hover:text-emerald font-medium text-sm transition-colors duration-200 flex items-center justify-center space-x-1"
                    >
                      <FileText size={14} />
                      <span>{expandedItem === edu.id ? 'Hide Thesis' : 'View Thesis'}</span>
                    </button>
                  </div>
                )}

                {/* Expandable Thesis Details */}
                {edu.thesis && (
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedItem === edu.id ? 'auto' : 0,
                      opacity: expandedItem === edu.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 p-4 bg-sage rounded-lg">
                      <h4 className="text-sm font-semibold text-navy mb-2 flex items-center">
                        <Award className="text-emerald mr-2" size={14} />
                        Thesis Title
                      </h4>
                      <p className="text-sm text-charcoal leading-relaxed">
                        {edu.thesis}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Special Highlights */}
                {edu.degree.toLowerCase().includes('phd') && (
                  <div className="mt-4 p-3 bg-gradient-to-r from-gold/10 to-emerald/10 rounded-lg">
                    <p className="text-sm text-charcoal text-center">
                      <strong className="text-gold">Outstanding Performance:</strong> 
                      <br />
                      Completed with exceptional academic record
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-navy mb-6 text-center">
              Academic Excellence
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gold to-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-semibold text-navy mb-2">
                  PhD Excellence
                </h4>
                <p className="text-steel-blue">
                  Outstanding academic performance with 4.46/4.50 GPA
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald to-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-semibold text-navy mb-2">
                  Research Focus
                </h4>
                <p className="text-steel-blue">
                  Specialized in plasma physics and sustainable chemistry
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-navy to-coral rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-semibold text-navy mb-2">
                  International Education
                </h4>
                <p className="text-steel-blue">
                  Studied at prestigious institutions in Nepal and South Korea
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 