import React from 'react';
import './Animal.css';

export const Animal = props => {
  const { name, breed, customerId, locationId } = props.animal;

  return (
    <section className="card animal">
      <h3 className="card__header animal__name">{name}</h3>
      <p className="card__info animal__breed">Breed: {breed}</p>
      <p className="card__info animal__owner">Owner: {customerId}</p>
      <p className="card__info animal__location">Location: {locationId}</p>
    </section>
  );
};