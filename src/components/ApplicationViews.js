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
import { EmployeeDetail } from './employee/EmployeeDetail';
import { LocationDetail } from './location/LocationDetail';
import { AnimalDetail } from './animal/AnimalDetail';
import { AnimalSearch } from './animal/AnimalSearch';

export const ApplicationViews = props => (
  <>
    <Route exact path="/logout" render={() => {
      localStorage.removeItem('kennel_customer');
      return <Redirect to="/login" />;
    }}>
    </Route>

    <LocationProvider>
      <AnimalProvider>
        <EmployeeProvider>
          <Route exact path="/">
            <LocationList />
          </Route>
            <Route path="/locations/:locationId(\d+)" component={LocationDetail} />
        </EmployeeProvider>
      </AnimalProvider>
    </LocationProvider>

    <AnimalProvider>
      <LocationProvider>
        <CustomerProvider>
          <Route exact path="/animals">
            <>
              <AnimalSearch />
              <AnimalList />
            </>
          </Route>

          <Route path="/animals/create" render={props => <AnimalForm {...props} />} />
        </CustomerProvider>
      </LocationProvider>

      <Route path="/animals/:animalId(\d+)" component={AnimalDetail} />
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
          <Route path="/employees/create" render={props => <EmployeeForm {...props} />} />

          <Route path="/employees/:employeeId(\d+)" render={
                props => <EmployeeDetail {...props} />
            } />
        </AnimalProvider>
      </LocationProvider>
    </EmployeeProvider>
  </>
);