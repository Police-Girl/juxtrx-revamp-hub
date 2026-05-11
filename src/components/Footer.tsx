import { 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
const jmrcLogo = '/lovable-uploads/2e2a9a4d-0092-4ccf-b41a-e2a5197782fd.png';

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
    { icon: <Facebook size={20} />, href: 'https://m.facebook.com/61551045025972/about/', label: 'Facebook' },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>, href: '#', label: 'X' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/nourishandbloom1/?hl=en', label: 'Instagram' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
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
                  className="p-2 rounded-lg transition-colors duration-200"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))',
                    color: 'white'
                  }}
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