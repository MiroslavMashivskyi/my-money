import { currenciesNames } from "../API/currencies";

const initilstate = {
  currencies: currenciesNames,
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

// export const setCurrencies = () => async (dispatch) => {
//   const responce = await getCarrencies();
//   responce.then(data => dispatch(currencies(Object.keys(data.rates))));
// }

export default currency_reducer;