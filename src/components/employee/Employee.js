import React from 'react';
import './Employee.css';

export const Employee = props => {
  const { name, locationId } = props.employee;

  return (
    <section className="card employee">
      <h3 className="card__header employee__name">{name}</h3>
      <p className="card__info employee__workplace">{locationId}</p>
    </section>
  );
};