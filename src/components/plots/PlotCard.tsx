
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Ruler, FileText } from 'lucide-react';
import { Plot } from '@/types/plot';

interface PlotCardProps {
  plot: Plot;
}

const PlotCard = ({ plot }: PlotCardProps) => {
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
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={plot.images[0]} 
            alt={plot.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <Badge className={getStatusColor(plot.status)}>
              {plot.status.charAt(0).toUpperCase() + plot.status.slice(1)}
            </Badge>
          </div>
          {plot.installmentAvailable && (
            <div className="absolute top-4 right-4">
              <Badge variant="outline" className="bg-white/90">
                Installments Available
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <CardTitle className="text-xl mb-3 line-clamp-2">
          {plot.title}
        </CardTitle>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm">{plot.location}, {plot.district}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Ruler className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm">{plot.size}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <FileText className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm">{plot.documentationType}</span>
          </div>
        </div>

        <div className="text-2xl font-bold text-primary mb-4">
          {plot.price}
        </div>

        <p className="text-muted-foreground text-sm line-clamp-3">
          {plot.description}
        </p>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full" disabled={plot.status === 'sold'}>
          <Link to={`/plots/${plot.id}`}>
            {plot.status === 'sold' ? 'Sold' : 'View Details'}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlotCard;
