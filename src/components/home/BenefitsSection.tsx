
import { Shield, CreditCard, Users, Award } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: CreditCard,
      title: 'Affordable Plots',
      description: 'Competitive prices with flexible payment options to suit your budget.'
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'All transactions are verified and documented for your peace of mind.'
    },
    {
      icon: Users,
      title: 'Flexible Payment Plans',
      description: 'Choose from various payment plans including installment options.'
    },
    {
      icon: Award,
      title: 'Expert Real Estate Service',
      description: 'Professional guidance from experienced real estate experts.'
    }
  ];

  return (
    <section className="py-16 bg-unity-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Real Investments?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to making land ownership accessible and secure for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

