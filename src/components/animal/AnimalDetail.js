import React, { useContext, useState, useEffect } from 'react';

import { AnimalContext } from './AnimalProvider';
import { Link } from 'react-router-dom';

export const AnimalDetail = props => {
  const { getAnimalById, deleteAnimal } = useContext(AnimalContext);

  const [ animal, setAnimal ] = useState({ location: '', customer: '' });

  useEffect(() => {
    getAnimalById(props.match.params.animal_id)
      .then(setAnimal);
  }, []);

  return (
    <section className="card animal">
      <h3 className="card__header animal__name">{animal.name}</h3>
      <p className="card__info animal__breed">Breed: {animal.breed}</p>
      <p className="card__info animal__owner">Owner: {animal.customer.name}</p>
      <p className="card__info animal__location">Location: {animal.location.name}</p>

      <button className="animal__delete btn btn--delete" 
        onClick={() => {
          deleteAnimal(animal.id)
            .then(() => props.history.push('/animals'));
        }}
      >
        Delete Animal
      </button>
      <Link to={`/animals/edit/${animal.id}`} className="btn btn--edit">Edit Animal</Link>
    </section>
  );
};