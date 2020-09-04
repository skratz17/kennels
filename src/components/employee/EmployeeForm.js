import React, { useState, useContext, useEffect } from 'react';

import { EmployeeContext } from './EmployeeProvider';
import { LocationContext } from '../location/LocationProvider';
import { AnimalContext } from '../animal/AnimalProvider';
import { FormGroup } from '../ui/forms/FormGroup';
import { Select } from '../ui/forms/Select';

export const EmployeeForm = props => {
  const { addEmployee } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext);
  const { animals, getAnimals } = useContext(AnimalContext);

  const [ employeeName, setEmployeeName ] = useState('');
  const [ location, setLocation ] = useState('');
  const [ animal, setAnimal ] = useState('');

  useEffect(() => {
    getLocations();
    getAnimals();
  }, []);

  const createEmployee = () => {
    const employee = {
      name: employeeName,
      locationId: location,
      animalId: animal
    };

    if(employeeName && location && animal) {
      addEmployee(employee)
        .then(() => props.history.push('/employees'));
    } 
    else {
      // todo better validation than this lmao
      alert('dude you gotta fill out all fields')
    }
  };

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>

      <FormGroup>
        <label htmlFor="employeeName" className="employeeForm__label">Employee name:</label>
        <input required autoFocus 
          type="text" 
          className="employeeForm__name" 
          value={employeeName} 
          onChange={e => setEmployeeName(e.target.value)} 
          placeholder="Employee name"
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="location" className="employeeForm__label">Assign to a location:</label>
        <Select placeholder="Choose an employee"
          items={locations}
          value={location}
          onChange={e => setLocation(parseInt(e.target.value))}
          className="employeeForm__location" />
      </FormGroup>

      <FormGroup>
        <label htmlFor="animal" className="employeeForm__label">Caretaker for:</label>
        <Select placeholder="Choose an animal"
          items={animals}
          value={animal}
          onChange={e => setAnimal(parseInt(e.target.value))}
          className="employeeForm__animal" />
      </FormGroup>

      <button className="btn btn--create" 
        type="submit"
        onClick={e => {
          e.preventDefault();
          createEmployee();
        }}>
          Save Employee
      </button>
    </form>
  );
};