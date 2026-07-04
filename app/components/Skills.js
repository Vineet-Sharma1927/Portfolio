'use client';
import React from 'react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillGroups = [
    {
      category: 'Languages',
      items: [
        'Python',
        'JavaScript (ES6+)',
        'TypeScript',
        'SQL',
      ]
    },
    {
      category: 'Backend',
      items: [
        'FastAPI',
        'Node.js',
        'Express.js',
        'RESTful APIs',
      ]
    },
    {
      category: 'Frontend',
      items: [
        'React.js',
        'Next.js',
        'Redux Toolkit',
        'Tailwind CSS',
      ]
    },
    {
      category: 'Databases & Tools',
      items: [
        'MongoDB (Aggregation/Indexing)',
        'Git/GitHub',
        'Postman',
      ]
    },
    {
      category: 'DevOps & Cloud',
      items: [
        'Docker',
        'AWS (EC2)',
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Single source of truth</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-950 mb-4">Technical Skills</h2>
            <div className="h-1 w-20 bg-slate-950 mx-auto"></div>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Consolidated technical capabilities aligned to enterprise delivery, backend systems, and modern product development.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((skillGroup, groupIndex) => (
            <ScrollReveal 
              key={groupIndex} 
              direction={groupIndex % 2 === 0 ? 'left' : 'right'} 
              delay={groupIndex * 0.1}
            >
              <motion.div
                className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm hover:shadow-lg transition-shadow"
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <h3 className="text-xl font-bold text-slate-950 mb-6 text-center border-b pb-2 border-slate-200">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex}
                      className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm border border-slate-200"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: skillIndex * 0.03 }}
                      viewport={{ once: true, margin: "-50px" }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
} 