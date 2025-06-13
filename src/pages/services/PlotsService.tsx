import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Home, Building2, Trees, ArrowRight, CheckCircle2, Map } from 'lucide-react';
import { plots, getPlotsByLocation, Plot } from '@/data/plots';
import PlotMap from '@/components/maps/PlotMap';
import Layout from '@/components/layout/Layout';

const PlotCard = ({ plot }: { plot: Plot }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
    <div className="relative h-48 bg-gray-200">
      <img
        src={plot.imageUrl}
        alt={plot.title}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = '/placeholder-plot.jpg';
        }}
      />
      <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
        {plot.status}
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
        <MapPin className="w-4 h-4" />
        <span>{plot.location}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{plot.title}</h3>
      <div className="flex items-center gap-4 mb-4">
        <span className="text-accent font-bold">{plot.price}</span>
        <span className="text-gray-600">{plot.size}</span>
      </div>
      <p className="text-gray-600 mb-4 line-clamp-2">{plot.description}</p>
      <div className="space-y-2 mb-4">
        {plot.features.slice(0, 3).map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle2 className="w-4 h-4 text-accent" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <Link
        to={`/plots/${plot.id}`}
        className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium"
      >
        View Details
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
);

const LocationSection = ({ location, plots }: { location: Plot['location']; plots: Plot[] }) => (
  <section className="py-12">
    <div className="container mx-auto px-4">
      <div className="flex items-center gap-2 mb-8">
        <MapPin className="w-6 h-6 text-accent" />
        <h2 className="text-3xl font-bold">{location}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plots.map((plot) => (
          <PlotCard key={plot.id} plot={plot} />
        ))}
      </div>
    </div>
  </section>
);

const PlotsService = () => {
  const [activeLocation, setActiveLocation] = useState<Plot['location']>('Airwing 4 Ways');
  const [showMap, setShowMap] = useState(false);
  const locations: Plot['location'][] = ['Airwing 4 Ways', 'Airwing Estate', 'Chitedze'];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20">
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Land Plot Sales
              </h1>
              <p className="text-xl mb-8">
                Discover prime plots in Lilongwe's most sought-after locations. From residential to commercial,
                we offer carefully selected properties with clear titles and excellent development potential.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Contact Us
                </Link>
                <button
                  onClick={() => setShowMap(!showMap)}
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  <Map className="w-5 h-5" />
                  {showMap ? 'Show List' : 'Show Map'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Plots?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Clear Title Deeds</h3>
                <p className="text-gray-600">
                  All our plots come with verified title deeds, ensuring secure ownership and peace of mind.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategic Locations</h3>
                <p className="text-gray-600">
                  Carefully selected plots in prime areas with excellent access to amenities and infrastructure.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trees className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Development Ready</h3>
                <p className="text-gray-600">
                  Plots are surveyed, serviced, and ready for immediate development with all necessary permits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Navigation */}
        <section id="locations" className="sticky top-0 z-10 bg-white shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto gap-4 py-4">
              {locations.map((location) => (
                <button
                  key={location}
                  onClick={() => setActiveLocation(location)}
                  className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
                    activeLocation === location
                      ? 'bg-accent text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Map View */}
        {showMap && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <PlotMap plots={getPlotsByLocation(activeLocation)} height="600px" />
            </div>
          </section>
        )}

        {/* Plots by Location */}
        {!showMap && locations.map((location) => (
          <LocationSection
            key={location}
            location={location}
            plots={getPlotsByLocation(location)}
          />
        ))}

        {/* CTA Section */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Plot?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a site visit or learn more about our available plots.
              Our team is ready to help you make the right investment decision.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="tel:+265888123456"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PlotsService; 