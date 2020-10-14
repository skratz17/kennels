import React, { useContext, useState, useEffect } from 'react';

import { AnimalContext } from './AnimalProvider';
import { CustomerContext } from '../customer/CustomerProvider';
import { LocationContext } from '../location/LocationProvider';
import { FormGroup } from '../ui/forms/FormGroup';
import { Select } from '../ui/forms/Select';

export const AnimalForm = props => {
  const { animals, getAnimals, addAnimal, updateAnimal } = useContext(AnimalContext);
  const { customers, getCustomers } = useContext(CustomerContext);
  const { locations, getLocations } = useContext(LocationContext);

  const [ formValues, setFormValues ] = useState({ name: '', breed: '', customer_id: '', location_id: '' });

  const isEditMode = props.match.params.hasOwnProperty('animal_id');

  useEffect(() => {
    getAnimals();
    getCustomers();
    getLocations();
  }, []);

  useEffect(() => {
    if(isEditMode) {
      const animal = animals.find(a => a.id === parseInt(props.match.params.animal_id)) || {};
      setFormValues(animal);
    }
  }, [ animals ]);

  const handleFormChange = e => {
    const field = e.target.name;
    let value = e.target.value;
    if(field === 'customer_id' || field === 'location_id') value = parseInt(value);

    setFormValues(prevFormValues => ({
      ...prevFormValues,
      [field]: value
    }));
  };

  const createAnimal = () => {
    if(validateFormValues()) {
      if(isEditMode) {
        updateAnimal(formValues)
          .then(() => props.history.push('/animals'));
      }
      else {
        addAnimal(formValues)
          .then(() => props.history.push('/animals'));
      }
    }
    else {
      alert('You have to fill out all fields bro');
    }
  };

  const validateFormValues = () => {
    const { name, breed, customer_id, location_id } = formValues;
    return name && breed && customer_id && location_id;
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
          onChange={handleFormChange}
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="customer_id" className="animalForm__label">Customer</label>
        <Select className="animalForm__customer"
          name="customer_id"
          id="customer_id"
          placeholder="Select a customer"
          items={customers}
          value={formValues.customer_id}
          onChange={handleFormChange}
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="location_id" className="animalForm__label">Location</label>
        <Select className="animalForm__location"
          name="location_id"
          id="location_id"
          placeholder="Select a location"
          items={locations}
          value={formValues.location_id}
          onChange={handleFormChange}
        />
      </FormGroup>
      <button type="submit" className="btn btn--create">Create Animal</button>
    </form>  
  );
};