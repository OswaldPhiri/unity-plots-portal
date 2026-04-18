import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-baseline space-x-1">
              <span className="text-xl font-black text-real-orange tracking-tighter">REAL</span>
              <span className="text-xl font-light text-foreground tracking-tight">Investments</span>
            </div>
            <p className="text-sm text-muted-foreground italic">Professional property & architecture solutions</p>
          </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for architectural design and secure land investments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/plots" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Available Plots
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm text-muted-foreground">123 Business Lane, Suite 100, City, Country</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+10000000000" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  +1 (000) 000-0000
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:contact@realinvestments.example" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  contact@realinvestments.example
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-sm text-muted-foreground">Mon–Fri, 08:30 AM – 05:00 PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground hover:text-accent transition-colors cursor-pointer">Land Plot Sales</li>
              <li className="text-sm text-muted-foreground hover:text-accent transition-colors cursor-pointer">Architectural Design</li>
              <li className="text-sm text-muted-foreground hover:text-accent transition-colors cursor-pointer">Construction Supervision</li>
              <li className="text-sm text-muted-foreground hover:text-accent transition-colors cursor-pointer">Bills of Quantity</li>
              <li className="text-sm text-muted-foreground hover:text-accent transition-colors cursor-pointer">Flexible Payment Plans</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Real Investments. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a 
              href="tel:+10000000000" 
              className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call</span>
            </a>
            <a 
              href="https://wa.me/0000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

