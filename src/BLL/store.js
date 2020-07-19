import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducer as formReducer } from 'redux-form';
import history_reducer from "./history_reducer";
import total_reducer from "./total_reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
  form: formReducer,
  history: history_reducer,
  total: total_reducer
})

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store;