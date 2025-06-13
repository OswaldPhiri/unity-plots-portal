import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Users, Award, Target, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'All our transactions are fully documented and verified for your peace of mind.'
    },
    {
      icon: Users,
      title: 'Client-Centered Service',
      description: 'We prioritize our clients\' needs and work tirelessly to exceed expectations.'
    },
    {
      icon: Award,
      title: 'Professional Excellence',
      description: 'Our team brings years of experience in real estate and architectural design.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented Approach',
      description: 'We help you achieve your land ownership and investment goals efficiently.'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Unity Investments
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Many hands make light work - this philosophy drives everything we do at Unity Investments. 
            Established in 2023, we specialize in architectural designs, selling of vacant plots, 
            construction supervision, and calculation of Bills of Quantity.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Story
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Unity Investments was founded in 2023 by <strong>Edward Kambatuwa</strong>, a holder of 
              Bachelor's of Social Sciences in Economics. With about 4 years of experience in Real Estate, 
              Edward brings valuable expertise to help clients navigate the real estate market.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a registered company with the Malawi Government, we currently offer plots in:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Airwing 4 Ways</li>
              <li>Airwing (after Barons Estate)</li>
              <li>Chitedze</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Our working hours are from 07:30 to 16:00, Monday through Friday. We're committed to 
              providing professional service and ensuring all our clients' real estate needs are met 
              with the highest standards of excellence.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary to-accent rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold">Phone:</span>
                    <a href="tel:+265997141858" className="block hover:underline">+265 99 714 1858</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold">Personal Email:</span>
                    <a href="mailto:kambatuwaedward@gmail.com" className="block hover:underline">kambatuwaedward@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold">Company Email:</span>
                    <a href="mailto:unityinvestment0@gmail.com" className="block hover:underline">unityinvestment0@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold">Working Hours:</span>
                    <span className="block">07:30 - 16:00 (Monday - Friday)</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide every decision we make and every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary to-accent rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's work together to find the perfect solution for your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/services" className="flex items-center space-x-2">
                <span>Explore Our Services</span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="tel:+265997141858" className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call Us Today</span>
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a 
                href="https://wa.me/265997141858" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
