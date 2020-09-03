import React, { useContext, useEffect } from 'react';
import { AnimalContext } from './AnimalProvider';
import { Animal } from './Animal';

export const AnimalList = props => {
  const { animals, getAnimals } = useContext(AnimalContext);

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <section className="list animals">
      { animals.map(a => <Animal key={a.id} animal={a} />) }
    </section>
  );
};