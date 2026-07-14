import { Target, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const values = [
  {
    icon: Target,
    color: 'text-brand-purple',
    title: 'Mission',
    description:
      'Deliver exceptional implementation services that help organizations thrive in regulated markets across Kenya and beyond.',
  },
  {
    icon: Eye,
    color: 'text-brand-blue',
    title: 'Vision',
    description:
      'Be the leading creative intelligence partner in East Africa — recognized for strategy, systems, and impact in regulated industries.',
  },
];

const About = () => (
  <section id="about" className="py-20 md:py-28 bg-white">
    <div className="section-shell">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="section-label mb-3">About Us</p>
        <h2 className="text-3xl md:text-[2.5rem] font-serif text-foreground mb-5">
          <span className="text-gradient-brand">JMRC.intel</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Juxt Rx is a specialized provider of implementation solutions for healthcare business
          processes, with a strong focus on pharmacy operations, pharmacy benefit management, and
          consultancy services — empowering organizations to optimize processes, drive operational
          excellence, and elevate patient care.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
        {values.map(({ icon: Icon, color, title, description }) => (
          <div key={title} className="section-card text-center md:text-left">
            <Icon className={`${color} mx-auto md:mx-0 mb-4`} size={28} strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button size="lg" variant="outline" className="btn-brand-outline px-7 h-11" asChild>
          <Link to="/about" className="flex items-center gap-2">
            Learn More About Us
            <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default About;
