import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { EmployeeContext } from './EmployeeProvider';
import { LocationContext } from '../location/LocationProvider';
import { Employee } from './Employee';

export const EmployeeList = props => {
  const { employees, getEmployees } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext);

  useEffect(() => {
    getEmployees();
    getLocations();
  }, []);

  return (
    <div className="employeesContainer">
      <h2 className="pageHeader">Employees</h2>
      <Link className="btn btn--create employeeFormLink" to="/employees/create">Add Employee</Link>
      <section className="list employees">
        { 
          employees.map(e => {
            const location = locations.find(l => l.id === e.locationId) || {};
            return (
              <Link to={`/employees/${e.id}`} className="cardLink">
                <Employee key={e.id} employee={e} location={location} /> 
              </Link>
            );
          })
        }
      </section>
    </div>
  );
};