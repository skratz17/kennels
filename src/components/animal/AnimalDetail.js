import React, { useContext, useState, useEffect } from 'react';

import { AnimalContext } from './AnimalProvider';

export const AnimalDetail = props => {
  const { getAnimalById } = useContext(AnimalContext);

  const [ animal, setAnimal ] = useState({ location: '', customer: '' });

  useEffect(() => {
    getAnimalById(props.match.params.animalId)
      .then(setAnimal);
  }, []);

  return (
    <section className="card animal">
      <h3 className="card__header animal__name">{animal.name}</h3>
      <p className="card__info animal__breed">Breed: {animal.breed}</p>
      <p className="card__info animal__owner">Owner: {animal.customer.name}</p>
      <p className="card__info animal__location">Location: {animal.location.name}</p>
    </section>
  );
};