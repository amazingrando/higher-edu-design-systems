
import React, { useState } from 'react';
import { DesignSystemCard } from '@/components/DesignSystemCard';
import { SearchBar } from '@/components/SearchBar';
import { designSystems } from '@/data/designSystems';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSystems = designSystems.filter(system => 
    system.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    system.institution.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Higher Education Design Systems</h1>
          <p className="text-xl text-muted-foreground mb-8">
            A curated collection of design systems from universities around the world
          </p>
          <div className="max-w-xl mx-auto mb-8">
            <SearchBar onSearch={setSearchTerm} />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSystems.map((system) => (
            <DesignSystemCard
              key={system.url}
              name={system.name}
              url={system.url}
              institution={system.institution}
            />
          ))}
        </div>

        {filteredSystems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No design systems found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
