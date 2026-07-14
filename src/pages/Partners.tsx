import { ArrowLeft, Heart, Shield, Cog, Handshake, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const highlights = [
  {
    icon: Heart,
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    title: 'Holistic Wellness',
    body: 'From premium prescription medications to natural beauty essentials — a curated selection covering every aspect of your well-being.',
  },
  {
    icon: Cog,
    color: 'text-brand-teal',
    bg: 'bg-teal-50',
    title: 'Pharmacy Operations',
    body: 'Streamlined pharmacy operations, optimised medication management, and enhanced patient safety through specialised consultancy.',
  },
  {
    icon: Shield,
    color: 'text-brand-purple',
    bg: 'bg-purple-50',
    title: 'Regulatory Support',
    body: 'Smooth market entry for pharmaceutical companies through approvals, certifications, and product registrations in compliance with local regulations.',
  },
  {
    icon: Handshake,
    color: 'text-brand-blue',
    bg: 'bg-blue-50',
    title: 'Trade & Brand Management',
    body: 'On-the-ground support and market intelligence helping pharmaceutical companies expand their market reach and build a strong brand identity.',
  },
];

const synergies = [
  'Pharmacy Benefit Management (PBM) — cost containment and quality care through negotiated medication pricing',
  'Strategic consultancy — valuable insights and recommendations to drive positive outcomes and business growth',
  'Local Trade Representation — in-country support for international pharmaceutical companies',
  'Regulatory support — streamlined approvals, certifications, and product registrations',
  'Startup advisory — guidance, market analysis, and business planning for new healthcare ventures',
];

const Partners = () => {
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
            <p className="section-label mb-4">Our Partner Pharmacy</p>
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
              Nourish &amp; Bloom Pharmacy
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Embrace a holistic wellness journey with our exclusive offerings — where pharmacy
              expertise meets cutting-edge healthcare solutions.
            </p>
          </div>
        </section>

        {/* About Nourish & Bloom */}
        <section className="py-16 bg-white">
          <div className="section-shell max-w-4xl">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                As a seasoned professional in the healthcare industry, we are thrilled to unveil
                the unparalleled value and offerings that Nourish &amp; Bloom Pharmacy brings to
                your well-being. We have carefully crafted our services with creativity and
                ingenuity, focusing on nourishing your life through a holistic approach to wellness.
              </p>
              <p>
                At Nourish &amp; Bloom Pharmacy, we go beyond the conventional pharmacy experience.
                Our curated selection of high-quality health and wellness products caters to every
                aspect of your well-being, from premium prescription medications to natural beauty
                essentials. Step into a world of enriched pharmacy services, empowering you to
                thrive both physically and spiritually.
              </p>
              <p>
                Our expert team of pharmacists and healthcare consultants are dedicated to
                personalising your wellness journey. By offering specialised consultancy services,
                we streamline pharmacy operations, optimise medication management, and enhance
                patient safety.
              </p>
              <p>
                Embrace tranquility through our rejuvenating wellness services, ranging from
                mindfulness practices to specialised nutrition plans. Unveil your inner radiance
                with our handpicked natural beauty products, ensuring you glow from the inside out.
                Join us in our mission to nourish your body, mind, and soul — together, let's
                embark on a transformative wellness journey that transcends the ordinary and
                embraces the extraordinary.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-5 mt-12">
              {highlights.map(({ icon: Icon, color, bg, title, body }) => (
                <div key={title} className="section-card flex gap-4 items-start p-5">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${bg}`}>
                    <Icon className={color} size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Juxt Rx + Nourish & Bloom synergy */}
        <section className="py-16 bg-muted/30 border-y border-border/60">
          <div className="section-shell max-w-4xl">
            <div className="max-w-2xl mb-10">
              <p className="section-label mb-3">The Partnership</p>
              <h2 className="text-3xl font-serif text-foreground mb-4">
                Integrated Pharmacy, Wellness &amp; Business Solutions
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nourish &amp; Bloom Pharmacy is proud to collaborate with Juxt Rx — a specialised
                provider of implementation solutions for healthcare business processes. Together,
                we offer comprehensive value-added services that enhance pharmacy operations,
                streamline medication management, and optimise patient safety.
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed mb-10">
              <p>
                Juxt Rx is dedicated to empowering healthcare organisations by delivering seamless
                and advanced solutions that optimise business processes, drive operational
                excellence, and elevate patient care. With a strong focus on pharmacy operations,
                pharmacy benefit management, consultancy services, and more, Juxt Rx is at the
                forefront of transforming the healthcare industry.
              </p>
              <p>
                For entrepreneurs and startups entering the healthcare industry, Juxt Rx provides
                specialised startup services that offer guidance, market analysis, and business
                planning support — whether you're launching a new pharmacy, a telehealth platform,
                or a healthcare-related technology solution.
              </p>
            </div>

            <div className="section-card p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">What the Partnership Delivers</h3>
              <ul className="space-y-3">
                {synergies.map((s) => (
                  <li key={s} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="text-secondary shrink-0 mt-0.5" size={17} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="btn-brand px-8" onClick={scrollToContact}>
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" className="btn-brand-outline px-8" asChild>
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
