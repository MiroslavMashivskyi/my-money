import Currency from './Currency';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    currenciesList: state.currencies.currencies 
  }
}

const Currency_Container = connect(mapStateToProps)(Currency);

export default Currency_Container;