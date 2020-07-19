import { clearNote } from "../BLL/history_reducer";
import { clear } from "../BLL/total_reducer";
import Clear from "./Clear";
import { reset } from 'redux-form';
import { connect } from "react-redux";

const mapStateToProps = () => {
  return {}
}

const Clear_Container = connect(mapStateToProps, {clearNote, clear, reset})(Clear);

export default Clear_Container;