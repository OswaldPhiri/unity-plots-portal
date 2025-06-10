import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Land Plot Sales',
      description: 'We offer a wide variety of land plots across Malawi, from residential to commercial and agricultural properties. All our plots come with proper documentation and clear titles.',
      features: [
        'Residential plots in prime locations',
        'Commercial plots for business development',
        'Agricultural land for farming ventures',
        'Investment properties with growth potential'
      ],
      href: '/services/plots'
    },
    {
      title: 'Architectural Design',
      description: 'Our architectural design services help you turn your land into the perfect space for your needs, whether residential, commercial, or industrial.',
      features: [
        'Residential home designs',
        'Commercial building plans',
        'Site planning and layout',
        'Construction consultation'
      ],
      href: '/services/architectural-design'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive real estate solutions tailored to your needs. From land acquisition 
            to architectural design, we're here to help you build your future.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {service.description}
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
                <Button asChild className="mt-4">
                  <Link to={service.href} className="flex items-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary to-accent rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to discuss your needs and discover how we can help you achieve your goals.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Services; 