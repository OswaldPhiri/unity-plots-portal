import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Unity Investments Logo" 
                className="h-24 w-auto object-contain"
              />
              <div>
                <p className="text-sm text-muted-foreground italic">Many hands make light work</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for architectural design and secure land investments in Malawi.
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
                <span className="text-sm text-muted-foreground">Opposite Central Hospital</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+265997141858" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  +265 99 714 1858
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:unityinvestment0@gmail.com" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  unityinvestment0@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-sm text-muted-foreground">Mon–Fri, 07:30 AM – 04:00 PM</span>
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
            © 2024 Unity Investments. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a 
              href="tel:+265997141858" 
              className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call</span>
            </a>
            <a 
              href="https://wa.me/265997141858" 
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
