'use client';
import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">About Me</h2>
            <div className="h-1 w-20 bg-slate-950 mx-auto"></div>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <ScrollReveal direction="left" delay={0.1}>
            <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-950">Who I Am</h3>
              <p className="text-lg leading-8 text-slate-700">
                I am a Full Stack Developer and Applied Mathematics undergraduate specializing in building AI-driven HealthTech applications, optimizing complex data workflows, and developing scalable backend architectures for medical diagnostics. I have production experience with Next.js, FastAPI, and clinical forecasting models, and I currently build enterprise solutions for B2B hospital clients.
              </p>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-900">Achievement Highlight</p>
                <p className="mt-3 text-slate-800">
                  EY Techathon 6.0 Participant: Engineered an OCR-driven legal aid platform to digitize, parse, and structure handwritten legal documents using Tesseract OCR.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-950">Positioning</h3>
              <div className="mt-6 space-y-4 text-slate-700">
                <div className="rounded-2xl bg-slate-50 p-4">
                  Enterprise-focused delivery for hospital and diagnostics workflows.
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  Technical depth across AI, backend systems, and data-driven product development.
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  Strong alignment between business requirements, compliance-sensitive data handling, and implementation detail.
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
} 