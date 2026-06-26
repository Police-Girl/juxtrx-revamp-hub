import { Button } from '@/components/ui/button';

interface CtaBandProps {
  title?: string;
  subtitle?: string;
}

const CtaBand = ({
  title = 'Ready to Partner With JMRC.intel?',
  subtitle = 'Let us be your implementation partner for regulated markets across Kenya and East Africa.',
}: CtaBandProps) => (
  <section className="py-20 md:py-24 bg-muted/50 border-y border-border/60">
    <div className="max-w-2xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-[2.5rem] font-serif text-foreground mb-4 leading-tight">{title}</h2>
      <p className="text-muted-foreground mb-10 text-lg leading-relaxed">{subtitle}</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button size="lg" className="btn-brand px-8 h-12" asChild>
          <a href="#contact">Partner With Us</a>
        </Button>
        <Button size="lg" variant="outline" className="btn-brand-outline px-8 h-12" asChild>
          <a href="#services">Explore Our Services</a>
        </Button>
      </div>
    </div>
  </section>
);

export default CtaBand;
