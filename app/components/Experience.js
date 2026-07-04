'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function Experience() {
  const responsibilities = [
    'Spearheaded the end-to-end development of a comprehensive HealthTech web platform, engineering core modules for medical equipment renting and automated patient appointment scheduling.',
    'Developed and deployed custom SaaS features for enterprise B2B healthcare providers, including Fortis and Muskan Hospital, translating clinical requirements into technical deliverables.',
    'Architected a scalable testing priority system for dynamic hospital workflows and implemented strict data masking protocols for sensitive patient data.'
  ];

  return (
    <section id="experience" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Professional Track Record</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Experience</h2>
            <div className="h-1 w-20 bg-blue-400 mx-auto mt-4"></div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Full Stack Developer</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Igoko Avionics Solutions Private Limited</h3>
                <p className="mt-2 text-slate-300">July 2026 – Present</p>
              </div>

              <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 px-4 py-3 text-sm text-blue-100">
                Enterprise B2B HealthTech delivery across scheduling, equipment renting, and patient workflow automation.
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              {responsibilities.map((item, index) => (
                <motion.div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-slate-200"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.06 }}
                  viewport={{ once: true, margin: '-50px' }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}