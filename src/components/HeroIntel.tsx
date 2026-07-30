import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  LogoVisual, 
  RegulatoryVisual, 
  SystemsVisual, 
  MapVisual 
} from './HeroIntelVisual';

const slides = [
  {
    tag: '01 — PROVEN IMPACT ACROSS EAST AFRICA',
    title: 'Creative Intelligence for Regulated Markets',
    description:
      'Measurable results in regulatory development, systems & operations, brand management, creative operations, trade development, and people improvement across Kenya and East Africa.',
    visual: <LogoVisual />,
  },
  {
    tag: '02 — REGULATORY SUPPORT & LTR',
    title: 'Seamless Compliance & Authorization',
    description:
      'End-to-end guidance navigating local health authorities, product registration dossiers, Local Technical Representation, and ongoing compliance.',
    visual: <RegulatoryVisual />,
  },
  {
    tag: '03 — SYSTEMS & OPERATIONS',
    title: 'Tailored Digital Operations for Healthcare',
    description:
      'Workflow optimization, pharmacy benefit management integrations, custom software infrastructure, and automated reporting systems.',
    visual: <SystemsVisual />,
  },
  {
    tag: '04 — TRADE & REGIONAL COVERAGE',
    title: 'Unlocking Growth in 5 East African Nations',
    description:
      'Market expansion strategies, local trade representation, supply chain coordination, and partner network management across Kenya, Uganda, Tanzania, Rwanda, and Ethiopia.',
    visual: <MapVisual />,
  },
];

export default function HeroIntel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const active = slides[currentSlide];

  return (
    <section className="relative w-full min-h-screen bg-transparent pt-12 pb-20 overflow-hidden">
      <div className="section-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
              JMRC.INTEL
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight font-medium leading-[1.1] text-slate-900">
              Creative Intelligence{' '}
              <span className="bg-gradient-to-r from-purple-600 via-sky-500 to-teal-500 bg-clip-text text-transparent">
                for Regulated Markets
              </span>
            </h1>

            <span className="inline-block text-xs font-bold tracking-widest text-teal-600 uppercase">
              {active.tag}
            </span>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              {active.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-medium text-sm transition-all shadow-sm hover:shadow"
              >
                Get In Touch <ArrowRight size={16} />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-300/80 bg-white/40 hover:bg-white/70 backdrop-blur-sm text-slate-800 font-medium text-sm transition-all"
              >
                Explore Our Services
              </a>
            </div>

            {/* Carousel Navigation */}
            <div className="flex items-center gap-6 pt-6 border-t border-slate-200/50">
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full border border-slate-300/60 bg-white/40 hover:bg-white/80 transition-colors text-slate-700"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full border border-slate-300/60 bg-white/40 hover:bg-white/80 transition-colors text-slate-700"
                  aria-label="Next Slide"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Progress Indicators */}
              <div className="flex items-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === idx
                        ? 'w-8 bg-teal-500'
                        : 'w-2 bg-slate-300/80'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <span className="text-xs font-mono text-slate-500 ml-auto">
                0{currentSlide + 1} / 0{slides.length}
              </span>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-200/60 bg-white/30 backdrop-blur-xl p-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/40 text-xs text-slate-500 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-sans font-medium text-slate-600">
                    JMRC.intel — {active.title}
                  </span>
                </div>
                <span className="flex items-center gap-1 text-emerald-600 font-sans font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </span>
              </div>

              {/* Slide Visual Content */}
              {active.visual}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}