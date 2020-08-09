import Currency from './Currency';
import { connect } from 'react-redux';
import { setCurrencies } from '../BLL/currency_reducer';

const mapStateToProps = (state) => {
  return {
    currenciesList: state.currencies.currencies
  }
}

const Currency_Container = connect(mapStateToProps, {setCurrencies})(Currency);

export default Currency_Container;