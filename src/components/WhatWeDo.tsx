import React from 'react';
import { ArrowRight, UserCheck, Building2, Activity, Ship, Map } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

const services = [
  {
    icon: UserCheck,
    title: 'Local Technical Representation',
    summary: 'We act as your in-country LTR, fulfilling all regulatory obligations on behalf of foreign manufacturers.',
    href: '/services/ltr',
    accent: 'bg-blue-50 text-blue-600 border-blue-100',
    hover: 'hover:border-blue-300',
  },
  {
    icon: Building2,
    title: 'Market Authorization Hosting',
    summary: 'We hold and manage product marketing authorizations across East African regulatory authorities.',
    href: '/services/ltr',
    accent: 'bg-teal-50 text-teal-600 border-teal-100',
    hover: 'hover:border-teal-300',
  },
  {
    icon: Activity,
    title: 'Pharmacovigilance',
    summary: 'End-to-end PV systems including adverse event reporting, signal detection, and authority submissions.',
    href: '/services/regulatory',
    accent: 'bg-purple-50 text-purple-600 border-purple-100',
    hover: 'hover:border-purple-300',
  },
  {
    icon: Ship,
    title: 'Import Coordination',
    summary: 'We manage import permits, consignment clearance, and supply chain compliance for your products.',
    href: '/services/regulatory',
    accent: 'bg-amber-50 text-amber-600 border-amber-100',
    hover: 'hover:border-amber-300',
  },
  {
    icon: Map,
    title: 'Regulatory Strategy',
    summary: 'Tailored market entry roadmaps and dossier planning for efficient registration across EA markets.',
    href: '/services/regulatory',
    accent: 'bg-blue-50 text-blue-600 border-blue-100',
    hover: 'hover:border-blue-300',
  },
];

const WhatWeDo = () => {
  const { ref, inView } = useInView();
  return (
  <section className="bg-muted/30 py-20 md:py-24">
    <div className="section-shell">

      <div className="mb-10 reveal is-visible">
        <p className="section-label mb-2">What We Do</p>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground leading-tight">
          Regulatory Services Across East Africa
        </h2>
      </div>

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
      >
        {services.map(({ icon: Icon, title, summary, href, accent, hover }, i) => (
          <a
            key={title}
            href={href}
            className={`reveal ${inView ? 'is-visible' : ''} group flex flex-col bg-white border rounded-2xl p-5 transition-all duration-300 shadow-sm hover:shadow-medium hover:-translate-y-1 ${hover}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 border ${accent}`}>
              <Icon size={18} />
            </div>
            <h3 className="text-sm font-bold text-foreground mb-2 leading-snug">{title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed flex-1">{summary}</p>
            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-secondary group-hover:gap-2 transition-all duration-150">
              Learn more <ArrowRight size={13} />
            </div>
          </a>
        ))}
      </div>

    </div>
  </section>
  );
};

export default WhatWeDo;
