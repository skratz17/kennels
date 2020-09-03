import React, { useContext, useEffect } from 'react';
import { CustomerContext } from './CustomerProvider';
import { Customer } from './Customer';

export const CustomerList = props => {
  const { customers, getCustomers } = useContext(CustomerContext);

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <section className="list customers">
      { customers.map(c => <Customer key={c.id} customer={c} />) }
    </section>
  );
};