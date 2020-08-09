import { getCarrencies } from '../API/API';

const initialState = {
  collection: [],
  total: {
    amount: null,
    currency: null
  }
}

const ADD = "ADD";
const TOTAL = "TOTAL";
const CLEAR = "CLEAR";

const total_reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      state.collection.push([+action.amount, action.currency]);
      return {...state}

    case TOTAL:
      if(action.i === 0) {
        state.total.amount = 0;
      } 
      state.total.amount += Math.round(((1 / action.from) * action.amount * 100)) / 100;
      state.total.currency = action.currency;
      return {...state}

    case CLEAR:
      state.total.amount = null;
      state.total.currency = null;
      return {...state}

    default:
      return state;
  }
}

export const add = (amount, currency) => ({type: ADD, amount, currency});
export const total = (from, amount, currency, i) => ({type: TOTAL, from, amount, currency, i});
export const clear = () => ({type: CLEAR});
export default total_reducer;

export const converter= (collection, currency) => {
  return (dispatch) => {
    getCarrencies().then(data => {
      collection.forEach((item, i) => {
        dispatch(total(data.rates[item[1]], item[0], currency, i));
      });
    });
  }
}


