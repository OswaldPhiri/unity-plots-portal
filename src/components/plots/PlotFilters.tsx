
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

interface PlotFiltersProps {
  filters: {
    status: string;
    district: string;
    priceRange: string;
    installmentAvailable: string;
  };
  onFilterChange: (key: string, value: string) => void;
  onClearFilters: () => void;
  districts: string[];
}

const PlotFilters = ({ filters, onFilterChange, onClearFilters, districts }: PlotFiltersProps) => {
  const hasActiveFilters = Object.values(filters).some(value => value !== 'all');

  return (
    <div className="bg-card p-6 rounded-lg border space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Filter Properties</h3>
        {hasActiveFilters && (
          <Button variant="outline" size="sm" onClick={onClearFilters}>
            <X className="w-4 h-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <Label htmlFor="status">Status</Label>
          <Select value={filters.status} onValueChange={(value) => onFilterChange('status', value)}>
            <SelectTrigger>
              <SelectValue placeholder="All statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="reserved">Reserved</SelectItem>
              <SelectItem value="sold">Sold</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="district">District</Label>
          <Select value={filters.district} onValueChange={(value) => onFilterChange('district', value)}>
            <SelectTrigger>
              <SelectValue placeholder="All districts" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Districts</SelectItem>
              {districts.map((district) => (
                <SelectItem key={district} value={district}>
                  {district}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="installments">Payment Options</Label>
          <Select value={filters.installmentAvailable} onValueChange={(value) => onFilterChange('installmentAvailable', value)}>
            <SelectTrigger>
              <SelectValue placeholder="All options" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Options</SelectItem>
              <SelectItem value="true">Installments Available</SelectItem>
              <SelectItem value="false">Full Payment Only</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="priceRange">Price Range</Label>
          <Select value={filters.priceRange} onValueChange={(value) => onFilterChange('priceRange', value)}>
            <SelectTrigger>
              <SelectValue placeholder="All prices" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Prices</SelectItem>
              <SelectItem value="under-5m">Under MK 5M</SelectItem>
              <SelectItem value="5m-10m">MK 5M - 10M</SelectItem>
              <SelectItem value="10m-15m">MK 10M - 15M</SelectItem>
              <SelectItem value="over-15m">Over MK 15M</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 pt-2">
          {filters.status !== 'all' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Status: {filters.status}
              <X 
                className="w-3 h-3 cursor-pointer" 
                onClick={() => onFilterChange('status', 'all')}
              />
            </Badge>
          )}
          {filters.district !== 'all' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              District: {filters.district}
              <X 
                className="w-3 h-3 cursor-pointer" 
                onClick={() => onFilterChange('district', 'all')}
              />
            </Badge>
          )}
          {filters.installmentAvailable !== 'all' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {filters.installmentAvailable === 'true' ? 'Installments Available' : 'Full Payment Only'}
              <X 
                className="w-3 h-3 cursor-pointer" 
                onClick={() => onFilterChange('installmentAvailable', 'all')}
              />
            </Badge>
          )}
          {filters.priceRange !== 'all' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Price: {filters.priceRange.replace('-', ' - ').replace('m', 'M').replace('under', 'Under').replace('over', 'Over')}
              <X 
                className="w-3 h-3 cursor-pointer" 
                onClick={() => onFilterChange('priceRange', 'all')}
              />
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};

export default PlotFilters;
