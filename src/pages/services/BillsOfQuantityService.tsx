import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const BillsOfQuantityService = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Calculation of Bills of Quantity</h1>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Get accurate and detailed cost estimates for your construction projects. 
            Our professional quantity surveying services help you plan and budget effectively.
          </p>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
                  <span>Detailed material take-offs and quantification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
                  <span>Labor cost estimation and analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
                  <span>Equipment and machinery cost calculations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
                  <span>Comprehensive cost breakdowns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
                  <span>Budget planning and cost control</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
                  <span>Cost optimization strategies</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">1</div>
                  <div>
                    <h3 className="font-semibold">Project Review</h3>
                    <p className="text-gray-600">We analyze project plans and specifications</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">2</div>
                  <div>
                    <h3 className="font-semibold">Quantity Take-off</h3>
                    <p className="text-gray-600">We measure and quantify all required materials</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">3</div>
                  <div>
                    <h3 className="font-semibold">Cost Analysis</h3>
                    <p className="text-gray-600">We calculate material, labor, and equipment costs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">4</div>
                  <div>
                    <h3 className="font-semibold">Documentation</h3>
                    <p className="text-gray-600">We prepare detailed Bills of Quantity and cost reports</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg text-center shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Need Bills of Quantity?</h2>
            <p className="text-gray-600 mb-6">
              Contact us today to get accurate cost estimates for your construction project.
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

export default BillsOfQuantityService; 