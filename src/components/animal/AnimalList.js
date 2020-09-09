import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AnimalContext } from './AnimalProvider';
import { CustomerContext } from '../customer/CustomerProvider';
import { LocationContext } from '../location/LocationProvider';
import { Animal } from './Animal';

export const AnimalList = props => {
  const { animals, getAnimals, searchTerm } = useContext(AnimalContext);
  const { customers, getCustomers } = useContext(CustomerContext);
  const { locations, getLocations } = useContext(LocationContext);

  const [ filteredAnimals, setFilteredAnimals ] = useState([]);

  useEffect(() => {
    getAnimals();
    getCustomers();
    getLocations();
  }, []);

  useEffect(() => {
    if(searchTerm === '') {
      setFilteredAnimals(animals);
    }
    else {
      const _filteredAnimals = animals.filter(a => a.name.toUpperCase().includes(searchTerm.toUpperCase()));
      setFilteredAnimals(_filteredAnimals);
    }
  }, [ animals, searchTerm ]);

  return (
    <div className="animalsContainer">
      <h2 className="pageHeader">Animals</h2>
      <Link className="btn btn--create animalFormLink" to="/animals/create">Add Animal</Link>
      <section className="list animals">
        { filteredAnimals.map(a => {
            const customer = customers.find(c => c.id === a.customerId) || {};
            const location = locations.find(l => l.id === a.locationId) || {};

            return (
              <Link to={`/animals/${a.id}`} className="cardLink">
                <Animal key={a.id} 
                  animal={a} 
                  customer={customer}
                  location={location}
                />
              </Link>
            );
          }) 
        }
      </section>
    </div>
  );
};