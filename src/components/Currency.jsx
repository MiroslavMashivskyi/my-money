import React from 'react';

const Currency = (props) => (
  props.currenciesList.map(item => <option value={item} key={item}>{item}</option>)
);

export default Currency;