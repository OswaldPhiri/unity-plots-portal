export interface Plot {
  id: string;
  title: string;
  location: 'Emerald Valley' | 'Sunrise Heights' | 'Silver Creek';
  type: 'Residential' | 'Commercial' | 'Mixed Use';
  size: string;
  price: string;
  features: string[];
  description: string;
  status: 'Available' | 'Reserved' | 'Sold';
  imageUrl: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export const plots: Plot[] = [
  {
    id: 'p-001',
    title: 'Modern Residential Plot',
    location: 'Emerald Valley',
    type: 'Residential',
    size: '0.25 Acres',
    price: '$75,000',
    features: [
      'Level building site',
      'Paved access roads',
      'Underground utilities',
      'High-speed internet ready',
      'Landscaped borders'
    ],
    description: 'A premium building site in the sought-after Emerald Valley subdivision. This level plot offers the perfect canvas for a modern family home with all essential utilities already in place.',
    status: 'Available',
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&h=800&q=80',
    coordinates: {
      lat: -13.9897,
      lng: 33.7687
    }
  },
  {
    id: 'p-002',
    title: 'Prime Commercial Corner',
    location: 'Emerald Valley',
    type: 'Commercial',
    size: '0.5 Acres',
    price: '$120,000',
    features: [
      'Corner visibility',
      'High traffic counts',
      'Commercial zoning approved',
      'Adjacent to retail hub',
      'Signage opportunities'
    ],
    description: 'Strategic commercial corner plot with exceptional visibility and easy access. Ideally suited for a professional office building, medical clinic, or retail boutique in a growing economic zone.',
    status: 'Available',
    imageUrl: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&h=800&q=80',
    coordinates: {
      lat: -13.9898,
      lng: 33.7688
    }
  },
  {
    id: 'p-003',
    title: 'Luxury Heights Plot',
    location: 'Sunrise Heights',
    type: 'Residential',
    size: '0.3 Acres',
    price: '$95,000',
    features: [
      'Panoramic views',
      'Gated community',
      'Private security patrol',
      'Underground drainage',
      'Eco-friendly lighting'
    ],
    description: 'Experience elevated living with this stunning residential plot in Sunrise Heights. Enjoy breathtaking panoramic views in a secure, well-managed gated community designed for privacy and comfort.',
    status: 'Available',
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&h=800&q=80',
    coordinates: {
      lat: -13.9899,
      lng: 33.7689
    }
  },
  {
    id: 'p-004',
    title: 'Innovation Hub Plot',
    location: 'Sunrise Heights',
    type: 'Mixed Use',
    size: '0.75 Acres',
    price: '$210,000',
    features: [
      'Smart city infrastructure',
      'Flexible zoning',
      'Public transport access',
      'Green space adjacency',
      'Fibre optic backbone'
    ],
    description: 'A versatile mixed-use development site located within the primary innovation corridor. Perfect for a combination of high-end loft apartments and sustainable co-working spaces.',
    status: 'Available',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&h=800&q=80',
    coordinates: {
      lat: -13.9900,
      lng: 33.7690
    }
  },
  {
    id: 'p-005',
    title: 'Riverfront Retreat',
    location: 'Silver Creek',
    type: 'Residential',
    size: '1.2 Acres',
    price: '$65,000',
    features: [
      'Natural landscapes',
      'Creek frontage',
      'Mature trees',
      'Quiet cul-de-sac',
      'Low density area'
    ],
    description: 'Escapism at its best. This oversized lot in Silver Creek offers a serene riverfront setting with mature trees and a peaceful atmosphere, ideal for a custom vacation retreat or a quiet family home.',
    status: 'Available',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&h=800&q=80',
    coordinates: {
      lat: -13.9901,
      lng: 33.7691
    }
  },
  {
    id: 'p-006',
    title: 'Sun-Drenched Garden Lot',
    location: 'Silver Creek',
    type: 'Residential',
    size: '0.45 Acres',
    price: '$55,000',
    features: [
      'Solar-optimized orientation',
      'Fertile soil',
      'Communal garden access',
      'Paved pedestrian paths',
      'Sustainable community'
    ],
    description: 'Perfect for gardening enthusiasts, this sun-drenched lot in the sustainable Silver Creek community offers fertile soil and excellent solar orientation for an eco-conscious building design.',
    status: 'Available',
    imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&h=800&q=80',
    coordinates: {
      lat: -13.9902,
      lng: 33.7692
    }
  }
];

export const getPlotsByLocation = (location: Plot['location']) => {
  return plots.filter(plot => plot.location === location);
};

export const getFeaturedPlots = () => {
  return plots.filter(plot => plot.status === 'Available').slice(0, 3);
};
