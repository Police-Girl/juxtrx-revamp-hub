import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Award, FileCheck, Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCountUp } from '@/hooks/use-count-up';
import { useInView } from '@/hooks/use-in-view';
import {
  LogoVisual,
  RegulatoryVisual,
  SystemsVisual,
  MapVisual,
} from '@/components/HeroIntelVisual';

/* ─── slide data ─────────────────────────────────────────── */
const slides = [
  {
    id: 1,
    num: '01',
    title: 'Your Implementation Partner Across East Africa',
    body: 'We help organizations navigate regulated markets through strategic planning, compliance expertise, operational systems, and implementation support.',
    Visual: LogoVisual,
    badge: null as null | { label: string; sub: string },
  },
  {
    id: 2,
    num: '02',
    title: 'Navigate Compliance With Confidence',
    body: 'Comprehensive regulatory support including Local Technical Representation, Market Authorization Hosting, Pharmacovigilance, Registration, Licensing, and Import Coordination.',
    Visual: RegulatoryVisual,
    badge: null as null | { label: string; sub: string },
  },
  {
    id: 3,
    num: '03',
    title: 'Systems Designed For Sustainable Growth',
    body: 'We develop operational systems, workflows, digital processes, and performance frameworks that help organizations scale efficiently.',
    Visual: SystemsVisual,
    badge: null as null | { label: string; sub: string },
  },
  {
    id: 4,
    num: '04',
    title: 'Regional Expertise. Local Execution.',
    body: 'Supporting organizations across Kenya and East Africa with local knowledge, regulatory expertise, and strategic implementation capabilities.',
    Visual: MapVisual,
    badge: null as null | { label: string; sub: string },
  },
];

const SLIDE_DURATION = 6500;

/* ─── trust strip ────────────────────────────────────────── */
const trustStats = [
  { icon: Award,     numeric: 10,  suffix: '+', label: 'Years in Regulated Markets' },
  { icon: FileCheck, numeric: 200, suffix: '+', label: 'Regulatory Submissions' },
  { icon: Globe,     numeric: 5,   suffix: '',  label: 'East African Markets' },
  { icon: Users,     numeric: 500, suffix: '+', label: 'Partner Organizations' },
];

