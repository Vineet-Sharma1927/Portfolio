'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Digital Twin for Sarcopenia Risk Forecasting',
      description: 'Engineered a machine learning Digital Twin model utilizing NHANES dataset cycles to forecast Sarcopenia risk.',
      tech: ['Python', 'Machine Learning', 'Bayesian Modeling'],
      link: 'https://github.com/Vineet-Sharma1927/Sarcopenia',
      linkLabel: 'View on GitHub',
      details: [
        'Developed a blood-based Muscle Quality Proxy to surface measurable clinical signals from complex health data.',
        'Implemented Bayesian methodology with NUTS samplers to capture muscle decay curves and support probabilistic forecasting.'
      ]
    },
    {
      id: 2,
      title: 'InkSight - NLP-Driven Psychological Testing Platform',
      description: 'Built a decoupled architecture with a scalable MongoDB schema for clinical text processing and form mapping.',
      tech: ['FastAPI', 'Next.js', 'MongoDB', 'NLP'],
      link: 'https://ink-sight.vercel.app/',
      linkLabel: 'View Live Deployment',
      details: [
        'Designed a MongoDB schema with compound indexing for 100+ rule sets and sub-100ms query latency.',
        'Built a custom NLP pipeline to parse unstructured patient text and map it into structured clinical schemas.'
      ]
    },
    {
      id: 3,
      title: 'Satya-Check: Multilingual Fake News Detection',
      description: 'Fine-tuned a transformer-based verification stack for multilingual misinformation detection and source validation.',
      tech: ['Python', 'PyTorch', 'Flask', 'Transformers'],
      link: 'https://github.com/Vineet-Sharma1927/Satya-Check',
      linkLabel: 'View on GitHub',
      details: [
        'Fine-tuned Google\'s MuRIL transformer via PyTorch on a native Hindi dataset, reaching 99.7% accuracy.',
        'Architected a Dual-Brain verification backend that dynamically cross-referenced AI predictions through the Google Custom Search API.'
      ]
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Selected deployments</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-950 mb-4">My Projects</h2>
            <div className="h-1 w-20 bg-slate-950 mx-auto"></div>
            <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
              Three high-level deployments that show how I turn applied research, backend architecture, and product delivery into measurable technical systems.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal 
              key={project.id} 
              direction={index % 2 === 0 ? 'left' : 'right'} 
              delay={index * 0.1}
            >
              <motion.div 
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Project {project.id}</p>
                    <h3 className="mt-3 text-2xl font-bold text-slate-950">{project.title}</h3>
                    <p className="mt-4 text-slate-700 leading-7">{project.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span 
                          key={techIndex}
                          className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                          whileHover={{ backgroundColor: '#dbeafe', color: '#1e3a8a' }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {project.linkLabel}
                    </motion.a>
                  </div>

                  <ul className="space-y-3 rounded-3xl bg-slate-50 p-6 text-slate-700">
                    {project.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex gap-3 leading-7">
                        <span className="mt-2 h-2 w-2 rounded-full bg-slate-950 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
} 