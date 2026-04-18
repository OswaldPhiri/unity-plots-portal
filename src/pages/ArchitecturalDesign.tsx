
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Ruler, 
  Building, 
  PenTool, 
  Users, 
  CheckCircle, 
  Phone, 
  MessageCircle,
  ArrowLeft,
  Home,
  Factory
} from 'lucide-react';

const ArchitecturalDesign = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/services" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Services</span>
            </Link>
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Architectural Design
          </h1>
          <p className="text-xl text-muted-foreground">
            Transform your vision into reality with professional architectural design
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Professional Architectural Services
              </h2>
              <p className="text-muted-foreground mb-6">
                Our experienced architects create functional, beautiful, and sustainable designs 
                that bring your vision to life. From concept to completion, we guide you through 
                every step of the design process.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <PenTool className="w-5 h-5 text-primary" />
                  <span>Custom designs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="w-5 h-5 text-primary" />
                  <span>3D visualizations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Project management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Permit assistance</span>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Design Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Home className="w-5 h-5 text-primary" />
                      <span>Residential Design</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Single-family homes</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Multi-family housing</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Renovations & additions</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Interior space planning</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Factory className="w-5 h-5 text-primary" />
                      <span>Commercial Design</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Office buildings</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Retail spaces</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Industrial facilities</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Mixed-use developments</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <PenTool className="w-5 h-5 text-primary" />
                      <span>Design Development</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Concept design</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Detailed drawings</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>3D modeling</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Construction documents</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span>Project Support</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Building permit applications</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Construction administration</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Site supervision</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Quality assurance</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Process Section */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Design Process</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Badge variant="outline" className="mt-1">1</Badge>
                  <div>
                    <h4 className="font-semibold">Initial Consultation</h4>
                    <p className="text-muted-foreground">
                      We discuss your vision, requirements, budget, and timeline
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Badge variant="outline" className="mt-1">2</Badge>
                  <div>
                    <h4 className="font-semibold">Site Analysis</h4>
                    <p className="text-muted-foreground">
                      Comprehensive site evaluation and feasibility study
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Badge variant="outline" className="mt-1">3</Badge>
                  <div>
                    <h4 className="font-semibold">Concept Design</h4>
                    <p className="text-muted-foreground">
                      Initial design concepts and 3D visualizations
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Badge variant="outline" className="mt-1">4</Badge>
                  <div>
                    <h4 className="font-semibold">Design Development</h4>
                    <p className="text-muted-foreground">
                      Detailed drawings, specifications, and materials selection
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Badge variant="outline" className="mt-1">5</Badge>
                  <div>
                    <h4 className="font-semibold">Construction Documentation</h4>
                    <p className="text-muted-foreground">
                      Final construction drawings and permit applications
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Badge variant="outline" className="mt-1">6</Badge>
                  <div>
                    <h4 className="font-semibold">Construction Support</h4>
                    <p className="text-muted-foreground">
                      Ongoing support during construction phase
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle>Start Your Project</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Ready to bring your architectural vision to life? Contact us for a consultation.
                </p>
                <div className="space-y-2">
                  <Button className="w-full" asChild>
                    <a href="tel:+10000000000" className="flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>Call Now</span>
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a 
                      href="https://wa.me/0000000000" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Benefits Card */}
            <Card>
              <CardHeader>
                <CardTitle>Why Choose Our Designs?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Experienced architects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Sustainable design practices</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Cost-effective solutions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Timely project delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Full project support</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArchitecturalDesign;