function TrustStat({
  icon: Icon, numeric, suffix, label, active, delay,
}: typeof trustStats[number] & { active: boolean; delay: number }) {
  const count = useCountUp(numeric, 1400, active);
  return (
    <motion.div
      className="flex items-center gap-3"
      initial={{ opacity: 0, y: 12 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/[0.08] border border-primary/10">
        <Icon size={18} className="text-primary" strokeWidth={1.5} />
      </div>
      <div>
        <div className="text-xl font-bold text-foreground tabular-nums leading-none">
          {count}{suffix}
        </div>
        <div className="text-xs text-muted-foreground mt-0.5 leading-tight">{label}</div>
      </div>
    </motion.div>
  );
}

/* ─── main component ─────────────────────────────────────── */
export default function HeroIntel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const { ref: trustRef, inView: trustInView } = useInView();

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setProgress(0);
  }, []);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + slides.length) % slides.length),
    [],
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % slides.length),
    [],
  );

  // auto-rotation — dep array only has `paused` so the interval
  // is NOT reset on every slide change; functional updater handles the increment
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
      setProgress(0);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [paused]);

  // progress bar tick — resets when slide or paused changes
  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const tick = 50;
    const id = setInterval(
      () => setProgress((p) => Math.min(p + (tick / SLIDE_DURATION) * 100, 100)),
      tick,
    );
    return () => clearInterval(id);
  }, [current, paused]);

  // keyboard nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [prev, next]);

  const slide = slides[current];

  return (
    <section
      id="home"
      className="relative bg-gradient-subtle overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="JMRC.intel hero"
    >
      {/* dot texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(220 20% 10%) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* gradient blob */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/6 via-secondary/4 to-tertiary/6 blur-3xl" />

      <div className="section-shell">
        <div className="grid lg:grid-cols-[45fr_55fr] gap-10 lg:gap-16 items-start py-16 md:py-20 lg:py-24">

          {/* ── LEFT PANEL ── */}
          <div className="flex flex-col lg:pt-4">
            <motion.p
              className="section-label mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              JMRC.intel
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-[3.1rem] font-serif leading-[1.07] mb-2 text-foreground"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              Creative Intelligence{' '}
              <span className="text-gradient-brand">for Regulated Markets</span>
            </motion.h1>

            {/* slide-specific text — fixed height prevents layout shift */}
            <div className="min-h-[8rem] flex flex-col justify-start mt-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45 }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary mb-2">
                    {slide.num} — {slide.title}
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
                    {slide.body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 mt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" className="btn-brand px-7 h-11" asChild>
                <a href="#contact" className="flex items-center gap-2">
                  Partner With Us
                  <ArrowRight size={16} />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="btn-brand-outline px-7 h-11" asChild>
                <a href="#services">Explore Our Services</a>
              </Button>
            </motion.div>

            {/* navigation row */}
            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border/70 bg-white/80 text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border/70 bg-white/80 text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all"
              >
                <ChevronRight size={16} />
              </button>

              <div className="flex items-center gap-2 ml-1" role="tablist" aria-label="Slide indicators">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`Slide ${s.num}`}
                    onClick={() => goTo(i)}
                    className="relative flex items-center"
                  >
                    <motion.div
                      className="rounded-full"
                      animate={{
                        width: i === current ? 24 : 6,
                        height: 6,
                        backgroundColor: i === current ? 'hsl(174 72% 38%)' : 'hsl(220 10% 80%)',
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    {i === current && (
                      <motion.div
                        className="absolute left-0 top-0 h-1.5 rounded-full bg-secondary/50"
                        style={{ width: `${(progress / 100) * 24}px` }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <span className="ml-auto text-xs text-muted-foreground tabular-nums">
                {slide.num} / {slides[slides.length - 1].num}
              </span>
            </div>

            {/* thin progress bar */}
            <div className="mt-3 h-px w-full bg-border/60 overflow-hidden rounded-full">
              <div
                className="h-full bg-secondary/60 rounded-full transition-none"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="relative">
            <div className="relative rounded-2xl border border-border/60 bg-white/60 backdrop-blur-sm shadow-strong p-4 md:p-5 overflow-hidden">
              {/* window chrome bar */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/50">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                </div>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={slide.id}
                    className="ml-2 text-xs text-muted-foreground font-medium truncate max-w-[200px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    JMRC.intel — {slide.title}
                  </motion.span>
                </AnimatePresence>
                <motion.div
                  className="ml-auto flex items-center gap-1.5 text-[10px] text-emerald-600 font-medium shrink-0"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
                  Live
                </motion.div>
              </div>

              {/* visual area — tall enough to never clip content */}
              <div className="relative min-h-[460px] md:min-h-[500px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide.id}
                    className="absolute inset-0 overflow-y-auto"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.01 }}
                    transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <slide.Visual />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* floating badge — only visible on slide 4 (map) */}
            <AnimatePresence>
              {slide.badge && (
                <motion.div
                  key="ea-badge"
                  className="absolute -bottom-3 -left-4 hidden md:flex items-center gap-2 rounded-xl border border-border/60 bg-white/90 backdrop-blur-sm shadow-medium px-3.5 py-2.5"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary/10">
                    <Globe size={14} className="text-secondary" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-foreground">{slide.badge.label}</div>
                    <div className="text-[10px] text-muted-foreground">{slide.badge.sub}</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── TRUST STRIP ── */}
      <div
        ref={trustRef as React.RefObject<HTMLDivElement>}
        className="border-t border-border/60 bg-white/70 backdrop-blur-sm"
      >
        <div className="section-shell py-7 md:py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {trustStats.map((s, i) => (
              <TrustStat key={s.label} {...s} active={trustInView} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
