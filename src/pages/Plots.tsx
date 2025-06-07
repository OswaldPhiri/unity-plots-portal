
import { useState, useMemo } from 'react';
import Layout from '@/components/layout/Layout';
import PlotCard from '@/components/plots/PlotCard';
import PlotFilters from '@/components/plots/PlotFilters';
import { mockPlots } from '@/data/plots';

const Plots = () => {
  const [filters, setFilters] = useState({
    status: 'all',
    district: 'all',
    priceRange: 'all',
    installmentAvailable: 'all'
  });

  const districts = [...new Set(mockPlots.map(plot => plot.district))];

  const filteredPlots = useMemo(() => {
    return mockPlots.filter(plot => {
      if (filters.status !== 'all' && plot.status !== filters.status) return false;
      if (filters.district !== 'all' && plot.district !== filters.district) return false;
      if (filters.installmentAvailable !== 'all') {
        const hasInstallments = plot.installmentAvailable;
        if (filters.installmentAvailable === 'true' && !hasInstallments) return false;
        if (filters.installmentAvailable === 'false' && hasInstallments) return false;
      }
      
      // Price range filter (simplified - in real app you'd parse the actual price)
      if (filters.priceRange !== 'all') {
        const priceText = plot.price.toLowerCase();
        switch (filters.priceRange) {
          case 'under-5m':
            if (!priceText.includes('4,') && !priceText.includes('3,') && !priceText.includes('2,') && !priceText.includes('1,')) return false;
            break;
          case '5m-10m':
            if (!priceText.includes('5,') && !priceText.includes('6,') && !priceText.includes('7,') && !priceText.includes('8,') && !priceText.includes('9,')) return false;
            break;
          case '10m-15m':
            if (!priceText.includes('10,') && !priceText.includes('11,') && !priceText.includes('12,') && !priceText.includes('13,') && !priceText.includes('14,') && !priceText.includes('15,')) return false;
            break;
          case 'over-15m':
            if (!priceText.includes('15,') && !priceText.includes('16,') && !priceText.includes('17,') && !priceText.includes('18,') && !priceText.includes('19,') && !priceText.includes('20,')) return false;
            break;
        }
      }
      
      return true;
    });
  }, [filters]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters({
      status: 'all',
      district: 'all',
      priceRange: 'all',
      installmentAvailable: 'all'
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Available Properties
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore our collection of premium land plots across Malawi
          </p>
        </div>

        <div className="space-y-8">
          <PlotFilters 
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
            districts={districts}
          />

          <div className="flex justify-between items-center">
            <p className="text-muted-foreground">
              Showing {filteredPlots.length} of {mockPlots.length} properties
            </p>
          </div>

          {filteredPlots.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPlots.map((plot) => (
                <PlotCard key={plot.id} plot={plot} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No properties found
              </h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters to see more results
              </p>
              <button 
                onClick={handleClearFilters}
                className="text-primary hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Plots;
