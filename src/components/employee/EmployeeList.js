import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { EmployeeContext } from './EmployeeProvider';
import { Employee } from './Employee';

export const EmployeeList = props => {
  const { employees, getEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div className="employeesContainer">
      <h2 className="pageHeader">Employees</h2>
      <Link className="btn btn--create employeeFormLink" to="/employees/create">Add Employee</Link>
      <section className="list employees">
        { employees.map(e => <Employee key={e.id} employee={e} />) }
      </section>
    </div>
  );
};