
import React, { useState } from 'react';
import { DesignSystemCard } from '@/components/DesignSystemCard';
import { SearchBar } from '@/components/SearchBar';
import { designSystems } from '@/data/designSystems';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

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

        <div className="text-center bg-accent/20 rounded-lg p-8 mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">Have a Design System to Share?</h2>
          <p className="text-muted-foreground mb-6">
            If your institution has a design system that's not listed here, we'd love to add it to our collection.
            Help us grow this resource for the higher education community.
          </p>
          <Button onClick={() => window.open('https://github.com/your-repo/your-project/issues/new', '_blank')}>
            <Plus className="mr-2" />
            Submit Your Design System
          </Button>
        </div>

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
