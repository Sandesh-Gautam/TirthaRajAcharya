'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, MapPin, Building, Award, CheckCircle } from 'lucide-react';
import { experience } from '@/data/portfolio';

export default function Experience() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-steel-blue max-w-2xl mx-auto">
            A timeline of my academic and research journey
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-navy via-emerald to-gold transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-navy rounded-full transform md:-translate-x-1/2 z-10 ${
                  exp.current ? 'border-emerald' : 'border-navy'
                }`}>
                  {exp.current && (
                    <div className="absolute inset-0 bg-emerald rounded-full animate-pulse"></div>
                  )}
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="card p-6 hover:shadow-xl transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-navy mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-emerald mb-2">
                          <Building size={16} />
                          <span className="font-medium">{exp.organization}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-steel-blue text-sm">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 bg-emerald/10 text-emerald text-sm font-medium rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Date Range */}
                    <div className="flex items-center space-x-2 text-steel-blue text-sm mb-4">
                      <Calendar size={14} />
                      <span>{exp.startDate} - {exp.endDate}</span>
                    </div>

                    {/* Description */}
                    <p className="text-charcoal mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Expandable Details */}
                    <button
                      onClick={() => toggleExpanded(exp.id)}
                      className="text-navy hover:text-emerald font-medium text-sm transition-colors duration-200"
                    >
                      {expandedItem === exp.id ? 'Show Less' : 'Show Details'}
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedItem === exp.id ? 'auto' : 0,
                        opacity: expandedItem === exp.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 space-y-4">
                        {/* Responsibilities */}
                        <div>
                          <h4 className="text-lg font-semibold text-navy mb-2 flex items-center">
                            <CheckCircle className="text-emerald mr-2" size={18} />
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-charcoal">
                                <span className="text-emerald font-bold mt-1">•</span>
                                <span>{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-lg font-semibold text-navy mb-2 flex items-center">
                            <Award className="text-gold mr-2" size={18} />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-charcoal">
                                <span className="text-gold font-bold mt-1">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-navy to-emerald rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Research Leadership
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Currently leading cutting-edge research in sustainable chemistry at the University of Nottingham's 
              GSK Carbon Neutral Laboratory, focusing on developing innovative plasma-based solutions for 
              environmental challenges and sustainable chemical processes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 