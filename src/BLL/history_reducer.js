const initialState = {
  // "9999-12-23": [
  //   {
  //     goodsName: "Banana",
  //     amount: 100,
  //     currency: "PLN"
  //   }
  // ],
};

const ADD_NOTE = "ADD_NOTE-NOTE";
const LIST ="LIST";
const CLEAR = "CLEAR";

const history_reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      if (state[action.date]) {
        state[action.date] = [
          ...state[action.date],
          {
            goodsName: action.goodsName,
            amount: action.amount,
            currency: action.currency
          }
        ]
      } else {
        state[action.date] = [
          {
            goodsName: action.goodsName,
            amount: action.amount,
            currency: action.currency
          }
        ]
      }
      return {...state};
    
    case LIST:
      const result = {};
      Object.keys(state)
      .sort()
      .forEach(item => {result[item] = state[item]});
      return result;

    case CLEAR:
      delete state[action.date];
      return {...state};
    
    default:
      return state;
  }
}

export const addNote = (date, amount, currency, goodsName) => (
{type: ADD_NOTE, date, amount, currency, goodsName}
);
export const list = () => ({type: LIST});
export const clearNote = (date) => ({type: CLEAR, date});
 
export default history_reducer;