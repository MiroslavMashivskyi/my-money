import { converter } from "../BLL/total_reducer"
import { connect } from "react-redux"
import Total from "./Total"
import { reset } from 'redux-form';

const mapStateToProps = (state) => {
  return {
    collection: state.total.collection
  }
}


const Total_Container = connect(mapStateToProps, {converter, reset})(Total);

export default Total_Container;