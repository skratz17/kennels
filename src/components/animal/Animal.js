import React from 'react';
import './Animal.css';

export const Animal = ({ animal, customer, location }) => (
  <section className="card animal">
    <h3 className="card__header animal__name">{animal.name}</h3>
    <p className="card__info animal__breed">Breed: {animal.breed}</p>
    <p className="card__info animal__owner">Owner: {customer.name}</p>
    <p className="card__info animal__location">Location: {location.name}</p>
  </section>
);