import React from 'react';
import './Kennel.css';
import { LocationList } from './location/LocationList';
import { LocationProvider } from './location/LocationProvider';
import { AnimalProvider } from './animal/AnimalProvider';
import { AnimalList } from './animal/AnimalList';
import { CustomerProvider } from './customer/CustomerProvider';
import { CustomerList } from './customer/CustomerList';
import { EmployeeProvider } from './employee/EmployeeProvider';
import { EmployeeList } from './employee/EmployeeList';

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
    <EmployeeProvider>
      <EmployeeList />
    </EmployeeProvider>

    <h2>Locations</h2>
    <LocationProvider>
      <LocationList />
    </LocationProvider>

    <h2>Customers</h2>
    <CustomerProvider>
      <CustomerList />
    </CustomerProvider>
  </>
);