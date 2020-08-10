import React, { Component } from 'react';

class Currency extends Component {

  componentDidMount() {
    this.props.setCurrencies();
  }

  render() {
    return (this.props.currenciesList.map(item => <option value={item} key={item}>{item}</option>));
  }
}

export default Currency;