import React, { useState, useEffect, useContext } from 'react';
import { AnimalContext } from '../animal/AnimalProvider';
import { EmployeeContext } from './EmployeeProvider';
import { LocationContext } from '../location/LocationProvider';

export const EmployeeDetail = props => {
    const [ employee, setEmployee ] = useState({});
    const [ animal, setAnimal ] = useState({});
    const [ location, setLocation ] = useState({});

    const { employees, getEmployees, deleteEmployee } = useContext(EmployeeContext);
    const { animals, getAnimals } = useContext(AnimalContext);
    const { locations, getLocations } = useContext(LocationContext);

    useEffect(() => {
        getEmployees()
            .then(getAnimals)
            .then(getLocations);
    }, []);

    useEffect(() => {
        const employee = employees.find(e => e.id === parseInt(props.match.params.employeeId)) || {};
        setEmployee(employee);
    }, [ employees ]);

    useEffect(() => {
        const animal = animals.find(a => a.id === employee.animalId) || {};
        setAnimal(animal);
    }, [ animals ]);

    useEffect(() => {
        const location = locations.find(l => l.id === employee.locationId) || {};
        setLocation(location);
    }, [ locations ]);

    return (
        <section className="card employee">
            <h3 className="card__header employee__name">{employee.name}</h3>
            <p className="card__info employee__workplace">Works at {location.name}</p>
            <p className="card__info employee__animal">Cares for {animal.name}</p>

            <button className="btn btn--delete"
                onClick={() => {
                    deleteEmployee(employee.id)
                        .then(() => props.history.push('/employees'));
                }}
            >Delete Employee</button>
        </section>
    );
};