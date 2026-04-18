import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-accent to-real-dark-blue text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Secure Your Future with{' '}
              <span className="text-yellow-300">Real Investments</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              We specialize in architectural design and selling affordable, secure land plots 
              in high-growth locations. With flexible payments and professional guidance, land ownership 
              has never been easier.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                asChild 
                className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 text-lg px-8 py-3 shadow-lg hover:shadow-xl"
              >
                <Link to="/services" className="flex items-center space-x-2">
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <a href="tel:+10000000000" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  <span>Call Now</span>
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <a 
                  href="https://wa.me/0000000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  <span>WhatsApp</span>
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-12">
              <div className="flex items-center space-x-2 bg-white text-foreground p-3 rounded-lg shadow-md">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span className="text-sm font-medium">Verified Properties</span>
              </div>
              <div className="flex items-center space-x-2 bg-white text-foreground p-3 rounded-lg shadow-md">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span className="text-sm font-medium">Legal Documentation</span>
              </div>
              <div className="flex items-center space-x-2 bg-white text-foreground p-3 rounded-lg shadow-md">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span className="text-sm font-medium">Professional Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

