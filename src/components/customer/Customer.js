import React from 'react';
import './Customer.css';

export const Customer = props => {
  const { name, address } = props.customer;

  return (
    <section className="card customer">
      <h3 className="card__header customer__name">{name}</h3>
      <address className="card__info customer__address">{address}</address>
    </section>
  );
};