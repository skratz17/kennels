import React from 'react';
import './Employee.css';

export const Employee = ({ employee, location }) => {
  return (
    <section className="card employee">
      <h3 className="card__header employee__name">{employee.name}</h3>
      <p className="card__info employee__workplace">{location.name}</p>
    </section>
  );
};