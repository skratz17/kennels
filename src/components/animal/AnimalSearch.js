import React, { useContext } from 'react';

import { AnimalContext } from './AnimalProvider';

export const AnimalSearch = props => {
  const { setSearchTerm, searchTerm } = useContext(AnimalContext);

  return (
    <div className="animalSearch">
      <input type="text" 
        className="animalSearch__input" 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)}
      />
    </div>
  );
};