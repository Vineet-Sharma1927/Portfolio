'use client';
import React from 'react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3/SCSS', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Redux', level: 85 },
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'GraphQL', level: 70 },
      ]
    },
    {
      category: 'Tools & Others',
      items: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Webpack', level: 75 },
        { name: 'Docker', level: 65 },
        { name: 'Jest', level: 75 },
        { name: 'Responsive Design', level: 90 },
        { name: 'Progressive Web Apps', level: 80 },
      ]
    }
  ];

  const competencies = [
    'Responsive Web Design',
    'Progressive Web Apps',
    'Cross-Browser Compatibility',
    'Performance Optimization',
    'RESTful APIs',
    'Database Design',
    'Authentication & Authorization',
    'State Management',
    'Test-Driven Development',
    'UI/UX Implementation',
    'Version Control',
    'Agile Methodology',
    'Code Reviews',
    'Technical Documentation',
    'SEO Optimization'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
            <div className="h-1 w-20 bg-indigo-600 mx-auto"></div>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Technologies and tools I work with
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <ScrollReveal 
              key={groupIndex} 
              direction={groupIndex === 0 ? 'left' : groupIndex === 1 ? 'up' : 'right'} 
              delay={groupIndex * 0.1}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center border-b pb-2 border-gray-200 dark:border-gray-700">
                  {skillGroup.category}
                </h3>
                <div className="space-y-4">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.2, delay: skillIndex * 0.05 }}
                      viewport={{ once: true, margin: "-50px" }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-md font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <motion.div
                          className="bg-indigo-600 h-2 rounded-full transition-all duration-300 ease-in-out"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.5, delay: 0.05 * skillIndex, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-50px" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2} direction="up">
          <div className="mt-16 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Key Technical Competencies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {competencies.map((competency, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-center shadow hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(0.3, index * 0.02) }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ 
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    color: '#6366f1',
                    transition: { duration: 0.2 }
                  }}
                >
                  <span className="text-gray-800 dark:text-gray-200 text-sm">{competency}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
} 