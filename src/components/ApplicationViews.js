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
import { EmployeeForm } from './employee/EmployeeForm';

export const ApplicationViews = props => (
  <>
    <LocationProvider>
      <Route exact path="/">
        <LocationList />
      </Route>
    </LocationProvider>

    <AnimalProvider>
      <LocationProvider>
        <CustomerProvider>
          <Route exact path="/animals">
            <AnimalList />
          </Route>
        </CustomerProvider>
      </LocationProvider>
    </AnimalProvider>

    <CustomerProvider>
      <Route exact path="/customers">
        <CustomerList />
      </Route>
    </CustomerProvider>

    <EmployeeProvider>
      <LocationProvider>
        <AnimalProvider>
          <Route exact path="/employees">
            <EmployeeList />
          </Route>
          <Route exact path="/employees/create">
            <EmployeeForm />
          </Route>
        </AnimalProvider>
      </LocationProvider>
    </EmployeeProvider>
  </>
);