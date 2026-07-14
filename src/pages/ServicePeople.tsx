import { TrendingUp, CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const ServicePeople = () => {
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
            <TrendingUp className="text-secondary mb-6" size={48} strokeWidth={1.5} />
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">People Improvement</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Organisations are only as strong as their people. JMRC.intel delivers strategic
              consultancy, training, and capability-building programmes tailored to healthcare and
              regulated-industry teams — equipping individuals and organisations with the skills,
              knowledge, and frameworks needed to perform, adapt, and grow in a dynamic market.
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
                    'Healthcare workforce training programmes',
                    'Regulatory compliance training',
                    'Leadership & management development',
                    'Team performance frameworks',
                    'Strategic consultancy for organisations',
                    'Startup advisory & business planning',
                    'Change management support',
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
                    'Organisational needs assessment',
                    'Programme design & customisation',
                    'Delivery — workshops, coaching, e-learning',
                    'Competency assessment & feedback',
                    'Ongoing support & follow-through',
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
                    'Higher-performing teams',
                    'Stronger regulatory knowledge',
                    'Improved staff retention',
                    'Scalable internal capability',
                    'Culture of continuous improvement',
                  ].map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="text-brand-magenta shrink-0 mt-0.5" size={18} /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" className="btn-brand px-8" onClick={scrollToContact}>
                Develop Your Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePeople;
