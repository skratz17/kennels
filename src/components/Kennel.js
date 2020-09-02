import React from 'react';
import './Kennel.css';
import { Animal } from './animal/Animal';
import { Location } from './location/Location';

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

    <h2>Locations</h2>
    <article className="list locations">
      <Location />
      <Location />
    </article>
  </>
);