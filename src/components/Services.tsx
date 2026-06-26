import {
  Shield,
  FileText,
  BarChart3,
  Tag,
  Cog,
  PenTool,
  Handshake,
  TrendingUp,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
      'End-to-end compliance, documentation, and approvals for regulated products and services.',
    link: '/services/regulatory',
  },
  {
    icon: Handshake,
    iconColor: 'text-brand-gold',
    title: 'Regulatory Representation',
    description:
      'In-country representation and liaison with authorities across East African markets.',
    link: '/services/ltr',
  },
  {
    icon: FileText,
    iconColor: 'text-brand-blue',
    title: 'Registration & Licensing',
    description:
      'Product and service registration support with structured submission pathways.',
    link: '/services/regulatory',
  },
  {
    icon: Tag,
    iconColor: 'text-brand-orange',
    title: 'Product & Brand Management',
    description:
      'Brand positioning, market entry, and local trade representative services.',
    link: '/services/ltr',
  },
  {
    icon: Cog,
    iconColor: 'text-brand-teal',
    title: 'Systems Development',
    description:
      'Scalable workflows, digital operations, and technology-enabled business systems.',
    link: '/services/systems',
  },
  {
    icon: BarChart3,
    iconColor: 'text-brand-blue',
    title: 'Business Operations',
    description:
      'Process design, performance management, and operational excellence programs.',
    link: '/services/systems',
  },
  {
    icon: PenTool,
    iconColor: 'text-brand-indigo',
    title: 'Creative Operations',
    description:
      'Creative intelligence for regulated communications, campaigns, and content.',
    link: '#contact',
  },
  {
    icon: TrendingUp,
    iconColor: 'text-brand-magenta',
    title: 'People & Capability Building',
    description:
      'Training, team development, and capability building for regulated organizations.',
    link: '#about',
  },
];

const Services = () => (
  <section id="services" className="bg-muted/30 py-20 md:py-28 border-y border-border/60">
    <div className="section-shell">
      <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
        <p className="section-label mb-3">What We Do</p>
        <h2 className="text-3xl md:text-[2.5rem] font-serif text-foreground mb-5">Our Services</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Comprehensive solutions for strategy, systems, regulatory development, and brand
          management in regulated markets across Kenya and East Africa.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {serviceCards.map(({ icon: Icon, iconColor, title, description, link }) => (
          <article
            key={title}
            className="group flex flex-col items-center text-center bg-white rounded-md border border-border/70 p-6 transition-shadow hover:shadow-soft"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-muted/80">
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
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
