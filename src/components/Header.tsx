import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import LogoLockup from '@/components/LogoLockup';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home',        id: 'home',     path: null        },
    { name: 'About',       id: 'about',    path: '/about'    },
    { name: 'Services',    id: 'services', path: null        },
    { name: 'Our Partners',id: 'partners', path: '/partners' },
    { name: 'Contact',     id: 'contact',  path: null        },
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
    <header className="site-header">
      <div className="brand-accent-bar" />

      <div className="section-shell">
        <div className="flex justify-between items-center h-[4.25rem] gap-4">
          <button type="button" className="shrink-0" onClick={() => scrollToSection('home')}>
            <LogoLockup imgClassName="h-9 sm:h-10 max-w-[200px] sm:max-w-[240px]" />
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              item.path ? (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </button>
              )
            ))}
          </nav>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden pb-5 border-t border-border/60 pt-4 flex flex-col gap-1">
            {navItems.map((item) => (
              item.path ? (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-left text-foreground/80 font-medium py-2.5 hover:text-foreground"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground/80 font-medium py-2.5 hover:text-foreground"
                >
                  {item.name}
                </button>
              )
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
