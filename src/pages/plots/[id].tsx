import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Home, Building2, Trees, CheckCircle2, Phone, Mail } from 'lucide-react';
import { plots } from '@/data/plots';
import PlotMap from '@/components/maps/PlotMap';
import Layout from '@/components/layout/Layout';

const PlotDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const plot = plots.find(p => p.id === id);

  if (!plot) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Plot Not Found</h1>
          <p className="mb-8">The plot you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/services/plots"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Plots
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20">
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 relative z-10">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Plots
            </button>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-sm mb-4">
                <MapPin className="w-4 h-4" />
                <span>{plot.location}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{plot.title}</h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold">{plot.price}</span>
                <span className="text-lg">{plot.size}</span>
              </div>
              <div className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-medium">
                {plot.status}
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={plot.imageUrl}
                  alt={plot.title}
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder-plot.jpg';
                  }}
                />
              </div>

              {/* Description */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-gray-600 leading-relaxed">{plot.description}</p>
              </div>

              {/* Features */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {plot.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Map */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Location</h2>
                <PlotMap plot={plot} height="400px" />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Card */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                <p className="text-gray-600 mb-6">
                  Interested in this plot? Contact us to schedule a site visit or learn more.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+265888123456"
                    className="flex items-center gap-3 text-gray-600 hover:text-accent transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+265 888 123 456</span>
                  </a>
                  <a
                    href="mailto:info@unityinvestments.mw"
                    className="flex items-center gap-3 text-gray-600 hover:text-accent transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>info@unityinvestments.mw</span>
                  </a>
                </div>
                <Link
                  to="/contact"
                  className="mt-6 block w-full bg-accent hover:bg-accent/90 text-white text-center px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Send Inquiry
                </Link>
              </div>

              {/* Similar Plots */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Similar Plots</h2>
                <div className="space-y-4">
                  {plots
                    .filter(p => p.location === plot.location && p.id !== plot.id)
                    .slice(0, 3)
                    .map(similarPlot => (
                      <Link
                        key={similarPlot.id}
                        to={`/plots/${similarPlot.id}`}
                        className="block p-4 rounded-lg border border-gray-200 hover:border-accent transition-colors"
                      >
                        <h3 className="font-semibold mb-2">{similarPlot.title}</h3>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>{similarPlot.size}</span>
                          <span className="text-accent font-semibold">{similarPlot.price}</span>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlotDetail; 