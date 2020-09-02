import React from 'react';
import './Kennel.css';
import { Animal } from './animal/Animal';
import { Employee } from './employee/Employee';
import { Location } from './location/Location';
import { Customer } from './customer/Customer';

export const Kennel = () => (
  <>
    <h2>Nashville Kennels</h2>
    <small>Loving care when you're not there.</small>
    <address>
      <div>Visit Us at the Nashville North Location</div>
      <div>500 Puppy Way</div>
    </address>

    <h2>Animals</h2>
    <article className="list animals">
      <Animal />
      <Animal />
      <Animal />
    </article>

    <h2>Employees</h2>
    <article className="list employees">
      <Employee />
      <Employee />
      <Employee />
    </article>

    <h2>Locations</h2>
    <article className="list locations">
      <Location />
      <Location />
    </article>

    <h2>Customers</h2>
    <article className="list customers">
      <Customer />
      <Customer />
      <Customer />
      <Customer />
    </article>
  </>
);