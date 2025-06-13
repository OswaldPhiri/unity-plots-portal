import { Link } from 'react-router-dom';
import { HardHat, ClipboardCheck, Shield, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: HardHat,
    title: 'Site Supervision',
    description: 'Comprehensive on-site supervision to ensure quality and adherence to plans.',
    features: [
      'Daily site inspections',
      'Quality control checks',
      'Progress monitoring',
      'Safety compliance',
      'Workmanship verification'
    ]
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Assurance',
    description: 'Rigorous quality control processes to maintain high construction standards.',
    features: [
      'Material verification',
      'Workmanship standards',
      'Testing and inspection',
      'Defect identification',
      'Quality documentation'
    ]
  },
  {
    icon: Shield,
    title: 'Safety Management',
    description: 'Proactive safety measures to protect workers and ensure compliance.',
    features: [
      'Safety protocols',
      'Risk assessment',
      'Compliance monitoring',
      'Incident prevention',
      'Safety training'
    ]
  },
  {
    icon: Clock,
    title: 'Progress Management',
    description: 'Efficient project tracking and timeline management.',
    features: [
      'Schedule monitoring',
      'Milestone tracking',
      'Resource allocation',
      'Delay prevention',
      'Progress reporting'
    ]
  }
];

const process = [
  {
    step: 1,
    title: 'Project Assessment',
    description: 'Initial evaluation of project requirements and scope.'
  },
  {
    step: 2,
    title: 'Planning & Setup',
    description: 'Development of supervision plan and quality control procedures.'
  },
  {
    step: 3,
    title: 'Active Supervision',
    description: 'Daily monitoring and management of construction activities.'
  },
  {
    step: 4,
    title: 'Quality Control',
    description: 'Continuous quality checks and documentation throughout the project.'
  }
];

const ConstructionSupervisionService = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Construction Supervision</h1>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Ensure your construction project meets the highest standards with our comprehensive supervision services. 
            We oversee every aspect of the building process to guarantee quality and compliance.
          </p>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Supervision Services</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
                  <span>Quality control monitoring and inspection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
                  <span>Regular progress reporting and documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
                  <span>Contractor and subcontractor management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
                  <span>Building code compliance verification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
                  <span>Material quality assurance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
                  <span>Timeline and milestone management</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">1</div>
                  <div>
                    <h3 className="font-semibold">Project Assessment</h3>
                    <p className="text-gray-600">We review project plans and establish supervision requirements</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">2</div>
                  <div>
                    <h3 className="font-semibold">Site Setup</h3>
                    <p className="text-gray-600">We establish monitoring systems and quality control procedures</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">3</div>
                  <div>
                    <h3 className="font-semibold">Regular Monitoring</h3>
                    <p className="text-gray-600">We conduct daily inspections and progress tracking</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">4</div>
                  <div>
                    <h3 className="font-semibold">Quality Assurance</h3>
                    <p className="text-gray-600">We verify work quality and compliance with standards</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg text-center shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Need Construction Supervision?</h2>
            <p className="text-gray-600 mb-6">
              Contact us today to discuss your construction project and how we can help ensure its success.
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
    </Layout>
  );
};

export default ConstructionSupervisionService; 