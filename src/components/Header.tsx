import { useState } from 'react';
import { Menu, X, Phone, Mail, Clock, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const jmrcLogo = '/lovable-uploads/2e2a9a4d-0092-4ccf-b41a-e2a5197782fd.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Shop', href: '/shop' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>info@juxtrx.ke</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Sun - Fri: 8:00am - 10:00pm</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+254 (0) 123 456 789</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <img 
                src={jmrcLogo} 
                alt="JMRC Intel - Just Mercurial Research & Creatives" 
                className="h-12 w-12 rounded-full object-contain shadow-medium bg-white/10 p-1"
              />
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-primary">JuxT Remedica</h1>
                <p className="text-sm text-muted-foreground">Apothecary Solutions</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-3 ml-4">
                <Link to="/shop">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <ShoppingBag size={16} />
                    Shop
                  </Button>
                </Link>
                <Button variant="default" size="sm">
                  Get Started
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
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <Link to="/shop" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" size="sm" className="w-fit flex items-center gap-2">
                      <ShoppingBag size={16} />
                      Shop
                    </Button>
                  </Link>
                  <Button variant="default" size="sm" className="w-fit">
                    Get Started
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