import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import jmrcLogo from '@/Images/new_logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
  ];

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>info@juxtrx.ke</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <a href="tel:0777795985" className="underline-offset-2 hover:underline">0777795985</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4 cursor-pointer" onClick={() => scrollToSection('home')}>
              <img
                src={jmrcLogo}
                alt="Juxt Rx Logo"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-md opacity-80"
              />
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-primary">Juxt Rx</h1>
                <p className="text-sm text-muted-foreground">Pharmacy Operations, PBM & Regulatory</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center gap-3 ml-4">
                <Button variant="default" size="sm" onClick={() => scrollToSection('contact')}>
                  Contact Us
                </Button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-accent transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border animate-fade-in-up">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 text-left"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="default" size="sm" className="w-fit" onClick={() => scrollToSection('contact')}>
                    Contact Us
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
