
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Ruler, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At Unity Investments, we offer comprehensive solutions for your real estate and 
            architectural needs. Our professional services are designed to make your dreams a reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Land Plot Sales Service */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center pb-8">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-10 h-10 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">Land Plot Sales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-center">
                Secure your future with our carefully selected land plots across Malawi. 
                We offer affordable, verified properties with flexible payment options.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Verified and legally documented properties</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Flexible installment payment plans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Prime locations across Malawi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Professional guidance throughout the process</span>
                </div>
              </div>

              <Button asChild className="w-full">
                <Link to="/services/land-plot-sales" className="flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Architectural Design Service */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center pb-8">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Ruler className="w-10 h-10 text-accent-foreground" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">Architectural Design</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-center">
                Transform your vision into reality with our professional architectural design services. 
                We create functional and beautiful spaces tailored to your needs.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Custom residential and commercial designs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">3D visualizations and floor plans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Building permits and approvals assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Project management and supervision</span>
                </div>
              </div>

              <Button asChild className="w-full">
                <Link to="/services/architectural-design" className="flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16 bg-unity-light-gray rounded-lg p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your real estate or architectural needs. 
            Our team is ready to help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+265997141858">Call Now</a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
