import { addNote } from '../BLL/history_reducer';
import { connect } from "react-redux"
import Add from "./Add"
import { add, clear } from '../BLL/total_reducer';
import { reset } from 'redux-form';

const mapStateToProps = () => {
  return {}
}

const Add_Container = connect(mapStateToProps, {addNote, add, clear, reset})(Add)

export default Add_Container;