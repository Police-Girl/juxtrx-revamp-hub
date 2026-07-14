import { ArrowLeft, Target, Eye, Lightbulb, ShieldCheck, Users, Handshake, Zap, Leaf } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

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

const coreValues = [
  {
    icon: Lightbulb,
    color: 'text-brand-gold',
    bg: 'bg-amber-50',
    title: 'Innovation',
    description:
      'We continuously explore emerging technologies, disruptive trends, and data-driven insights to stay ahead in healthcare business process implementation.',
  },
  {
    icon: ShieldCheck,
    color: 'text-brand-blue',
    bg: 'bg-blue-50',
    title: 'Integrity',
    description:
      'We operate with utmost integrity, maintaining transparency and ethical behaviour in all our interactions. Trust is the foundation of every relationship.',
  },
  {
    icon: Users,
    color: 'text-brand-purple',
    bg: 'bg-purple-50',
    title: 'Client-Centric Approach',
    description:
      'Our clients are at the heart of everything we do. We actively listen, deeply understand their challenges, and provide tailored solutions that exceed expectations.',
  },
  {
    icon: Handshake,
    color: 'text-brand-teal',
    bg: 'bg-teal-50',
    title: 'Collaboration',
    description:
      'We foster a dynamic and inclusive environment where diverse perspectives are valued and teamwork is encouraged — harnessing collective intelligence to deliver results.',
  },
  {
    icon: Zap,
    color: 'text-brand-orange',
    bg: 'bg-orange-50',
    title: 'Agility & Adaptability',
    description:
      'We thrive in a rapidly changing healthcare landscape by quickly responding to industry shifts, leveraging new opportunities, and proactively addressing challenges.',
  },
  {
    icon: Leaf,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    title: 'Sustainable Impact',
    description:
      'We are committed to making a sustainable impact on society and the environment — improving healthcare systems, supporting communities, and promoting responsible practices.',
  },
];

const AboutPage = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="page-hero">
          <div className="section-shell max-w-3xl">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <ArrowLeft size={20} /> Back to Home
            </Link>
            <p className="section-label mb-4">About Us</p>
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
              <span className="text-gradient-brand">JMRC.intel</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Specialized provider of implementation solutions for healthcare business processes
              across Kenya and East Africa.
            </p>
          </div>
        </section>

        {/* Who we are */}
        <section className="py-16 bg-white">
          <div className="section-shell max-w-4xl">
            <h2 className="text-2xl font-serif text-foreground mb-6">
              Pharmacy Operations, Benefit Management &amp; Consultancy
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Juxt Rx is a specialized provider of implementation solutions for healthcare
                business processes, with a strong focus on pharmacy operations, pharmacy benefit
                management, and consultancy services. Our mission is to empower healthcare
                organizations by delivering seamless and cutting-edge solutions that optimize
                business processes, drive operational excellence, and elevate patient care.
              </p>
              <p>
                Working closely with our clients, we deliver customized and advanced solutions
                that improve efficiency, reduce costs, and foster positive outcomes in the
                ever-evolving healthcare industry. Whether you need help with patient registration
                and admission, medical billing and coding, or any other healthcare business
                process, our team of experts is here to help.
              </p>
              <p>
                We pride ourselves on our commitment to excellence, and we work closely with our
                clients to develop tailored solutions that meet their unique needs. Let us help
                you transform your healthcare business processes and take your organization to
                the next level.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-muted/30 border-y border-border/60">
          <div className="section-shell max-w-4xl">
            <div className="max-w-2xl mb-10">
              <p className="section-label mb-3">Our Direction</p>
              <h2 className="text-2xl md:text-3xl font-serif text-foreground">Mission &amp; Vision</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map(({ icon: Icon, color, title, description }) => (
                <div key={title} className="section-card">
                  <Icon className={`${color} mb-4`} size={28} strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-white">
          <div className="section-shell max-w-4xl">
            <div className="max-w-2xl mb-10">
              <p className="section-label mb-3">What Drives Us</p>
              <h2 className="text-2xl md:text-3xl font-serif text-foreground">Our Core Values</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {coreValues.map(({ icon: Icon, color, bg, title, description }) => (
                <div key={title} className="section-card flex flex-col gap-3">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${bg}`}>
                    <Icon className={color} size={22} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-base font-semibold text-foreground">{title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" className="btn-brand px-8" onClick={scrollToContact}>
                Work With Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
