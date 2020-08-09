import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducer as formReducer } from 'redux-form';
import history_reducer from "./history_reducer";
import total_reducer from "./total_reducer";
import thunk from "redux-thunk";
import currency_reducer from "./currency_reducer";
import {composeWithDevTools} from 'redux-devtools-extension'

let reducers = combineReducers({
  form: formReducer,
  history: history_reducer,
  total: total_reducer,
  currencies: currency_reducer
})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

window.store = store;
export default store;