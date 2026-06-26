import { Phone, Mail, MapPin, Facebook, Instagram, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import LogoLockup from '@/components/LogoLockup';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    'Regulatory Development',
    'Systems & Operations',
    'Brand Management',
    'Creative Operations',
    'Trade Development',
    'People Improvement',
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: 'https://rb.gy/6scfcg', label: 'Facebook' },
    { icon: <Instagram size={18} />, href: 'https://rb.gy/u6vqks', label: 'Instagram' },
  ];

  return (
    <footer className="bg-muted/40 border-t border-border/60 text-foreground">
      <div className="brand-accent-bar" />
      <div className="section-shell py-14 md:py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          <div className="md:col-span-2 lg:col-span-1">
            <LogoLockup className="mb-5" imgClassName="h-11 max-w-[220px]" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-xs">
              Creative intelligence for regulated markets — strategy, systems, regulatory
              development, and brand management in Kenya.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="p-2 rounded-sm border border-border/80 text-muted-foreground hover:text-foreground hover:bg-white transition-colors"
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-sm text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-sm text-foreground">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s} className="text-sm text-muted-foreground">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-sm text-foreground">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex gap-2">
                <MapPin className="text-secondary shrink-0" size={16} />
                <span>Nairobi, Kenya · Westlands</span>
              </div>
              <a href="tel:0777795985" className="flex gap-2 hover:text-foreground transition-colors">
                <Phone className="text-secondary shrink-0" size={16} />
                0777795985
              </a>
              <a href="mailto:info@juxtrx.ke" className="flex gap-2 hover:text-foreground transition-colors">
                <Mail className="text-secondary shrink-0" size={16} />
                info@juxtrx.ke
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="section-shell py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
          <p>© 2025 JuxT Remedica — JMRC.intel. All rights reserved.</p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-muted-foreground hover:text-foreground hover:bg-white"
          >
            <ArrowUp size={16} className="mr-1" />
            Back to top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
