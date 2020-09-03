import React from 'react';
import './Kennel.css';
import { Animal } from './animal/Animal';
import { Employee } from './employee/Employee';
import { LocationList } from './location/LocationList';
import { LocationProvider } from './location/LocationProvider';
import { Customer } from './customer/Customer';
import { AnimalProvider } from './animal/AnimalProvider';
import { AnimalList } from './animal/AnimalList';

export const Kennel = () => (
  <>
    <h2>Nashville Kennels</h2>
    <small>Loving care when you're not there.</small>
    <address>
      <div>Visit Us at the Nashville North Location</div>
      <div>500 Puppy Way</div>
    </address>

    <h2>Animals</h2>
    <AnimalProvider>
      <AnimalList />
    </AnimalProvider>

    <h2>Employees</h2>
    <article className="list employees">
      <Employee />
      <Employee />
      <Employee />
    </article>

    <h2>Locations</h2>
    <LocationProvider>
      <LocationList />
    </LocationProvider>

    <h2>Customers</h2>
    <article className="list customers">
      <Customer />
      <Customer />
      <Customer />
      <Customer />
    </article>
  </>
);