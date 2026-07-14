import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2, Globe, Zap,
  FileCheck, AlertCircle, ArrowRight,
  MapPin, Building2, Users, Award,
} from 'lucide-react';

/* ─── shared helpers ─────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: d } }),
};

const glass =
  'bg-white/80 backdrop-blur-sm border border-white/60 shadow-medium rounded-xl';

function ProgressBar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
      <motion.div
        className={`h-full rounded-full ${color}`}
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
      />
    </div>
  );
}

/* ─── Slide 1: Impact Overview Dashboard ────────────────── */
const impactMetrics = [
  { icon: Award,     val: '10+',  label: 'Years in Regulated Markets', color: 'text-brand-blue',   bg: 'bg-brand-blue/10',   border: 'border-brand-blue/20' },
  { icon: FileCheck, val: '200+', label: 'Regulatory Submissions',     color: 'text-brand-teal',   bg: 'bg-brand-teal/10',   border: 'border-brand-teal/20' },
  { icon: Globe,     val: '5',    label: 'East African Markets',       color: 'text-brand-purple', bg: 'bg-brand-purple/10', border: 'border-brand-purple/20' },
  { icon: Users,     val: '500+', label: 'Partner Organisations',      color: 'text-amber-600',    bg: 'bg-amber-50',        border: 'border-amber-200' },
];

const services = [
  { label: 'Local Trade Representation', pct: 95, color: 'bg-brand-blue' },
  { label: 'Regulatory Support',         pct: 90, color: 'bg-brand-teal' },
  { label: 'Systems & Operations',       pct: 82, color: 'bg-brand-purple' },
];

