import { Cog, CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const ServiceSystems = () => {
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
        <section className="page-hero">
          <div className="section-shell max-w-3xl">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <ArrowLeft size={20} /> Back to Home
            </Link>
            <Cog className="text-secondary mb-6" size={48} strokeWidth={1.5} />
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Systems & Operations</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              JMRC.intel designs and implements scalable systems, workflows, and operational models
              that help regulated healthcare and pharmaceutical organisations grow with confidence.
              From pharmacy operations optimisation to end-to-end Pharmacy Benefit Management, we
              leverage advanced technology, automation, and data analytics to drive operational
              excellence and elevate patient care.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="section-card">
                <h3 className="text-xl font-semibold mb-4">Key Capabilities</h3>
                <ul className="space-y-3">
                  {[
                    'Pharmacy operations consulting & optimisation',
                    'Pharmacy Benefit Management (PBM)',
                    'Workflow design & automation',
                    'Inventory management systems',
                    'Prescription processing improvement',
                    'Business process design & integration',
                    'Operational performance management',
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="text-secondary shrink-0 mt-0.5" size={18} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="section-card">
                <h3 className="text-xl font-semibold mb-4">Our Process</h3>
                <ol className="space-y-3">
                  {[
                    'Discovery & requirements mapping',
                    'Solution architecture & design',
                    'Build, test & deploy',
                    'Training & change management',
                    'Ongoing optimisation & support',
                  ].map((step, i) => (
                    <li key={step} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="section-card">
                <h3 className="text-xl font-semibold mb-4">Outcomes</h3>
                <ul className="space-y-3">
                  {[
                    'Streamlined pharmacy workflows',
                    'Cost containment through PBM',
                    'Better data & decision-making',
                    'Scalable growth infrastructure',
                    'Improved patient outcomes',
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="text-brand-teal shrink-0 mt-0.5" size={18} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" className="btn-brand px-8" onClick={scrollToContact}>
                Discuss Your Systems Needs
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceSystems;
