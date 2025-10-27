'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, Star, Trophy } from 'lucide-react';
import { awards } from '@/data/portfolio';

export default function Awards() {
  const sortedAwards = [...awards].sort((a, b) => b.year - a.year);

  return (
    <section id="awards" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Awards & Recognition
          </h2>
          <p className="text-lg text-steel-blue max-w-2xl mx-auto">
            Recognition for research excellence and academic achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-emerald to-navy transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {sortedAwards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-white border-4 border-gold rounded-full transform md:-translate-x-1/2 z-10 flex items-center justify-center">
                  <Star className="text-gold" size={12} />
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="card p-6 hover:shadow-xl transition-all duration-300">
                    {/* Award Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Trophy className="text-gold" size={20} />
                          <h3 className="text-xl font-semibold text-navy">
                            {award.title}
                          </h3>
                        </div>
                        <p className="text-emerald font-medium mb-2">
                          {award.organization}
                        </p>
                        <div className="flex items-center space-x-2 text-steel-blue text-sm">
                          <Calendar size={14} />
                          <span>{award.year}</span>
                        </div>
                      </div>
                    </div>

                    {/* Award Description */}
                    <p className="text-charcoal mb-4 leading-relaxed">
                      {award.description}
                    </p>

                    {/* Significance */}
                    <div className="bg-gradient-to-r from-gold/10 to-emerald/10 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-navy mb-2 flex items-center">
                        <Award className="text-gold mr-2" size={14} />
                        Significance
                      </h4>
                      <p className="text-sm text-charcoal leading-relaxed">
                        {award.significance}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-gold to-emerald rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Recognition Highlights
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  International Recognition
                </h4>
                <p className="text-sm opacity-90">
                  Multiple awards from Korean Vacuum Society and international workshops
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  Research Excellence
                </h4>
                <p className="text-sm opacity-90">
                  Consistent recognition for outstanding research presentations and contributions
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  Academic Support
                </h4>
                <p className="text-sm opacity-90">
                  Research funding support from University Grants Commission
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievement Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-navy mb-6 text-center">
              Achievement Statistics
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">4</div>
                <div className="text-steel-blue">Total Awards</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald mb-2">2</div>
                <div className="text-steel-blue">Best Poster Awards</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-navy mb-2">1</div>
                <div className="text-steel-blue">Best Presentation Award</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-coral mb-2">1</div>
                <div className="text-steel-blue">Research Support Grant</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 