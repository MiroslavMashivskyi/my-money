import { connect } from "react-redux";
import { list } from '../BLL/history_reducer';
import { clear } from '../BLL/total_reducer';
import List from './List';

const mapStateToProps = () => {
  return {}
}

const List_Container = connect(mapStateToProps, {list, clear})(List);

export default List_Container;