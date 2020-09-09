import React from 'react';

export const LocationDetail = props => {
  const { name, address, animals, employees } = props.location.state.chosenLocation;

  return (
    <section className="card location">
      <h3 className="card__header location__name">{name}</h3>
      <address className="card__info location__address">{address}</address>
      <h4 className="location__animalsHeader">Animals</h4>
      <ul className="card__info location__animals">
        { animals.map(a => <li key={a.id} className="location__animal">{a.name}</li>) }
      </ul>
      <h4 className="location__employeesHeader">Employees</h4>
      <ul className="card__info location__employees">
        { employees.map(e => <li key={e.id} className="location__employee">{e.name}</li>) }
      </ul>
    </section>
  );
};