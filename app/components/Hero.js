'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const handleDownloadResume = () => {
    // In a real implementation, this would link to an actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-16 pb-16 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="w-full md:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              <motion.span 
                className="block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Hi, I'm
              </motion.span>
              <motion.span 
                className="block text-indigo-600 dark:text-indigo-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                Vineet Sharma
              </motion.span>
            </h1>
            <motion.h2 
              className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              Full Stack Web Developer
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              Results-driven Full Stack Web Developer with hands-on experience in modern JavaScript
              frameworks and a strong foundation in the MERN (MongoDB, Express.js, React.js,
              Node.js) technology stack. Proficient in TypeScript and Tailwind CSS, combining technical
              expertise with a passion for creating responsive, user-centric web applications.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <motion.button
                onClick={handleDownloadResume}
                className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-md"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Download Resume
              </motion.button>
              <motion.button
                onClick={scrollToContact}
                className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 transition-colors shadow-md dark:bg-gray-800 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-gray-700"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl ring-4 ring-indigo-600 dark:ring-indigo-400"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* Replace with your own image */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                <span><img src="/Vineetimg.jpeg" alt="Vineet Sharma" /></span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 