import React from 'react';

export const Select = ({ className, value, onChange, placeholder, items, name, id }) => {
  return (
    <select className={`select ${className || ''}`}
      id={id}
      name={name}
      value={value}
      onChange={onChange}>
        <option value="" disabled>{placeholder}</option>
        { items.map(item => <option key={item.id} value={item.id}>{item.name}</option>) }
    </select>
  );
};