import React from 'react';
import { Factory, HardHat, HeartPulse, HandHeart, ShoppingBag, GraduationCap, Truck } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

const industries = [
  { icon: HeartPulse,    label: 'Healthcare',    color: 'text-brand-teal',    bg: 'bg-teal-50'   },
  { icon: Factory,       label: 'Manufacturing', color: 'text-brand-blue',    bg: 'bg-blue-50'   },
  { icon: HardHat,       label: 'Construction',  color: 'text-brand-orange',  bg: 'bg-amber-50'  },
  { icon: HandHeart,     label: 'NGOs',          color: 'text-brand-purple',  bg: 'bg-purple-50' },
  { icon: ShoppingBag,   label: 'Retail',        color: 'text-brand-magenta', bg: 'bg-pink-50'   },
  { icon: GraduationCap, label: 'Education',     color: 'text-brand-indigo',  bg: 'bg-indigo-50' },
  { icon: Truck,         label: 'Logistics',     color: 'text-brand-gold',    bg: 'bg-yellow-50' },
];

const WhoWeServe = () => {
  const { ref, inView } = useInView();
  return (
    <section className="bg-white py-20 md:py-24 border-b border-border/60">
      <div className="section-shell">
        <div className="max-w-2xl mx-auto text-center mb-12 reveal is-visible">
          <p className="section-label mb-3">Who We Serve</p>
          <h2 className="text-3xl md:text-[2.5rem] font-serif text-foreground mb-4">
            Industries We Work With
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We partner with organizations across regulated and growth-stage industries in Kenya and East Africa.
          </p>
        </div>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4"
        >
          {industries.map(({ icon: Icon, label, color, bg }, i) => (
            <div
              key={label}
              className={`reveal ${inView ? 'is-visible' : ''} flex flex-col items-center gap-3 p-5 rounded-md border border-border/70 bg-white hover:shadow-medium hover:-translate-y-1 transition-all duration-300 text-center`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-full ${bg} transition-transform duration-300 group-hover:scale-110`}>
                <Icon className={color} size={24} strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium text-foreground leading-snug">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
