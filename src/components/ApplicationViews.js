import React from 'react';
import { Route } from 'react-router-dom';

import { LocationProvider } from './location/LocationProvider';
import { AnimalProvider } from './animal/AnimalProvider';
import { CustomerProvider } from './customer/CustomerProvider';
import { EmployeeProvider } from './employee/EmployeeProvider';
import { LocationList } from './location/LocationList';
import { AnimalList } from './animal/AnimalList';
import { CustomerList } from './customer/CustomerList';
import { EmployeeList } from './employee/EmployeeList';

export const ApplicationViews = props => (
  <>
    <LocationProvider>
      <Route exact path="/">
        <LocationList />
      </Route>
    </LocationProvider>

    <AnimalProvider>
      <Route exact path="/animals">
        <AnimalList />
      </Route>
    </AnimalProvider>

    <CustomerProvider>
      <Route exact path="/customers">
        <CustomerList />
      </Route>
    </CustomerProvider>

    <EmployeeProvider>
      <Route exact path="/employees">
        <EmployeeList />
      </Route>
    </EmployeeProvider>
  </>
);