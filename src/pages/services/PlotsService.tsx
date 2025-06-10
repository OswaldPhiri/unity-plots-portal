import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, CreditCard, MapPin } from 'lucide-react';

const PlotsService = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Verified Properties',
      description: 'All our plots come with proper documentation and clear titles, ensuring a secure investment.'
    },
    {
      icon: CreditCard,
      title: 'Flexible Payment Plans',
      description: 'Choose from various payment options that suit your budget and timeline.'
    },
    {
      icon: MapPin,
      title: 'Prime Locations',
      description: 'Strategic locations across Malawi, from residential to commercial and agricultural areas.'
    },
    {
      icon: CheckCircle,
      title: 'Legal Support',
      description: 'Full legal documentation and support throughout the purchase process.'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Land Plot Sales
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find your perfect plot of land in Malawi. We offer a wide variety of properties 
            with flexible payment options and complete legal documentation.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Available Plots Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Available Plots
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Browse our selection of available plots across Malawi. From residential to commercial 
            properties, find the perfect location for your needs.
          </p>
          <Button size="lg" asChild>
            <Link to="/plots" className="flex items-center space-x-2">
              <span>View All Plots</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Process Section */}
        <div className="bg-muted rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse Plots</h3>
              <p className="text-muted-foreground">
                Explore our available plots and find the perfect location for your needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="text-muted-foreground">
                Get in touch to discuss your requirements and available payment options.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Your Plot</h3>
              <p className="text-muted-foreground">
                Complete the purchase with our support and receive all necessary documentation.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary to-accent rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Perfect Plot?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to discuss your requirements and start your journey to land ownership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/plots">Browse Plots</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlotsService; 