export function LogoVisual() {
  return (
    <div className="w-full h-full flex flex-col gap-3 p-1">
      {/* metric cards */}
      <motion.div
        className={`${glass} p-4`}
        variants={fadeUp} initial="hidden" animate="show" custom={0}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">Impact Overview</span>
          <motion.div
            className="flex items-center gap-1.5 text-[10px] text-emerald-600 font-medium"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
            Active
          </motion.div>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {impactMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              className={`flex items-center gap-2.5 rounded-lg border p-2.5 ${m.bg} ${m.border}`}
              variants={fadeUp} initial="hidden" animate="show" custom={0.1 + i * 0.08}
            >
              <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md ${m.bg}`}>
                <m.icon size={14} className={m.color} />
              </div>
              <div>
                <div className={`text-base font-bold leading-none ${m.color}`}>{m.val}</div>
                <div className="text-[10px] text-muted-foreground leading-tight mt-0.5">{m.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* service capability bars */}
      <motion.div
        className={`${glass} p-4`}
        variants={fadeUp} initial="hidden" animate="show" custom={0.4}
      >
        <div className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-3">Service Capabilities</div>
        <div className="flex flex-col gap-2.5">
          {services.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">{s.label}</span>
                <span className="font-semibold text-foreground tabular-nums">{s.pct}%</span>
              </div>
              <ProgressBar pct={s.pct} color={s.color} />
            </div>
          ))}
        </div>
      </motion.div>

      {/* tagline footer */}
      <motion.div
        className={`${glass} p-3 flex items-center gap-2.5`}
        variants={fadeUp} initial="hidden" animate="show" custom={0.65}
      >
        <motion.div
          className="h-2 w-2 rounded-full bg-emerald-500 shrink-0"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-xs text-muted-foreground">
          Serving <span className="text-foreground font-medium">7 regulated industries</span> across East Africa
        </span>
      </motion.div>
    </div>
  );
}

/* ─── Slide 2: Regulatory Workflow ──────────────────────── */
const workflowSteps = [
  { id: 1, label: 'Submission', icon: FileCheck, desc: 'Dossier prepared & submitted' },
  { id: 2, label: 'Review', icon: AlertCircle, desc: 'Authority assessment underway' },
  { id: 3, label: 'Approval', icon: CheckCircle2, desc: 'Regulatory clearance granted' },
  { id: 4, label: 'Market Entry', icon: Globe, desc: 'Product launched in market' },
];

const floatStats = [
  { icon: Award, val: '10+', label: 'Years Experience' },
  { icon: FileCheck, val: '200+', label: 'Submissions' },
  { icon: Globe, val: '5', label: 'EA Markets' },
  { icon: Users, val: '500+', label: 'Partners' },
];

export function RegulatoryVisual() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveStep((s) => (s + 1) % workflowSteps.length), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-3 p-1">
      {/* workflow */}
      <motion.div
        className={`${glass} p-4`}
        variants={fadeUp} initial="hidden" animate="show" custom={0}
      >
        <div className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-4">
          Regulatory Pathway
        </div>
        <div className="flex flex-col gap-0">
          {workflowSteps.map((step, i) => {
            const isActive = i === activeStep;
            const isDone = i < activeStep;
            return (
              <div key={step.id} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <motion.div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-500 ${
                      isActive
                        ? 'border-brand-teal bg-brand-teal text-white'
                        : isDone
                        ? 'border-emerald-500 bg-emerald-500 text-white'
                        : 'border-gray-200 bg-white text-gray-400'
                    }`}
                    animate={isActive ? { scale: [1, 1.12, 1] } : { scale: 1 }}
                    transition={{ duration: 0.6, repeat: isActive ? Infinity : 0, repeatDelay: 1 }}
                  >
                    <step.icon size={14} />
                  </motion.div>
                  {i < workflowSteps.length - 1 && (
                    <motion.div
                      className="w-0.5 flex-1 my-1 rounded-full"
                      animate={{ backgroundColor: isDone ? '#10b981' : '#e5e7eb' }}
                      transition={{ duration: 0.5 }}
                      style={{ minHeight: 20 }}
                    />
                  )}
                </div>
                <div className="pb-3 pt-0.5">
                  <div className={`text-sm font-semibold transition-colors duration-300 ${isActive ? 'text-brand-teal' : isDone ? 'text-emerald-600' : 'text-muted-foreground'}`}>
                    {step.label}
                  </div>
                  <div className="text-[11px] text-muted-foreground">{step.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* stat cards */}
      <div className="grid grid-cols-2 gap-2.5">
        {floatStats.map((s, i) => (
          <motion.div
            key={s.label}
            className={`${glass} p-3 flex items-center gap-2.5`}
            variants={fadeUp} initial="hidden" animate="show" custom={0.3 + i * 0.08}
          >
            <s.icon size={15} className="text-brand-blue shrink-0" />
            <div>
              <div className="text-base font-bold text-foreground">{s.val}</div>
              <div className="text-[10px] text-muted-foreground leading-tight">{s.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* approval badge */}
      <motion.div
        className={`${glass} p-3 flex items-center gap-2.5`}
        variants={fadeUp} initial="hidden" animate="show" custom={0.7}
      >
        <motion.div
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <CheckCircle2 size={14} className="text-emerald-600" />
        </motion.div>
        <span className="text-xs text-muted-foreground">
          Latest approval: <span className="text-foreground font-medium">Kenya KEBS — Product Registration</span>
        </span>
      </motion.div>
    </div>
  );
}

/* ─── Slide 3: Systems & Operations ─────────────────────── */
const modules = [
  { label: 'Compliance', pct: 92, color: 'bg-brand-blue' },
  { label: 'Operations', pct: 85, color: 'bg-brand-teal' },
  { label: 'Performance', pct: 78, color: 'bg-brand-purple' },
  { label: 'Workflow Mgmt', pct: 88, color: 'bg-amber-500' },
  { label: 'Reporting', pct: 95, color: 'bg-emerald-500' },
];

const activityFeed = [
  { label: 'Workflow deployed', time: '2m ago', color: 'bg-emerald-500' },
  { label: 'Report generated', time: '8m ago', color: 'bg-brand-blue' },
  { label: 'KPI threshold met', time: '15m ago', color: 'bg-brand-teal' },
  { label: 'Process optimised', time: '1h ago', color: 'bg-amber-500' },
];

export function SystemsVisual() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((n) => n + 1), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-3 p-1">
      {/* module bars */}
      <motion.div
        className={`${glass} p-4`}
        variants={fadeUp} initial="hidden" animate="show" custom={0}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
            Platform Modules
          </span>
          <motion.div
            className="flex items-center gap-1.5 text-[10px] text-emerald-600 font-medium"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
            Live
          </motion.div>
        </div>
        <div className="flex flex-col gap-2.5">
          {modules.map((m, i) => (
            <div key={m.label} className="flex flex-col gap-1">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">{m.label}</span>
                <span className="font-semibold text-foreground tabular-nums">{m.pct}%</span>
              </div>
              <ProgressBar pct={m.pct} color={m.color} />
            </div>
          ))}
        </div>
      </motion.div>

      {/* activity feed */}
      <motion.div
        className={`${glass} p-4`}
        variants={fadeUp} initial="hidden" animate="show" custom={0.4}
      >
        <div className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-3">
          Activity Feed
        </div>
        <div className="flex flex-col gap-2">
          <AnimatePresence mode="popLayout">
            {activityFeed.map((a, i) => (
              <motion.div
                key={`${a.label}-${tick}-${i}`}
                className="flex items-center gap-2.5"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${a.color}`} />
                <span className="text-xs text-foreground flex-1">{a.label}</span>
                <span className="text-[10px] text-muted-foreground">{a.time}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* summary */}
      <motion.div
        className={`${glass} p-3 flex items-center gap-3`}
        variants={fadeUp} initial="hidden" animate="show" custom={0.6}
      >
        <Zap size={15} className="text-amber-500 shrink-0" />
        <span className="text-xs text-muted-foreground">
          <span className="text-foreground font-medium">3 workflows</span> optimised this week · avg efficiency +18%
        </span>
      </motion.div>
    </div>
  );
}

/* ─── Slide 4: East Africa Map ───────────────────────────── */
const countries = [
  { id: 'ke', name: 'Kenya',    cx: 52, cy: 52, primary: true  },
  { id: 'ug', name: 'Uganda',   cx: 38, cy: 44, primary: false },
  { id: 'tz', name: 'Tanzania', cx: 50, cy: 68, primary: false },
  { id: 'rw', name: 'Rwanda',   cx: 36, cy: 54, primary: false },
  { id: 'et', name: 'Ethiopia', cx: 62, cy: 38, primary: false },
];

const connections = [
  { from: 'ke', to: 'ug' },
  { from: 'ke', to: 'tz' },
  { from: 'ke', to: 'rw' },
  { from: 'ug', to: 'rw' },
  { from: 'ke', to: 'et' },
];

function getCoords(id: string) {
  return countries.find((c) => c.id === id)!;
}

export function MapVisual() {
  const [activeCountry, setActiveCountry] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveCountry((n) => (n + 1) % countries.length), 1600);
    return () => clearInterval(t);
  }, []);

  // Convert percentage coords to SVG viewBox (0 0 100 100)
  const toSVG = (pct: number) => pct;

  return (
    <div className="w-full h-full flex flex-col gap-3 p-1">
      {/* map card */}
      <motion.div
        className={`${glass} p-4 flex-1`}
        variants={fadeUp} initial="hidden" animate="show" custom={0}
      >
        <div className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-3">
          East African Presence
        </div>

        {/* stylised SVG map */}
        <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-slate-50 to-blue-50/40 rounded-lg overflow-hidden border border-white/80">
          <svg
            viewBox="20 30 60 55"
            className="w-full h-full"
            aria-label="East Africa map"
          >
            {/* subtle grid */}
            <defs>
              <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
                <path d="M 5 0 L 0 0 0 5" fill="none" stroke="#e2e8f0" strokeWidth="0.3" />
              </pattern>
              <radialGradient id="glow-ke" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0077B6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0077B6" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="glow-ug" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00B4A6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#00B4A6" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="glow-tz" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#6A1B9A" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#6A1B9A" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="glow-rw" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FF8C00" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="glow-et" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#E91E63" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#E91E63" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />

            {/* connection lines */}
            {connections.map((conn) => {
              const from = getCoords(conn.from);
              const to = getCoords(conn.to);
              return (
                <motion.line
                  key={`${conn.from}-${conn.to}`}
                  x1={toSVG(from.cx)} y1={toSVG(from.cy)}
                  x2={toSVG(to.cx)} y2={toSVG(to.cy)}
                  stroke="#0077B6"
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  transition={{ delay: 0.8 }}
                />
              );
            })}

            {/* animated travel dots on lines */}
            {connections.map((conn, ci) => {
              const from = getCoords(conn.from);
              const to = getCoords(conn.to);
              return (
                <motion.circle
                  key={`dot-${ci}`}
                  r="0.8"
                  fill="#00B4A6"
                  initial={{ offsetDistance: '0%' }}
                  animate={{ offsetDistance: '100%' }}
                  style={{
                    offsetPath: `path("M ${toSVG(from.cx)} ${toSVG(from.cy)} L ${toSVG(to.cx)} ${toSVG(to.cy)}")`,
                  } as React.CSSProperties}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: ci * 0.6,
                    ease: 'linear',
                  }}
                />
              );
            })}

            {/* country markers */}
            {countries.map((c, i) => {
              const isActive = i === activeCountry;
              const colors = ['#0077B6', '#00B4A6', '#6A1B9A', '#FF8C00', '#E91E63'];
              const color = colors[i];
              return (
                <g key={c.id}>
                  {/* glow ring */}
                  <motion.circle
                    cx={toSVG(c.cx)} cy={toSVG(c.cy)} r="6"
                    fill={`url(#glow-${c.id})`}
                    animate={{ r: isActive ? [5, 8, 5] : 5, opacity: isActive ? [0.6, 1, 0.6] : 0.3 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  {/* dot */}
                  <motion.circle
                    cx={toSVG(c.cx)} cy={toSVG(c.cy)} r="2"
                    fill={color}
                    animate={{ r: isActive ? [2, 2.8, 2] : 2 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  {/* label */}
                  <text
                    x={toSVG(c.cx) + 3.5}
                    y={toSVG(c.cy) + 1}
                    fontSize="3"
                    fill={isActive ? color : '#64748b'}
                    fontWeight={isActive ? '700' : '400'}
                    fontFamily="Inter, sans-serif"
                  >
                    {c.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </motion.div>

      {/* country chips */}
      <div className="grid grid-cols-3 gap-2">
        {countries.map((c, i) => {
          const colors = [
            'border-brand-blue/30 bg-blue-50 text-brand-blue',
            'border-teal-300/40 bg-teal-50 text-brand-teal',
            'border-purple-300/40 bg-purple-50 text-brand-purple',
            'border-orange-300/40 bg-orange-50 text-amber-700',
            'border-rose-300/40 bg-rose-50 text-rose-700',
          ];
          return (
            <motion.div
              key={c.id}
              className={`flex items-center gap-2 rounded-lg border px-3 py-2 ${colors[i]} transition-all duration-300`}
              variants={fadeUp} initial="hidden" animate="show" custom={0.3 + i * 0.08}
            >
              <MapPin size={12} className="shrink-0" />
              <span className="text-xs font-semibold">{c.name}</span>
              {c.primary && (
                <span className="ml-auto text-[9px] font-bold uppercase tracking-wide opacity-70">HQ</span>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* coverage card */}
      <motion.div
        className={`${glass} p-3 flex items-center gap-2.5`}
        variants={fadeUp} initial="hidden" animate="show" custom={0.7}
      >
        <Building2 size={14} className="text-brand-blue shrink-0" />
        <span className="text-xs text-muted-foreground">
          <span className="text-foreground font-medium">East African Regulatory Coverage</span> — 5 active markets
        </span>
        <ArrowRight size={12} className="text-muted-foreground ml-auto shrink-0" />
      </motion.div>
    </div>
  );
}
