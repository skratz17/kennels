import React, { useContext, useEffect } from 'react';
import { LocationContext } from './LocationProvider.js';
import { Location } from './Location.js';
import './Location.css';
import { Link } from 'react-router-dom';
import { AnimalContext } from '../animal/AnimalProvider.js';
import { EmployeeContext } from '../employee/EmployeeProvider.js';

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext);
  const { animals, getAnimals } = useContext(AnimalContext);
  const { employees, getEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    getLocations();
    getAnimals();
    getEmployees();
  }, []);

  return (
    <section className="list locations">
      { locations.map(l => {
          l.animals = animals.filter(a => a.locationId === l.id);
          l.employees = employees.filter(e => e.locationId === l.id);

          return (
            <Link key={l.id} className="cardLink" to={{
              pathname: `/locations/${l.id}`,
              state: { chosenLocation: l }
            }}>
              <Location location={l} />
            </Link>
          );
        }
      )}
    </section>
  );
};