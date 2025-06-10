import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, DraftingCompass, Building2, Ruler, Lightbulb } from 'lucide-react';

const ArchitecturalDesignService = () => {
  const services = [
    {
      icon: DraftingCompass,
      title: 'Residential Design',
      description: 'Custom home designs that reflect your lifestyle and preferences, from modern to traditional styles.'
    },
    {
      icon: Building2,
      title: 'Commercial Design',
      description: 'Professional designs for offices, retail spaces, and other commercial properties.'
    },
    {
      icon: Ruler,
      title: 'Site Planning',
      description: 'Comprehensive site analysis and planning to maximize your property\'s potential.'
    },
    {
      icon: Lightbulb,
      title: 'Design Consultation',
      description: 'Expert advice on materials, layouts, and sustainable building practices.'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We discuss your requirements, budget, and vision for the project.'
    },
    {
      step: 2,
      title: 'Concept Design',
      description: 'We create initial design concepts based on your needs and preferences.'
    },
    {
      step: 3,
      title: 'Design Development',
      description: 'Refining the chosen concept with detailed drawings and specifications.'
    },
    {
      step: 4,
      title: 'Final Documentation',
      description: 'Complete construction drawings and documentation for your project.'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Architectural Design Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your land into the perfect space with our professional architectural 
            design services. From concept to construction, we're here to bring your vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-muted rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Our Design Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Why Choose Our Design Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Expert Design Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our team of experienced architects and designers brings years of expertise 
                  to every project. We combine creativity with practical knowledge to create 
                  designs that are both beautiful and functional.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Comprehensive Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From initial consultation to final construction drawings, we provide a 
                  complete design service. We handle everything from concept development 
                  to detailed specifications and documentation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary to-accent rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Design Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to discuss your architectural design needs and schedule a consultation.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ArchitecturalDesignService; 