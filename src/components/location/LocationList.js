import React, { useContext, useEffect } from 'react';
import { LocationContext } from './LocationProvider.js';
import { Location } from './Location.js';
import './Location.css';

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext);

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <section className="list locations">
      { locations.map(l => <Location key={l.id} location={l} />) }
    </section>
  );
};