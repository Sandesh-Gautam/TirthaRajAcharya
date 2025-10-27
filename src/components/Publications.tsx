'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, Filter, ExternalLink, Quote, Calendar, Users, TrendingUp } from 'lucide-react';
import { publications } from '@/data/portfolio';

export default function Publications() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'year' | 'citations' | 'impactFactor'>('year');

  const categories = ['all', ...Array.from(new Set(publications.map(pub => pub.category)))];

  const filteredPublications = publications
    .filter(pub => {
      const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
                           pub.journal.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || pub.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'year':
          return b.year - a.year;
        case 'citations':
          return (b.citations || 0) - (a.citations || 0);
        case 'impactFactor':
          return (b.impactFactor || 0) - (a.impactFactor || 0);
        default:
          return 0;
      }
    });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'first-author': return 'bg-emerald/10 text-emerald';
      case 'co-author': return 'bg-navy/10 text-navy';
      case 'submitted': return 'bg-gold/10 text-gold';
      case 'in-preparation': return 'bg-coral/10 text-coral';
      default: return 'bg-steel-blue/10 text-steel-blue';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'first-author': return 'First Author';
      case 'co-author': return 'Co-Author';
      case 'submitted': return 'Submitted';
      case 'in-preparation': return 'In Preparation';
      default: return category;
    }
  };

  return (
    <section id="publications" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Publications
          </h2>
          <p className="text-lg text-steel-blue max-w-2xl mx-auto">
            Research contributions and scholarly publications in high-impact journals
          </p>
        </motion.div>

        {/* Publications Grid */}
        <div className="space-y-6">
          {filteredPublications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                {/* Main Content */}
                <div className="flex-1">
                  {/* Title and Category */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-navy leading-tight">
                      {pub.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ml-4 flex-shrink-0 ${getCategoryColor(pub.category)}`}>
                      {getCategoryLabel(pub.category)}
                    </span>
                  </div>

                  {/* Authors */}
                  <p className="text-steel-blue mb-3">
                    <Users size={16} className="inline mr-2" />
                    {pub.authors.join(', ')}
                  </p>

                  {/* Journal and Year */}
                  <div className="flex items-center space-x-4 text-sm text-charcoal mb-3">
                    <span className="font-medium text-emerald">{pub.journal}</span>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{pub.year}</span>
                    </div>
                    {pub.volume && (
                      <span>Vol. {pub.volume}</span>
                    )}
                    {pub.pages && (
                      <span>pp. {pub.pages}</span>
                    )}
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-4 text-sm">
                    {pub.impactFactor && (
                      <div className="flex items-center space-x-1 text-gold">
                        <TrendingUp size={14} />
                        <span>IF: {pub.impactFactor}</span>
                      </div>
                    )}
                    {pub.citations && (
                      <div className="flex items-center space-x-1 text-emerald">
                        <Quote size={14} />
                        <span>{pub.citations} citations</span>
                      </div>
                    )}
                  </div>

                  {/* Abstract */}
                  {pub.abstract && (
                    <p className="text-charcoal mt-3 text-sm leading-relaxed">
                      {pub.abstract}
                    </p>
                  )}

                  {/* Keywords */}
                  {pub.keywords && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {pub.keywords.map((keyword, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-light-blue text-navy text-xs rounded-full"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* DOI Link */}
                {pub.doi && (
                  <div className="lg:flex-shrink-0">
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-navy hover:text-emerald transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">View Paper</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Publication Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-navy to-emerald rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Publication Impact
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">40+</div>
                <div className="text-sm opacity-90">Total Publications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Total Citations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm opacity-90">First Author Papers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">72.1</div>
                <div className="text-sm opacity-90">Highest Impact Factor</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scholarly Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-light-blue/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-navy mb-6 text-center">
              Scholarly Profiles
            </h3>
            <p className="text-center text-steel-blue mb-6">
              Connect with my research on leading academic platforms
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="https://www.scopus.com/authid/detail.uri?authorId=57381653900"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center">
                    <ExternalLink className="text-emerald" size={24} />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-navy group-hover:text-emerald transition-colors">
                      Scopus
                    </div>
                    <div className="text-sm text-charcoal">Author Profile</div>
                  </div>
                </div>
                <ExternalLink size={18} className="text-steel-blue group-hover:text-emerald transition-colors" />
              </a>

              <a
                href="https://www.researchgate.net/profile/Tirtha-Acharya?ev=hdr_xprf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center">
                    <ExternalLink className="text-navy" size={24} />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-navy group-hover:text-navy transition-colors">
                      ResearchGate
                    </div>
                    <div className="text-sm text-charcoal">Research Profile</div>
                  </div>
                </div>
                <ExternalLink size={18} className="text-steel-blue group-hover:text-navy transition-colors" />
              </a>

              <a
                href="https://www.webofscience.com/wos/author/record/JFA-8452-2023"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                    <ExternalLink className="text-gold" size={24} />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-navy group-hover:text-gold transition-colors">
                      Web of Science
                    </div>
                    <div className="text-sm text-charcoal">Researcher Profile</div>
                  </div>
                </div>
                <ExternalLink size={18} className="text-steel-blue group-hover:text-gold transition-colors" />
              </a>

              <a
                href="https://scholar.google.com/citations?user=WH6IAp8AAAAJ&hl=en&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center">
                    <ExternalLink className="text-coral" size={24} />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-navy group-hover:text-coral transition-colors">
                      Google Scholar
                    </div>
                    <div className="text-sm text-charcoal">Academic Profile</div>
                  </div>
                </div>
                <ExternalLink size={18} className="text-steel-blue group-hover:text-coral transition-colors" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 