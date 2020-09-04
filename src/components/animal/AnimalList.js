import React, { useContext, useEffect } from 'react';
import { AnimalContext } from './AnimalProvider';
import { CustomerContext } from '../customer/CustomerProvider';
import { LocationContext } from '../location/LocationProvider';
import { Animal } from './Animal';

export const AnimalList = props => {
  const { animals, getAnimals } = useContext(AnimalContext);
  const { customers, getCustomers } = useContext(CustomerContext);
  const { locations, getLocations } = useContext(LocationContext);

  useEffect(() => {
    getAnimals();
    getCustomers();
    getLocations();
  }, []);

  return (
    <section className="list animals">
      { animals.map(a => {
          const customer = customers.find(c => c.id === a.customerId) || {};
          const location = locations.find(l => l.id === a.locationId) || {};

          return (
            <Animal key={a.id} 
              animal={a} 
              customer={customer}
              location={location}
            />
          );
        }) 
      }
    </section>
  );
};