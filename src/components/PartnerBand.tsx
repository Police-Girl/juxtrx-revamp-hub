import { ArrowRight, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/Reveal';

const pillars = [
  'Holistic wellness products',
  'Pharmacy operations & PBM',
  'Regulatory support',
  'Trade & brand management',
  'Startup advisory services',
];

const PartnerBand = () => (
  <section className="py-20 md:py-24 bg-white border-t border-border/60">
    <div className="section-shell">
      <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">

        {/* Left — text */}
        <Reveal>
          <p className="section-label mb-4">Our Partner Pharmacy</p>
          <h2 className="text-3xl md:text-[2.5rem] font-serif text-foreground leading-tight mb-5">
            Nourish &amp; Bloom{' '}
            <span className="text-gradient-brand">Pharmacy</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We are proud to partner with Nourish &amp; Bloom Pharmacy — a holistic wellness
            destination that goes beyond the conventional pharmacy experience. Together, we
            deliver integrated pharmacy, wellness, and business solutions that empower
            healthcare organisations and patients alike.
          </p>
          <ul className="space-y-2 mb-8">
            {pillars.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                {p}
              </li>
            ))}
          </ul>
          <Button size="lg" className="btn-brand px-7 h-11" asChild>
            <Link to="/partners" className="flex items-center gap-2">
              Explore the Partnership
              <ArrowRight size={16} />
            </Link>
          </Button>
        </Reveal>

        {/* Right — card */}
        <Reveal delay={150} className="relative">
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-rose-50/60 via-white to-teal-50/40 p-8 shadow-medium">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-100">
                <Heart className="text-rose-500" size={22} strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Nourish &amp; Bloom Pharmacy</div>
                <div className="text-xs text-muted-foreground">Partner since 2023</div>
              </div>
              <div className="ml-auto flex items-center gap-1.5 text-[10px] text-emerald-600 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
                Active
              </div>
            </div>

            <blockquote className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-secondary/40 pl-4 mb-6">
              "Nourishing your life the natural way — where pharmacy expertise meets holistic
              wellness and cutting-edge healthcare solutions."
            </blockquote>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Wellness Products', val: 'Premium' },
                { label: 'Consultancy', val: 'Specialised' },
                { label: 'Patient Safety', val: 'Enhanced' },
                { label: 'Coverage', val: 'Nairobi & Beyond' },
              ].map((item) => (
                <div key={item.label} className="rounded-lg bg-white/80 border border-border/50 px-3 py-2.5">
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wide">{item.label}</div>
                  <div className="text-xs font-semibold text-foreground mt-0.5">{item.val}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
              <Sparkles size={13} className="text-amber-500 shrink-0" />
              Integrated pharmacy, wellness &amp; beauty solutions
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  </section>
);

export default PartnerBand;
