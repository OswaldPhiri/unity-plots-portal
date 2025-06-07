
import { Plot } from '@/types/plot';

export const mockPlots: Plot[] = [
  {
    id: '1',
    title: 'Prime Residential Plot - Lilongwe',
    location: 'Area 25, Lilongwe',
    district: 'Lilongwe',
    size: '0.5 hectares',
    price: 'MK 8,500,000',
    status: 'available',
    documentationType: 'Title Deed',
    installmentAvailable: true,
    description: 'Beautiful residential plot in the heart of Lilongwe, perfect for building your dream home. Located in a secure and developed area with access to electricity and water.',
    features: [
      'Electricity connection available',
      'Water connection nearby',
      'Tarred road access',
      'Secure neighborhood',
      'Schools and hospitals nearby'
    ],
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800'
    ],
    coordinates: {
      lat: -13.9626,
      lng: 33.7741
    },
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Commercial Plot - Blantyre City',
    location: 'Mandala, Blantyre',
    district: 'Blantyre',
    size: '1200 sqm',
    price: 'MK 15,000,000',
    status: 'available',
    documentationType: 'Title Deed',
    installmentAvailable: true,
    description: 'Strategic commercial plot in Blantyre business district. Ideal for office buildings, shops, or mixed-use development.',
    features: [
      'Prime commercial location',
      'High foot traffic area',
      'All utilities available',
      'Public transport access',
      'Banking facilities nearby'
    ],
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800'
    ],
    coordinates: {
      lat: -15.7861,
      lng: 35.0058
    },
    createdAt: '2024-01-10',
    updatedAt: '2024-01-10'
  },
  {
    id: '3',
    title: 'Agricultural Land - Dedza',
    location: 'Dedza Rural',
    district: 'Dedza',
    size: '5 hectares',
    price: 'MK 6,000,000',
    status: 'available',
    documentationType: 'TA Letter',
    installmentAvailable: true,
    description: 'Fertile agricultural land perfect for farming. Rich soil suitable for various crops including maize, tobacco, and vegetables.',
    features: [
      'Fertile soil',
      'Natural water source',
      'Good drainage',
      'Easy access road',
      'Farming community nearby'
    ],
    images: [
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'
    ],
    createdAt: '2024-01-12',
    updatedAt: '2024-01-12'
  },
  {
    id: '4',
    title: 'Residential Plot - Mzuzu',
    location: 'Chibanja, Mzuzu',
    district: 'Mzuzu',
    size: '0.3 hectares',
    price: 'MK 4,500,000',
    status: 'reserved',
    documentationType: 'Title Deed',
    installmentAvailable: false,
    description: 'Well-located residential plot in growing Mzuzu suburb. Quiet neighborhood with beautiful views.',
    features: [
      'Quiet residential area',
      'Mountain views',
      'Good soil for gardening',
      'Access to main road',
      'Growing community'
    ],
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'
    ],
    createdAt: '2024-01-08',
    updatedAt: '2024-01-14'
  }
];
