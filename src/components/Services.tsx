import {
  Shield,
  Cog,
  Tag,
  PenTool,
  Handshake,
  TrendingUp,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/Reveal';

type ServiceCard = {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  description: string;
  link: string;
};

const serviceCards: ServiceCard[] = [
  {
    icon: Shield,
    iconColor: 'text-brand-purple',
    title: 'Regulatory Development',
    description:
      'End-to-end compliance consulting, product registration, dossier preparation, and submission support to navigate regulatory authorities across East Africa.',
    link: '/services/regulatory',
  },
  {
    icon: Cog,
    iconColor: 'text-brand-teal',
    title: 'Systems & Operations',
    description:
      'Pharmacy operations optimisation, Pharmacy Benefit Management, workflow automation, and scalable business systems for regulated healthcare organisations.',
    link: '/services/systems',
  },
  {
    icon: Tag,
    iconColor: 'text-brand-gold',
    title: 'Brand Management',
    description:
      'Brand identity, market entry campaigns, product positioning, and regulatory-aware marketing strategies that build lasting consumer trust.',
    link: '/services/brand',
  },
  {
    icon: PenTool,
    iconColor: 'text-brand-indigo',
    title: 'Creative Operations',
    description:
      'Compliant healthcare communications, campaign creative, patient education content, medical writing, and digital content for regulated markets.',
    link: '/services/creative',
  },
  {
    icon: Handshake,
    iconColor: 'text-brand-blue',
    title: 'Trade Development',
    description:
      'Local Trade Representative (LTR) services, in-country market entry support, distribution setup, and partnership development across Kenya and East Africa.',
    link: '/services/trade',
  },
  {
    icon: TrendingUp,
    iconColor: 'text-brand-magenta',
    title: 'People Improvement',
    description:
      'Strategic consultancy, workforce training, leadership development, and capability-building programmes tailored to healthcare and regulated-industry teams.',
    link: '/services/people',
  },
];

const Services = () => (
  <section id="services" className="bg-muted/30 py-20 md:py-28 border-y border-border/60">
    <div className="section-shell">
      <Reveal className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
        <p className="section-label mb-3">What We Do</p>
        <h2 className="text-3xl md:text-[2.5rem] font-serif text-foreground mb-5">Our Services</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Comprehensive solutions for regulatory development, systems, brand management, creative
          operations, trade development, and people improvement across Kenya and East Africa.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {serviceCards.map(({ icon: Icon, iconColor, title, description, link }, i) => (
          <Reveal
            key={title}
            delay={i * 60}
            as="article"
            className="group flex flex-col items-center text-center bg-white rounded-md border border-border/70 p-6 transition-all duration-300 hover:shadow-medium hover:-translate-y-1"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-muted/80 transition-transform duration-300 group-hover:scale-110">
              <Icon className={iconColor} size={30} strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-3 leading-snug min-h-[2.5rem] flex items-center justify-center">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
              {description}
            </p>
            <Link
              to={link}
              className="inline-flex items-center gap-1 text-sm font-medium text-secondary hover:text-secondary/80 mt-auto"
            >
              Learn more
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
