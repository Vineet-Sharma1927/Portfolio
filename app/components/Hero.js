'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.1),_transparent_40%),linear-gradient(180deg,_#f8fafc_0%,_#eef4ff_48%,_#ffffff_100%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.p
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Vineet Sharma
            </motion.p>
            <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-950">
              <motion.span 
                className="block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Full Stack Developer &amp; Applied Mathematics Undergraduate
              </motion.span>
            </h1>
            <motion.h2 
              className="max-w-3xl text-2xl md:text-3xl font-medium text-slate-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              Building scalable architectures and enterprise B2B solutions.
            </motion.h2>
            <motion.p 
              className="max-w-3xl text-lg leading-8 text-slate-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              I am a Full Stack Developer and Applied Mathematics undergraduate specializing in building AI-driven HealthTech applications, optimizing complex data workflows, and developing scalable backend architectures for medical diagnostics. I have production experience with Next.js, FastAPI, and clinical forecasting models, and I currently build enterprise solutions for B2B hospital clients.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <motion.a
                href="/Vineet_Sharma_Resume.pdf"
                download
                className="px-6 py-3 rounded-md border border-slate-300 bg-white text-slate-800 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Download Resume
              </motion.a>
              <motion.button
                onClick={() => scrollToSection('experience')}
                className="px-6 py-3 rounded-md bg-slate-950 text-white shadow-lg shadow-slate-950/20 transition-colors hover:bg-slate-800"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Experience
              </motion.button>
              <motion.button
                onClick={scrollToContact}
                className="px-6 py-3 rounded-md border border-slate-300 bg-white text-slate-800 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 rounded-md border border-blue-200 bg-blue-50 text-blue-900 shadow-sm transition-colors hover:bg-blue-100"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Recent Deployments
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div 
              className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/70 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.3),_transparent_42%),linear-gradient(180deg,_rgba(15,23,42,1)_0%,_rgba(15,23,42,0.95)_100%)]" />
              <div className="relative space-y-6">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20 shadow-xl">
                  <Image
                    src="/Vineet%20img.jpeg"
                    alt="Vineet Sharma"
                    width={640}
                    height={760}
                    className="h-[460px] w-full object-cover object-top"
                    priority
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ['Production', 'Next.js, FastAPI, clinical forecasting'],
                    ['Clients', 'B2B hospital workflows and data systems'],
                    ['Focus', 'Scalable backend architecture'],
                    ['Value', 'Automation, masking, reliability']
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-100">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 