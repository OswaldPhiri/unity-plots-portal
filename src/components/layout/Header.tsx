import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center py-1 sm:py-2">
            <img 
              src="/logo.png" 
              alt="Unity Investments Logo" 
              className="h-12 w-auto object-contain sm:h-16 md:h-20"
            />
            <p className="text-xs sm:text-sm text-foreground italic mt-1 sm:mt-2 hidden sm:block">Many hands make light work</p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive(item.href) ? 'text-accent' : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button size="sm" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white" asChild>
              <a href="tel:+265997141858" className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </a>
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
              <a 
                href="https://wa.me/265997141858" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-primary-foreground"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -mr-2 rounded-md hover:bg-accent/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4 px-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium transition-colors hover:text-accent py-2 ${
                    isActive(item.href) ? 'text-accent' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white w-full" asChild>
                  <a href="tel:+265997141858" className="flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                </Button>
                <Button size="lg" className="bg-primary hover:bg-primary/90 w-full" asChild>
                  <a 
                    href="https://wa.me/265997141858" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 text-primary-foreground"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
