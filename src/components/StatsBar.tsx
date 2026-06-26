import { Award, FileCheck, Globe, Users } from 'lucide-react';

const stats = [
  { icon: Award, value: '10+', label: 'Years in Regulated Markets' },
  { icon: FileCheck, value: '200+', label: 'Regulatory Submissions Supported' },
  { icon: Globe, value: '5', label: 'East African Markets' },
  { icon: Users, value: '500+', label: 'Partner Organizations' },
];

const StatsBar = () => (
  <div className="bg-white border-b border-border/60">
    <div className="section-shell py-10 md:py-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-muted text-foreground/70">
              <Icon size={22} strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-serif text-foreground">{value}</div>
              <div className="text-sm text-muted-foreground leading-snug">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default StatsBar;
