'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Languages, Award, FileText, Users, Clock, Target } from 'lucide-react';
import { personalInfo, stats } from '@/data/portfolio';

export default function About() {
  const statItems = [
    {
      icon: FileText,
      value: stats.publications,
      label: 'Publications',
      color: 'text-navy'
    },
    {
      icon: Users,
      value: stats.citations,
      label: 'Citations',
      color: 'text-emerald'
    },
    {
      icon: Clock,
      value: stats.yearsExperience,
      label: 'Years Experience',
      color: 'text-gold'
    },
    {
      icon: Target,
      value: stats.researchAreas,
      label: 'Research Areas',
      color: 'text-coral'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            About Me
          </h2>
          <p className="text-lg text-steel-blue max-w-2xl mx-auto">
            Dedicated researcher specializing in sustainable chemistry and plasma physics
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio and Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Bio */}
            <div>
              <h3 className="text-2xl font-semibold text-navy mb-4">
                Professional Summary
              </h3>
              <p className="text-charcoal leading-relaxed text-lg">
                {personalInfo.bio}
              </p>
            </div>

            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-navy mb-4">
                Personal Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-emerald w-5 h-5" />
                  <span className="text-charcoal">
                    <strong>Date of Birth:</strong> {personalInfo.dateOfBirth}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-emerald w-5 h-5" />
                  <span className="text-charcoal">
                    <strong>Nationality:</strong> {personalInfo.nationality}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-emerald w-5 h-5" />
                  <span className="text-charcoal">
                    <strong>Current Location:</strong> {personalInfo.location}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Languages className="text-emerald w-5 h-5" />
                  <span className="text-charcoal">
                    <strong>Languages:</strong> {personalInfo.languages.join(', ')}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Statistics Grid */}
            <div>
              <h3 className="text-2xl font-semibold text-navy mb-6">
                Research Impact
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {statItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card text-center p-6"
                  >
                    <div className={`${item.color} mb-3 flex justify-center`}>
                      <item.icon size={32} />
                    </div>
                    <div className="text-3xl font-bold text-navy mb-2">
                      {item.value}+
                    </div>
                    <div className="text-steel-blue font-medium">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-navy mb-4 flex items-center">
                <Award className="text-gold mr-2" />
                Key Achievements
              </h3>
              <ul className="space-y-3 text-charcoal">
                <li className="flex items-start space-x-2">
                  <span className="text-emerald font-bold">•</span>
                  <span>Completed PhD with outstanding academic performance (4.46/4.50)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald font-bold">•</span>
                  <span>Published 40+ research papers in high-impact journals</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald font-bold">•</span>
                  <span>Received multiple international awards for research excellence</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald font-bold">•</span>
                  <span>Established international research collaborations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald font-bold">•</span>
                  <span>Leading research in sustainable chemistry at University of Nottingham</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 