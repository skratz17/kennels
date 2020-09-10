import React, { useState } from 'react';

export const AnimalContext = React.createContext();

export const AnimalProvider = props => {
  const [ animals, setAnimals ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');

  const getAnimals = () => {
    return fetch('http://localhost:8088/animals')
      .then(res => res.json())
      .then(setAnimals);
  };

  const getAnimalById = id => {
    return fetch(`http://localhost:8088/animals/${id}?_expand=customer&_expand=location`)
      .then(res => res.json());
  };

  const addAnimal = animal => {
    return fetch('http://localhost:8088/animals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(animal)
    })
      .then(getAnimals);
  };

  const deleteAnimal = id => {
    return fetch(`http://localhost:8088/animals/${id}`, {
      method: 'DELETE'
    })
      .then(getAnimals);
  };

  const updateAnimal = animal => {
    return fetch(`http://localhost:8088/animals/${animal.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(animal)
    })
      .then(getAnimals);
  };

  return (
    <AnimalContext.Provider value={{
      animals, getAnimals, getAnimalById, addAnimal, searchTerm, setSearchTerm, deleteAnimal, updateAnimal
    }}>
      {props.children}
    </AnimalContext.Provider>
  );
};