'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'InkSight',
      description: 'Psychological Testing Web Application.',
      image: '/Rorschach_blot_01.jpg',
      tech: ['FastApi', 'Next.js', 'MongoDB', 'Firebase', 'Artificial intelligence',],
      github: 'https://github.com/Vineet-Sharma1927/InkSight',
      demo: 'https://ink-sight.vercel.app/'
    },
    {
      id: 2,
      title: 'Prakriti App',
      description: "Developed an interactive Ayurvedic wellness application that determines a user's Prakriti",
      image: '/prokriti.webp',
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'Framer Motion'],
      github: 'https://github.com/Vineet-Sharma1927/Prakriti-App',
      demo: 'https://prakriti-app.vercel.app/'
    },
    {
      id: 3,
      title: 'Blog-Sphere',
      description: 'A comprehensive blogging platform with advanced user authentication, content management, and commenting systems.',
      image: '/blog.jpeg',
      tech: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Cloudinary'],
      github: 'https://github.com/Vineet-Sharma1927/Blog-Sphere-App',
      demo: 'https://blog-sphere-app-lake.vercel.app/'
    },
    {
      id: 4,
      title: 'Swiggy-Clone-App',
      description: 'A responsive Swiggy clone application with real-time restaurant data, ratings, and optimized performance.',
      image: '/swiggy.png',
      tech: ['React', 'JavaScript', 'Swiggy API', 'Vercel'],
      github: 'https://github.com/Vineet-Sharma1927/SwiggyClone-App',
      demo: 'https://swiggy-clone-app-orpin.vercel.app/'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
            <div className="h-1 w-20 bg-indigo-600 mx-auto"></div>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and expertise
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal 
              key={project.id} 
              direction={index % 2 === 0 ? 'left' : 'right'} 
              delay={index * 0.1}
            >
              <motion.div 
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="h-48 bg-gray-300 dark:bg-gray-700 relative overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-indigo-600 opacity-80 flex items-center justify-center text-white text-xl font-bold"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 0.9 }}
                  >
                    {project.title}
                  </motion.div>
                  {/* Replace with your actual project images */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  
                  {project.id === 1 && (
                    <ul className="list-disc pl-5 mb-6 text-gray-600 dark:text-gray-400">
                      <li className="mb-1">Built and deployed a full-stack AI-integrated psychological testing platform that reduced manual data entry workload by 60% through intelligent automation.</li>
                      <li className="mb-1">Developed a highly interactive Next.js + Tailwind CSS + Framer Motion frontend, achieving 100% mobile responsiveness and streamlining clinician workflows with a 40% faster data entry rate.</li>
                      <li className="mb-1">Engineered a FastAPI + MongoDB backend with an LLM-powered NLP pipeline that analyzed patient responses and auto-populated multiple form fields with high accuracy..</li>
                      <li>Designed a scalable MongoDB schema with advanced indexing and implemented secure authentication & role-based access controls, supporting 1,000+ patient sessions while ensuring HIPAA-level compliance.</li>
                    </ul>
                  )}
                  {project.id === 2 && (
                    <ul className="list-disc pl-5 mb-6 text-gray-600 dark:text-gray-400">
                      <li className="mb-1">Implemented secure user authentication system supporting both email verification and Google Firebase, resulting in a 99.9% reduction in spam accounts and achieving a 40% increase in user signups.</li>
                      <li className="mb-1">Engineered a robust content management system with CRUD operations and real-time content editing, leading to a 65% improvement in content publishing workflow efficiency.</li>
                      <li className="mb-1">Developed an advanced nested commenting system with moderation capabilities, resulting in 3x higher user engagement.</li>
                      <li>Integrated Cloudinary for image optimization and storage, reducing image load times by 60% and implementing role-based access control.</li>
                    </ul>
                  )}
                  
                  {project.id === 4 && (
                    <ul className="list-disc pl-5 mb-6 text-gray-600 dark:text-gray-400">
                      <li className="mb-1">Engineered a responsive Swiggy clone app using React.js, integrating real-time data from Swiggy API for 100+ restaurants.</li>
                      <li className="mb-1">Implemented dynamic restaurant cards with ratings, resulting in a 30% improvement in user engagement.</li>
                      <li>Optimized app performance, achieving a 25% reduction in load time for seamless user experience.</li>
                    </ul>
                  )}
                  {project.id === 3 && (
                    <ul className="list-disc pl-5 mb-6 text-gray-600 dark:text-gray-400">
                      <li className="mb-1">Designed and developed a modular Ayurvedic wellness web application to assess an individual&apos;s Prakriti (Vata, Pitta, or Kapha) based on a multiple-choice lifestyle questionnaire.</li>
                      <li className="mb-1">Implemented a custom dynamic form that collects user responses and determines the dominant dosha using majority logic..</li>
                      <li className="mb-1">Displayed personalized results including recommended foods, exercises, and lifestyle tips tailored to the user&apos;s Prakriti.</li>
                      <li className="mb-1">Integrated Framer Motion for smooth animations and page transitions to enhance user interaction and engagement.</li>
                      <li className="mb-1">Organized codebase with a scalable component-based architecture for maintainability and future feature expansion.</li>
                    </ul>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                      <motion.span 
                        key={index}
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full"
                        whileHover={{ 
                          backgroundColor: '#818cf8', 
                          color: '#ffffff',
                          transition: { duration: 0.2 }
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-md hover:bg-black dark:hover:bg-gray-600 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      GitHub
                    </motion.a>
                    <motion.a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
} 