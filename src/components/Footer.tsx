import { 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Instagram,
  ArrowUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import jmrcLogo from '@/Images/new_logo.png';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
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
    'Regulatory Support',
    'Product Registration',
    'Brand Management',
    'Pharmacy Operations',
    'Quality Assurance',
    'Consultancy Services'
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: 'https://rb.gy/6scfcg', label: 'Facebook' },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>, href: 'https://rb.gy/ga36sn', label: 'X' },
    { icon: <Instagram size={20} />, href: 'https://rb.gy/u6vqks', label: 'Instagram' },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>, href: 'https://rb.gy/8qi7g3', label: 'Google' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Information */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={jmrcLogo} 
                alt="Juxt Rx Logo" 
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-md opacity-80"
              />
              <div>
                <h3 className="text-xl font-bold">Juxt Rx</h3>
                <p className="text-primary-foreground/80 text-sm">Pharmacy Operations, PBM & Regulatory</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Juxt Rx is a specialized provider of implementation solutions for healthcare business processes, focused on pharmacy operations, PBM, LTR & brand management, and regulatory support.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/80">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-secondary-light flex-shrink-0 mt-1" size={20} />
                <div className="text-primary-foreground/80">
                  <p>Nairobi, Kenya</p>
                  <p>Westlands Business District</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="text-secondary-light flex-shrink-0" size={20} />
                <a href="tel:0777795985" className="text-primary-foreground/80 underline-offset-2 hover:underline">0777795985</a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="text-secondary-light flex-shrink-0" size={20} />
                <a href="mailto:info@juxtrx.ke" className="text-primary-foreground/80 underline-offset-2 hover:underline">info@juxtrx.ke</a>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="text-secondary-light flex-shrink-0 mt-1" size={20} />
                <div className="text-primary-foreground/80">
                  <p className="font-medium">Business Hours</p>
                  <p>Mon-Fri: 8:00am - 6:00pm</p>
                  <p>Sat: 9:00am - 2:00pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/80 text-sm text-center md:text-left">
              <p>&copy; 2025 JuxT Remedica - JMRC Intel. All rights reserved.</p>
              <p className="mt-1">Licensed by Pharmacy & Poisons Board of Kenya</p>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </a>
              
              {/* Back to Top Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <ArrowUp size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;