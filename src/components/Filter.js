import React from 'react';
import { useData } from './DataContext';

function Filter() {
  const { filter, setFilter } = useData();
  console.log('init filter');

  return (
    <select value={filter} onChange={e => setFilter(e.target.value)}>
      <option value="All">All</option>
      <option value="Fruit">Fruit</option>
      <option value="Vegetable">Vegetable</option>
    </select>
  );
}

export default Filter;