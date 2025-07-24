
import React from 'react';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (term: string) => void;
  className?: string;
}

export const SearchBar = ({ onSearch, className }: SearchBarProps) => {
  return (
    <div className={`relative ${className || ''}`}>
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
      <div id="search-description" className="sr-only">
        Search by design system name or institution name
      </div>
    </div>
  );
};
