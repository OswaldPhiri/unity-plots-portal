import { Link } from 'react-router-dom';
import { Building2, Ruler, Palette, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Building2,
    title: 'Residential Design',
    description: 'Custom home designs that reflect your lifestyle and preferences, from modern to traditional styles.',
    features: [
      'Custom floor plans',
      '3D visualizations',
      'Space optimization',
      'Natural lighting design',
      'Sustainable features'
    ]
  },
  {
    icon: Ruler,
    title: 'Commercial Design',
    description: 'Professional designs for commercial spaces that maximize functionality and appeal.',
    features: [
      'Office layouts',
      'Retail spaces',
      'Restaurant designs',
      'Industrial facilities',
      'Mixed-use developments'
    ]
  },
  {
    icon: Palette,
    title: 'Interior Design',
    description: 'Complete interior design solutions that create beautiful and functional spaces.',
    features: [
      'Space planning',
      'Color schemes',
      'Material selection',
      'Furniture layout',
      'Lighting design'
    ]
  },
  {
    icon: Lightbulb,
    title: 'Renovation & Extension',
    description: 'Transform your existing space with our renovation and extension services.',
    features: [
      'Structural assessment',
      'Design integration',
      'Space optimization',
      'Modern upgrades',
      'Permit assistance'
    ]
  }
];

const process = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'We discuss your requirements, budget, and vision for the project.'
  },
  {
    step: 2,
    title: 'Concept Design',
    description: 'We create initial sketches and concepts based on your requirements.'
  },
  {
    step: 3,
    title: 'Design Development',
    description: 'Detailed designs are developed with 3D visualizations and material selections.'
  },
  {
    step: 4,
    title: 'Final Documentation',
    description: 'Complete construction drawings and specifications are prepared.'
  }
];

const ArchitecturalDesignService = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Architectural Designs</h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Transform your vision into reality with our professional architectural design services. 
          From residential homes to commercial buildings, we create functional and aesthetically pleasing designs.
        </p>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Design Services</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Custom residential designs tailored to your needs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Commercial building plans and layouts</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>3D visualizations and renderings</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Sustainable and energy-efficient designs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Building permit assistance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
                <span>Design consultations and revisions</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
            <ol className="space-y-4">
              <li className="flex items-start">
                <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">1</div>
                <div>
                  <h3 className="font-semibold">Initial Consultation</h3>
                  <p className="text-gray-600">We discuss your requirements, budget, and vision for the project</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">2</div>
                <div>
                  <h3 className="font-semibold">Concept Development</h3>
                  <p className="text-gray-600">We create initial sketches and concepts based on your needs</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">3</div>
                <div>
                  <h3 className="font-semibold">Detailed Design</h3>
                  <p className="text-gray-600">We develop comprehensive plans and 3D visualizations</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">4</div>
                <div>
                  <h3 className="font-semibold">Final Approval</h3>
                  <p className="text-gray-600">We refine the design based on your feedback and prepare final documents</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <div className="bg-primary/5 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-6">
            Contact us today to discuss your architectural design needs and get a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitecturalDesignService; 