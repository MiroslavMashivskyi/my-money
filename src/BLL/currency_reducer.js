import { getCarrencies } from "../API/API";

const initilstate = {
  currencies: []
}

const CURRENCIES = "currency_reducer/CURRENCIES";

const currency_reducer = (state = initilstate, action) => {
  switch (action.type) {
    case CURRENCIES:
      state.currencies = action.currencies;
      return {...state};
  
    default:
      return state;
  }
}

export const currencies = (currencies) => ({type:CURRENCIES, currencies});

export const setCurrencies = () => {
  return (dispatch) => {
    getCarrencies().then(data => dispatch(currencies(Object.keys(data.rates))));
  }
}

export default currency_reducer;