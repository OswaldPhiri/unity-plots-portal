import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Plot } from '@/data/plots';

// Create a simple div icon for markers
const createMarkerIcon = () => {
  return L.divIcon({
    className: 'custom-marker',
    html: '<div style="background-color: #FF0000; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 4px rgba(0,0,0,0.3);"></div>',
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor: [0, -8]
  });
};

interface PlotMapProps {
  plot?: Plot;
  plots?: Plot[];
  className?: string;
  height?: string;
}

const PlotMap = ({ plot, plots, className = '', height = '400px' }: PlotMapProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize map
    const map = L.map(mapContainerRef.current).setView(
      plot ? [plot.coordinates!.lat, plot.coordinates!.lng] : [-13.9897, 33.7687],
      plot ? 15 : 12
    );

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add markers
    const markerIcon = createMarkerIcon();
    if (plot) {
      L.marker([plot.coordinates!.lat, plot.coordinates!.lng], { icon: markerIcon })
        .addTo(map)
        .bindPopup(plot.title)
        .openPopup();
    } else if (plots) {
      plots.forEach((p) => {
        if (p.coordinates) {
          L.marker([p.coordinates.lat, p.coordinates.lng], { icon: markerIcon })
            .addTo(map)
            .bindPopup(`
              <div class="p-2">
                <h3 class="font-bold">${p.title}</h3>
                <p class="text-sm">${p.location}</p>
                <p class="text-sm font-semibold text-accent">${p.price}</p>
              </div>
            `);
        }
      });
    }

    mapRef.current = map;

    return () => {
      map.remove();
    };
  }, [plot, plots]);

  return (
    <div
      ref={mapContainerRef}
      className={`w-full rounded-lg overflow-hidden shadow-lg ${className}`}
      style={{ height }}
    />
  );
};

export default PlotMap; 