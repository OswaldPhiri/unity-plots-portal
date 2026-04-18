import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, DraftingCompass, HardHat, Calculator } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Selling of Vacant Plots",
      description: "Access prime residential and commercial plots in strategic locations. We offer secure land ownership with clear titles and comprehensive documentation.",
      icon: "🏡",
      features: [
        "Prime locations in high-growth corridors",
        "Clear land titles and documentation",
        "Flexible payment plans available",
        "Secure land ownership",
        "Strategic investment opportunities",
        "Professional land surveying"
      ],
      link: "/services/plots"
    },
    {
      title: "Architectural Designs",
      description: "Transform your vision into reality with our professional architectural design services. From residential homes to commercial buildings, we create functional and aesthetically pleasing designs.",
      icon: "📐",
      features: [
        "Custom residential designs",
        "Commercial building plans",
        "3D visualizations",
        "Sustainable design solutions",
        "Building permit assistance",
        "Design consultations"
      ],
      link: "/services/architectural-design"
    },
    {
      title: "Construction Supervision",
      description: "Ensure your construction project meets the highest standards with our comprehensive supervision services. We oversee every aspect of the building process to guarantee quality and compliance.",
      icon: "👷",
      features: [
        "Quality control monitoring",
        "Progress reporting",
        "Contractor management",
        "Building code compliance",
        "Material quality assurance",
        "Timeline management"
      ],
      link: "/services/construction-supervision"
    },
    {
      title: "Calculation of Bills of Quantity",
      description: "Get accurate and detailed cost estimates for your construction projects. Our professional quantity surveying services help you plan and budget effectively.",
      icon: "📊",
      features: [
        "Detailed material take-offs",
        "Labor cost estimation",
        "Equipment cost analysis",
        "Comprehensive cost breakdowns",
        "Budget planning assistance",
        "Cost optimization strategies"
      ],
      link: "/services/bills-of-quantity"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive real estate and construction solutions delivered with expertise and precision. 
            We combine professional knowledge with practical experience to bring your projects to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:border-accent/20">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-4 bg-primary hover:bg-primary/90">
                  <Link to={service.link} className="flex items-center space-x-2">
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary to-accent rounded-lg p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transform Your Vision Into Reality
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss your project requirements and discover how our comprehensive services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <a href="tel:+10000000000">Call Us Now</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services; 
