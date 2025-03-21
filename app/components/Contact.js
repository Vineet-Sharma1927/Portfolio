'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage({
        type: 'success',
        text: 'Thank you for your message! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
    
    // In a real implementation, you would send the form data to an API endpoint
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    //   });
    //   const data = await response.json();
    //   setSubmitMessage({
    //     type: response.ok ? 'success' : 'error',
    //     text: response.ok ? 'Thank you for your message!' : data.message
    //   });
    //   if (response.ok) setFormData({ name: '', email: '', message: '' });
    // } catch (error) {
    //   setSubmitMessage({
    //     type: 'error',
    //     text: 'Failed to send message. Please try again.'
    //   });
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Vineet-Sharma1927/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vineet-sharma-904332291/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'vineet11vinu@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.05, duration: 0.3 }
    })
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
            <div className="h-1 w-20 bg-indigo-600 mx-auto"></div>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollReveal direction="left" delay={0.1}>
            <motion.div 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md"
              whileHover={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  variants={fadeInUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={0}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-gray-700 dark:text-white"
                    placeholder="Enter your name"
                  />
                </motion.div>
                
                <motion.div
                  variants={fadeInUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={1}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-gray-700 dark:text-white"
                    placeholder="Enter your email"
                  />
                </motion.div>
                
                <motion.div
                  variants={fadeInUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={2}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-gray-700 dark:text-white"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                  variants={fadeInUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={3}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
                
                {submitMessage.text && (
                  <motion.div 
                    className={`mt-4 p-3 rounded ${submitMessage.type === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-300'}`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {submitMessage.text}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.1}>
            <motion.div 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md flex flex-col justify-between"
              whileHover={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect With Me</h3>
                
                <motion.p 
                  className="text-gray-600 dark:text-gray-400 mb-8"
                  variants={fadeInUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={0}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  I&apos;m currently open to freelance opportunities, collaborations, and interesting projects. 
                  Feel free to reach out through any of the platforms below.
                </motion.p>
                
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom={1}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/50 rounded-full">
                      <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                      <a href="mailto:vineet11vinu@gmail.com" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                        vineet11vinu@gmail.com
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom={2}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/50 rounded-full">
                      <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Location</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Gurugram, India
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <motion.div 
                className="mt-8"
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                custom={3}
                viewport={{ once: true, margin: "-50px" }}
              >
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Find me on social media:
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                      aria-label={link.name}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
} 