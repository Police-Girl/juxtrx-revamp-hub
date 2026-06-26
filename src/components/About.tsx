import { CheckCircle, Target, Eye, Heart } from 'lucide-react';

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
  {
    icon: Heart,
    color: 'text-brand-teal',
    title: 'Values',
    description:
      'Integrity, excellence, innovation, and impact drive our commitment to client success.',
  },
];

const achievements = [
  'ISO 9001:2015 Quality Management Certification',
  'Registered with relevant regulatory authorities in Kenya',
  'Certified consultancy for regulated industries',
  'Established network of regional partners',
];

const About = () => (
  <section id="about" className="py-20 md:py-28 bg-white">
    <div className="section-shell">
      <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
        <p className="section-label mb-3">About Us</p>
        <h2 className="text-3xl md:text-[2.5rem] font-serif text-foreground mb-5">
          <span className="text-gradient-brand">JMRC.intel</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          We are a specialized provider of implementation solutions for regulated business
          processes — regulatory development, systems, brand management, creative operations, and
          trade development.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-16 space-y-6 text-center sm:text-left">
        <h3 className="text-2xl font-serif text-foreground">
          Strategy, Systems & Creative Intelligence
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          JMRC.intel helps organizations optimize operations, navigate regulation, and build
          sustainable growth. We support companies, institutions, and partners across Kenya and
          East Africa.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          From regulatory pathways to systems design and creative operations, we deliver
          end-to-end solutions that ensure compliance, efficiency, and lasting impact.
        </p>
        <ul className="space-y-3 pt-2">
          {achievements.map((item) => (
            <li key={item} className="flex items-start gap-3 sm:justify-start justify-center">
              <CheckCircle className="text-secondary shrink-0 mt-0.5" size={20} />
              <span className="text-muted-foreground text-sm text-left">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {values.map(({ icon: Icon, color, title, description }) => (
          <div key={title} className="section-card text-center md:text-left">
            <Icon className={`${color} mx-auto md:mx-0 mb-4`} size={28} strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
