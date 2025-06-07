
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-unity-dark-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">U</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Unity Investments</h3>
                <p className="text-sm opacity-80">Many hands make light work</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Your trusted partner for architectural design and secure land investments in Malawi.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Home
              </Link>
              <Link to="/plots" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Available Plots
              </Link>
              <Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                About Us
              </Link>
              <Link to="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Opposite Central Hospital</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">0997 141 858 / 0887 141 858</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">unityinvestment0@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm">Mon–Sat, 8:00 AM – 5:00 PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-sm opacity-80">Land Plot Sales</li>
              <li className="text-sm opacity-80">Architectural Design</li>
              <li className="text-sm opacity-80">Real Estate Consultation</li>
              <li className="text-sm opacity-80">Legal Documentation</li>
              <li className="text-sm opacity-80">Flexible Payment Plans</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">
            © 2024 Unity Investments. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a 
              href="tel:+265997141858" 
              className="flex items-center space-x-1 text-sm hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call</span>
            </a>
            <a 
              href="https://wa.me/265997141858" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-sm hover:text-primary transition-colors"
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
