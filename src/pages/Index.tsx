
import React, { useState } from 'react';
import { DesignSystemCard } from '@/components/DesignSystemCard';
import { SearchBar } from '@/components/SearchBar';
import { designSystems } from '@/data/designSystems';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import bgImage from '@/assets/images/bg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuildingColumns,
} from '@fortawesome/pro-regular-svg-icons';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSystems = designSystems.filter(system => 
    system.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    system.institution.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-green-dark bg-contain bg-no-repeat font-base" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container mx-auto px-8 py-8">
        <header className="mt-16 mb-12 text-white aspect-[2.7/1] flex gap-8">
          <FontAwesomeIcon icon={faBuildingColumns} className="text-5xl relative top-1" />
          <div className="max-w-2xl">
            <h1 className="text-6xl text-balance font-bold mb-4">The Design Systems of Higher Education</h1>
            <p className="text-3xl mb-8 text-balance">
              A curated collection of design systems from universities around the world
            </p>
            {/* <div className="max-w-xl mx-auto mb-8">
              <SearchBar onSearch={setSearchTerm} />
              </div> */}
          </div>
        </header>

        {/* <div className="text-center bg-accent/20 rounded-lg p-8 mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3">Have a Design System to Share?</h2>
          <p className="text-muted-foreground mb-6">
            If your institution has a design system that's not listed here, we'd love to add it to our collection.
            Help us grow this resource for the higher education community.
          </p>
          <Button onClick={() => window.open('https://github.com/your-repo/your-project/issues/new', '_blank')}>
            <Plus className="mr-2" />
            Submit Your Design System
          </Button>
        </div> */}

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
