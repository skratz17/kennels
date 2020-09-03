import React from 'react';

export const Location = props => {
  const { name, address } = props.location;

  return (
    <section className="card location">
      <h3 className="card__header location__name">{name}</h3>
      <address className="card__info location__address">{address}</address>
    </section>
  );
};