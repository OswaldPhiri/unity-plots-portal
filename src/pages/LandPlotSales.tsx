
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  FileText, 
  CreditCard, 
  Shield, 
  CheckCircle, 
  Phone, 
  MessageCircle,
  ArrowLeft
} from 'lucide-react';

const LandPlotSales = () => {
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
            Land Plot Sales
          </h1>
          <p className="text-xl text-muted-foreground">
            Secure your future with premium land plots in high-growth locations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why Choose Our Land Plots?
              </h2>
              <p className="text-muted-foreground mb-6">
                We offer carefully selected, verified land plots in prime locations. 
                Our commitment to transparency and legal compliance ensures your investment is secure.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Legally verified properties</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Prime locations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <span>Flexible payment plans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <span>Complete documentation</span>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">What We Offer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-primary" />
                      <span>Verified Properties</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      All our land plots undergo thorough verification to ensure clear titles 
                      and legal compliance before being offered to clients.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <CreditCard className="w-5 h-5 text-primary" />
                      <span>Flexible Payments</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We offer installment payment plans to make land ownership accessible 
                      to everyone, with terms that suit your financial situation.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-primary" />
                      <span>Complete Documentation</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We handle all paperwork including title deeds, transfer documents, 
                      and any required approvals to ensure a smooth transaction.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>Professional Guidance</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our experienced team provides expert guidance throughout the entire 
                      process, from selection to final ownership transfer.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Process Section */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Process</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Badge variant="outline" className="mt-1">1</Badge>
                  <div>
                    <h4 className="font-semibold">Consultation</h4>
                    <p className="text-muted-foreground">
                      We discuss your needs, budget, and preferred locations
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Badge variant="outline" className="mt-1">2</Badge>
                  <div>
                    <h4 className="font-semibold">Plot Selection</h4>
                    <p className="text-muted-foreground">
                      We present suitable options based on your requirements
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Badge variant="outline" className="mt-1">3</Badge>
                  <div>
                    <h4 className="font-semibold">Site Visit</h4>
                    <p className="text-muted-foreground">
                      We arrange visits to shortlisted properties
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Badge variant="outline" className="mt-1">4</Badge>
                  <div>
                    <h4 className="font-semibold">Documentation</h4>
                    <p className="text-muted-foreground">
                      We handle all legal paperwork and verification
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Badge variant="outline" className="mt-1">5</Badge>
                  <div>
                    <h4 className="font-semibold">Ownership Transfer</h4>
                    <p className="text-muted-foreground">
                      Final payment and official ownership transfer
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
                <CardTitle>Get Started Today</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Ready to secure your land? Contact us now for a free consultation.
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

            {/* Info Card */}
            <Card>
              <CardHeader>
                <CardTitle>Why Land Investment?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Appreciating asset value</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Future development potential</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Security for your family</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Passive income opportunity</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LandPlotSales;
