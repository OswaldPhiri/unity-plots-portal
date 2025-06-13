import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

interface PlotFiltersProps {
  filters: {
    status: string;
    location: string;
    type: string;
    priceRange: string;
  };
  onFilterChange: (key: string, value: string) => void;
  onClearFilters: () => void;
  locations: string[];
  types: string[];
}

const PlotFilters = ({ filters, onFilterChange, onClearFilters, locations, types }: PlotFiltersProps) => {
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
              <SelectItem value="Available">Available</SelectItem>
              <SelectItem value="Reserved">Reserved</SelectItem>
              <SelectItem value="Sold">Sold</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="location">Location</Label>
          <Select value={filters.location} onValueChange={(value) => onFilterChange('location', value)}>
            <SelectTrigger>
              <SelectValue placeholder="All locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="type">Property Type</Label>
          <Select value={filters.type} onValueChange={(value) => onFilterChange('type', value)}>
            <SelectTrigger>
              <SelectValue placeholder="All types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {types.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
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
          {filters.location !== 'all' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Location: {filters.location}
              <X 
                className="w-3 h-3 cursor-pointer" 
                onClick={() => onFilterChange('location', 'all')}
              />
            </Badge>
          )}
          {filters.type !== 'all' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Type: {filters.type}
              <X 
                className="w-3 h-3 cursor-pointer" 
                onClick={() => onFilterChange('type', 'all')}
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
