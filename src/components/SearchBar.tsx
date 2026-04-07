
import React from 'react';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { SelectContent, SelectItem, SelectValue, SelectTrigger, Select } from '@/components/ui/select';

interface SearchBarProps {
  onSearch: (term: string) => void;
  sortBy: 'name' | 'institution';
  onSortChange: (sortBy: 'name' | 'institution') => void;
  className?: string;
}

export const SearchBar = ({ onSearch, sortBy, onSortChange, className }: SearchBarProps) => {
  return (
    <div className={`relative ${className || ''}`}>
      <div className="grid gap-4 md:grid-cols-[2fr_1fr] md:items-end">
        <div>
          <label htmlFor="search-design-systems" className="text-white font-medium uppercase mb-2 block">
            Filter design systems
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" aria-hidden="true" />
            <Input
              id="search-design-systems"
              type="search"
              placeholder="Start typing..."
              className="pl-10 w-full"
              onChange={(e) => onSearch(e.target.value)}
              aria-describedby="search-description"
            />
          </div>
        </div>

        <div>
          <label htmlFor="sort-design-systems" className="text-white font-medium uppercase mb-2 block">
            Sort by
          </label>
          <Select value={sortBy} onValueChange={(value) => onSortChange(value as 'name' | 'institution')}>
            <SelectTrigger>
              <SelectValue placeholder="Select a sort order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Design System Name (A-Z)</SelectItem>
              <SelectItem value="institution">Institution Name (A-Z)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div id="search-description" className="sr-only">
        Search by design system name or institution name
      </div>
    </div>
  );
};
