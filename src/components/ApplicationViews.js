import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { LocationProvider } from './location/LocationProvider';
import { AnimalProvider } from './animal/AnimalProvider';
import { CustomerProvider } from './customer/CustomerProvider';
import { EmployeeProvider } from './employee/EmployeeProvider';
import { LocationList } from './location/LocationList';
import { AnimalList } from './animal/AnimalList';
import { AnimalForm } from './animal/AnimalForm';
import { CustomerList } from './customer/CustomerList';
import { EmployeeList } from './employee/EmployeeList';
import { EmployeeForm } from './employee/EmployeeForm';

export const ApplicationViews = props => (
  <>
    <Route exact path="/logout" render={() => {
      localStorage.removeItem('kennel_customer');
      return <Redirect to="/login" />;
    }}>
    </Route>

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

          <Route exact path="/animals/create" render={props => <AnimalForm {...props} />} />
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
          <Route exact path="/employees/create" render={props => <EmployeeForm {...props} />} />
        </AnimalProvider>
      </LocationProvider>
    </EmployeeProvider>
  </>
);