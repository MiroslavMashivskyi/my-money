import { connect } from 'react-redux';
import Display from './Display';

const mapStateToProps = (state) => {
  return {
    history: state.history,
    total: state.total
  }
}

const Display_Container = connect(mapStateToProps)(Display);

export default Display_Container;