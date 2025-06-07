
export interface Plot {
  id: string;
  title: string;
  location: string;
  district: string;
  size: string;
  price: string;
  status: 'available' | 'sold' | 'reserved';
  documentationType: string;
  installmentAvailable: boolean;
  description: string;
  features: string[];
  images: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  createdAt: string;
  updatedAt: string;
}
