'use client';
import React from 'react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className="h-1 w-20 bg-indigo-600 mx-auto"></div>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal direction="left" delay={0.1}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Who I Am</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Results-driven Full Stack Web Developer with hands-on experience in modern JavaScript
                frameworks and a strong foundation in the MERN (MongoDB, Express.js, React.js,
                Node.js) technology stack. Proficient in TypeScript and Tailwind CSS, combining technical
                expertise with a passion for creating responsive, user-centric web applications.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Demonstrated ability to transform concepts into fully functional applications through
                multiple successful projects. Committed to writing clean, maintainable code and staying
                current with industry best practices.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8">Achievements</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                {[
                  "Engineered a robust content management system with CRUD operations, leading to a 65% improvement in workflow efficiency",
                  "Implemented secure authentication systems with a 99.9% reduction in spam accounts",
                  "Created responsive web applications with 25% faster load times",
                  "Developed interactive UI components resulting in 30% higher user engagement"
                ].map((achievement, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">My Skills</h3>
              
              <div className="space-y-4">
                {[
                  { name: "JavaScript", level: 95 },
                  { name: "React", level: 90 },
                  { name: "Next.js", level: 85 },
                  { name: "Node.js", level: 80 },
                  { name: "MongoDB", level: 75 },
                  { name: "TypeScript", level: 85 },
                  { name: "Tailwind CSS", level: 90 }
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-lg font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <motion.div
                        className="bg-indigo-600 h-2.5 rounded-full dark:bg-indigo-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.5, delay: 0.1 + index * 0.05, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
} 