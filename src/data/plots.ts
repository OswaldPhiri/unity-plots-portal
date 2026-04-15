export interface Plot {
  id: string;
  title: string;
  location: 'North Ridge' | 'Greenfield Estate' | 'Lakeside';
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
    id: 'aw4w-001',
    title: 'Premium Residential Plot',
    location: 'North Ridge',
    type: 'Residential',
    size: '0.25 Acres',
    price: 'MWK 15,000,000',
    features: [
      'Fully serviced plot',
      'Access to main road',
      'Security fencing available',
      'Water and electricity ready',
      'Clear title deed'
    ],
    description: 'Prime residential plot in the heart of North Ridge. Perfect for building your dream home with easy access to amenities and main roads.',
    status: 'Available',
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&h=800&q=80',
    coordinates: {
      lat: -13.9897,
      lng: 33.7687
    }
  },
  {
    id: 'aw4w-002',
    title: 'Commercial Development Plot',
    location: 'North Ridge',
    type: 'Commercial',
    size: '0.5 Acres',
    price: 'MWK 25,000,000',
    features: [
      'High visibility location',
      'Commercial zoning',
      'Access to main road',
      'Parking space available',
      'Development plans included'
    ],
    description: 'Strategic commercial plot ideal for retail, office, or mixed-use development. Located on a busy road with high visibility.',
    status: 'Available',
    imageUrl: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&h=800&q=80',
    coordinates: {
      lat: -13.9898,
      lng: 33.7688
    }
  },
  {
    id: 'awe-001',
    title: 'Estate Residential Plot',
    location: 'Greenfield Estate',
    type: 'Residential',
    size: '0.3 Acres',
    price: 'MWK 18,000,000',
    features: [
      'Gated community',
      '24/7 security',
      'Landscaped surroundings',
      'Community amenities',
      'Clear title deed'
    ],
    description: 'Beautiful residential plot in the prestigious Greenfield Estate. Part of a well-planned community with modern amenities.',
    status: 'Available',
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&h=800&q=80',
    coordinates: {
      lat: -13.9899,
      lng: 33.7689
    }
  },
  {
    id: 'awe-002',
    title: 'Mixed-Use Development Plot',
    location: 'Greenfield Estate',
    type: 'Mixed Use',
    size: '0.75 Acres',
    price: 'MWK 35,000,000',
    features: [
      'Mixed-use zoning',
      'High development potential',
      'Access to main roads',
      'Utilities available',
      'Development plans included'
    ],
    description: 'Large mixed-use plot perfect for residential and commercial development. Located in a growing area with high potential.',
    status: 'Available',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&h=800&q=80',
    coordinates: {
      lat: -13.9900,
      lng: 33.7690
    }
  },
  {
    id: 'ch-001',
    title: 'Agricultural Plot',
    location: 'Lakeside',
    type: 'Residential',
    size: '1 Acre',
    price: 'MWK 12,000,000',
    features: [
      'Fertile soil',
      'Water source available',
      'Access road',
      'Agricultural potential',
      'Clear title deed'
    ],
    description: 'Spacious plot in the Lakeside area, perfect for agricultural use or residential development. Features fertile soil and water access.',
    status: 'Available',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&h=800&q=80',
    coordinates: {
      lat: -13.9901,
      lng: 33.7691
    }
  },
  {
    id: 'ch-002',
    title: 'Residential Plot with Garden',
    location: 'Lakeside',
    type: 'Residential',
    size: '0.4 Acres',
    price: 'MWK 14,000,000',
    features: [
      'Large garden space',
      'Peaceful surroundings',
      'Access to main road',
      'Water and electricity ready',
      'Clear title deed'
    ],
    description: 'Beautiful residential plot with ample garden space. Located in a peaceful area of Lakeside with good access to amenities.',
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
