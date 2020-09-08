import React, { useContext, useState, useEffect } from 'react';

import { AnimalContext } from './AnimalProvider';
import { CustomerContext } from '../customer/CustomerProvider';
import { LocationContext } from '../location/LocationProvider';
import { FormGroup } from '../ui/forms/FormGroup';
import { Select } from '../ui/forms/Select';

export const AnimalForm = props => {
  const { addAnimal } = useContext(AnimalContext);
  const { customers, getCustomers } = useContext(CustomerContext);
  const { locations, getLocations } = useContext(LocationContext);

  const [ formValues, setFormValues ] = useState({ name: '', breed: '', customerId: '', locationId: '' });

  useEffect(() => {
    getCustomers();
    getLocations();
  }, []);

  const handleFormChange = e => {

  };

  const createAnimal = () => {
    
  };

  return (
    <form className="animalForm" onSubmit={e => {
      e.preventDefault();
      createAnimal();
    }}>
      <h2 className="animalForm__header">New Animal</h2>
      <FormGroup>
        <label htmlFor="name" className="animalForm__label">Name</label>
        <input type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="animalForm__name"
          value={formValues.name}
          onChange={handleFormChange}
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="breed" className="animalForm__label">Breed</label>
        <input type="text"
          name="breed"
          id="breed"
          placeholder="Breed"
          className="animalForm__breed"
          value={formValues.breed}
          onChnage={handleFormChange}
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="customerId" className="animalForm__label">Customer</label>
        <Select className="animalForm__customer"
          name="customerId"
          id="customerId"
          placeholder="Select a customer"
          items={customers}
          value={formValues.customerId}
          onChange={handleFormChange}
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="locationId" className="animalForm__label">Location</label>
        <Select className="animalForm__location"
          name="locationId"
          id="locationId"
          placeholder="Select a location"
          items={locations}
          value={formValues.locationId}
          onChange={handleFormChange}
        />
      </FormGroup>
      <button type="submit" class="btn btn--create">Create Animal</button>
    </form>  
  );
};