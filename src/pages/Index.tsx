import React, { useState } from 'react';
import { DesignSystemCard } from '@/components/DesignSystemCard';
import { SearchBar } from '@/components/SearchBar';
import { designSystems } from '@/data/designSystems';
import bgImage from '@/assets/images/bg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns } from '@fortawesome/pro-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { AddYourDS } from '@/components/AddYourDS';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSystems = designSystems.filter(system => 
    system.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    system.institution.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-green-dark  bg-position-[center_top_1rem] md:bg-contain bg-no-repeat font-base" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container mx-auto px-4 py-4 md:px-8 md:py-8">
        
        <header className="mt-8 md:mt-16 mb-12 text-white md:aspect-[2.7/1] flex gap-4 md:gap-8">
          <FontAwesomeIcon icon={faBuildingColumns} className="text-3xl md:text-5xl relative top-1" />
          
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-6xl text-balance font-bold mb-4">The Design Systems of Higher Education</h1>
            <p className="text-lg md:text-3xl mb-8 text-balance font-medium">
              A curated collection of design systems from universities around the world
            </p>
            <p className="text-sm md:text-lg font-medium">Sponsored by <a href="https://amazingrando.com" target="_blank" rel="noopener noreferrer" className="underline">Amazing Rando Design</a></p>
          </div>
        </header>

        <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-6">
          {filteredSystems
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((system, index) => (
              <React.Fragment key={system.url}>
                <DesignSystemCard
                  designSystem={system}
                />
                {index === 1 && <div className="md:hidden col-span-2"><AddYourDS /></div>}
                {index === 3 && <div className="hidden md:block lg:hidden col-span-2"><AddYourDS /></div>}
                {index === 2 && <div className="hidden lg:block col-span-2"><AddYourDS /></div>}
              </React.Fragment>
            ))}
        </main>

        {filteredSystems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No design systems found matching your search.</p>
          </div>
        )}

        <footer className="border-t border-yellow-500/20 py-8 text-center text-white mt-8">
          <p>Build with ❤️ by <a href="https://amazingrando.com" target="_blank" rel="noopener noreferrer" className="underline">Amazing Rando Design</a> • <FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/amazingrando/higher-edu-design-systems" target="_blank" rel="noopener noreferrer" className="underline">View on GitHub</a></p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
