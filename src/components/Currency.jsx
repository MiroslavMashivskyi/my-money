import React from 'react';

const Currency = ({ currenciesList }) => {
  return (
    currenciesList.map(item => <option value={item} key={item}>{item}</option>)
  );
}

export default Currency;