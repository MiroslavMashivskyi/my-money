import React, { Component } from 'react';

class Currency extends Component {
  componentDidMount() {
    this.props.setCurrencies();
  }

  render() {
    if(this.props.currenciesList.length > 0) {
      return (this.props.currenciesList.map(item => <option value={item} key={item}>{item}</option>));
    }
  
    return null;
  }
}

export default Currency;