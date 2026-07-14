import { PenTool, CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const ServiceCreative = () => {
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
            <PenTool className="text-secondary mb-6" size={48} strokeWidth={1.5} />
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Creative Operations</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Creative intelligence for regulated markets. JMRC.intel produces compliant, compelling
              communications — from healthcare campaigns and patient education materials to digital
              content and strategic messaging — that connect organisations with their audiences while
              meeting all regulatory standards.
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
                    'Regulated healthcare communications',
                    'Campaign strategy & creative direction',
                    'Patient education content',
                    'Digital content & social media',
                    'Promotional material development',
                    'Medical writing & copywriting',
                    'Visual identity & design systems',
                  ].map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="text-secondary shrink-0 mt-0.5" size={18} /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="section-card">
                <h3 className="text-xl font-semibold mb-4">Our Process</h3>
                <ol className="space-y-3">
                  {[
                    'Brief & audience analysis',
                    'Creative strategy & concept development',
                    'Content production & design',
                    'Regulatory review & compliance check',
                    'Deployment & performance review',
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
                    'Compliant, high-impact communications',
                    'Stronger audience engagement',
                    'Consistent brand voice',
                    'Reduced compliance risk in content',
                    'Faster content-to-market cycles',
                  ].map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="text-brand-indigo shrink-0 mt-0.5" size={18} /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" className="btn-brand px-8" onClick={scrollToContact}>
                Start a Creative Brief
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceCreative;
