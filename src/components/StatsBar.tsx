import React from 'react';
import { Award, FileCheck, Globe, Users, type LucideIcon } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { useCountUp } from '@/hooks/use-count-up';

const stats: { icon: LucideIcon; numeric: number; suffix: string; label: string }[] = [
  { icon: Award,     numeric: 10,  suffix: '+', label: 'Years in Regulated Markets' },
  { icon: FileCheck, numeric: 200, suffix: '+', label: 'Regulatory Submissions Supported' },
  { icon: Globe,     numeric: 5,   suffix: '',  label: 'East African Markets' },
  { icon: Users,     numeric: 500, suffix: '+', label: 'Partner Organizations' },
];

const StatItem = ({
  icon: Icon, numeric, suffix, label, active, delay,
}: typeof stats[number] & { active: boolean; delay: number }) => {
  const count = useCountUp(numeric, 1400, active);
  return (
    <div
      className={`reveal ${active ? 'is-visible' : ''} flex items-start gap-4`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-muted text-foreground/70">
        <Icon size={22} strokeWidth={1.5} />
      </div>
      <div>
        <div className="text-2xl md:text-3xl font-serif text-foreground tabular-nums">
          {count}{suffix}
        </div>
        <div className="text-sm text-muted-foreground leading-snug">{label}</div>
      </div>
    </div>
  );
};

const StatsBar = () => {
  const { ref, inView } = useInView();
  return (
    <div className="bg-white border-b border-border/60">
      <div className="section-shell py-10 md:py-12">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} active={inView} delay={i * 100} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
