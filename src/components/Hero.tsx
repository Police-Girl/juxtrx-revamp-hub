import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BrandShowcase from '@/components/BrandShowcase';
import StatsBar from '@/components/StatsBar';

const Hero = () => (
  <>
    <section id="home" className="relative bg-gradient-subtle overflow-hidden">
      <div className="section-shell">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 md:py-28 lg:py-32">
          <div className="animate-fade-in-up">
            <p className="section-label mb-5">JMRC.intel</p>
            <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] font-serif leading-[1.08] mb-6 text-foreground">
              Creative Intelligence for Regulated Markets
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
              Strategy, systems, regulatory development, brand management, and creative operations
              for organizations navigating regulated industries across Kenya and East Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="btn-brand px-8 h-12" asChild>
                <a href="#contact" className="flex items-center gap-2">
                  Partner With Us
                  <ArrowRight size={18} />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="btn-brand-outline px-8 h-12" asChild>
                <a href="#services">Explore Our Services</a>
              </Button>
            </div>
            <p className="mt-10 text-xs text-muted-foreground tracking-[0.25em] uppercase">
              JUXTRX · Kenya
            </p>
          </div>

          <BrandShowcase />
        </div>
      </div>
    </section>

    <StatsBar />
  </>
);

export default Hero;
