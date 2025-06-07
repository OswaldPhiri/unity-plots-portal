
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MapPin, 
  Ruler, 
  FileText, 
  Phone, 
  MessageCircle, 
  ArrowLeft,
  Calendar,
  CheckCircle
} from 'lucide-react';
import { mockPlots } from '@/data/plots';

const PlotDetail = () => {
  const { id } = useParams<{ id: string }>();
  const plot = mockPlots.find(p => p.id === id);

  if (!plot) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Plot Not Found</h1>
            <Button asChild>
              <Link to="/plots">Back to Plots</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'reserved':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'sold':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="outline" asChild className="mb-4">
            <Link to="/plots" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Properties</span>
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative h-96 overflow-hidden rounded-lg">
              <img 
                src={plot.images[0]} 
                alt={plot.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className={getStatusColor(plot.status)}>
                  {plot.status.charAt(0).toUpperCase() + plot.status.slice(1)}
                </Badge>
              </div>
            </div>
            
            {plot.images.length > 1 && (
              <div className="grid grid-cols-3 gap-2">
                {plot.images.slice(1).map((image, index) => (
                  <div key={index} className="h-24 overflow-hidden rounded">
                    <img 
                      src={image} 
                      alt={`${plot.title} ${index + 2}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Plot Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-4">
                {plot.title}
              </h1>
              
              <div className="text-3xl font-bold text-primary mb-6">
                {plot.price}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-5 h-5 mr-3 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">{plot.location}</div>
                    <div className="text-sm">{plot.district}</div>
                  </div>
                </div>
                
                <div className="flex items-center text-muted-foreground">
                  <Ruler className="w-5 h-5 mr-3 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Size</div>
                    <div className="text-sm">{plot.size}</div>
                  </div>
                </div>
                
                <div className="flex items-center text-muted-foreground">
                  <FileText className="w-5 h-5 mr-3 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Documentation</div>
                    <div className="text-sm">{plot.documentationType}</div>
                  </div>
                </div>
                
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-5 h-5 mr-3 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Payment</div>
                    <div className="text-sm">
                      {plot.installmentAvailable ? 'Installments Available' : 'Full Payment'}
                    </div>
                  </div>
                </div>
              </div>

              {plot.installmentAvailable && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-green-800 font-medium">Flexible Payment Plans Available</span>
                  </div>
                  <p className="text-green-700 text-sm mt-1">
                    Contact us to discuss payment options that work for your budget.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Buttons */}
            <div className="space-y-3">
              <Button size="lg" className="w-full" asChild>
                <a 
                  href="https://wa.me/265997141858?text=I'm interested in the property: {{plot.title}}" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </Button>
              
              <Button size="lg" variant="outline" className="w-full" asChild>
                <a href="tel:+265997141858" className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call for Details</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Description and Features */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {plot.description}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Property Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {plot.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PlotDetail;
