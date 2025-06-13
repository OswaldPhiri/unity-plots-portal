import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Ruler, FileText, ArrowRight } from 'lucide-react';
import { getFeaturedPlots } from '@/data/plots';

const FeaturedPlots = () => {
  const featuredPlots = getFeaturedPlots();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium land plots across Malawi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPlots.map((plot) => (
            <Card key={plot.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={plot.imageUrl} 
                    alt={plot.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {plot.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 line-clamp-2">
                  {plot.title}
                </CardTitle>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-sm">{plot.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Ruler className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-sm">{plot.size}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <FileText className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-sm">{plot.type}</span>
                  </div>
                </div>

                <div className="text-2xl font-bold text-primary mb-4">
                  {plot.price}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full">
                  <Link to={`/plots/${plot.id}`}>
                    View Details
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild variant="outline">
            <Link to="/plots" className="flex items-center space-x-2">
              <span>View All Properties</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlots;
