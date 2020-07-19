import history_reducer, { addNote, list, clearNote } from "./history_reducer";

const initialState = {
  "9999-12-23": [
    {
      goodsName: "Banana",
      amount: 1,
      currency: "USD"
    }
  ],
  "2222-02-01": [
    {
      goodsName: "Salo",
      amount: 100,
      currency: "UAH"
    }
  ]
};

test("ADD_NOTE new date should work correctly", () => {

  const action = addNote("1111-11-11", 1, "USD", "banana");

  const newState = history_reducer(initialState, action);

  expect(newState["1111-11-11"][0].goodsName).toBe("banana");
  expect(newState["1111-11-11"][0].currency).toBe("USD");
  expect(newState["1111-11-11"][0].amount).toBe(1);
})

test("ADD_NOTE old date should work correctly", () => {

  const action = addNote("9999-12-23", 10, "PLN", "blabla");

  const newState = history_reducer(initialState, action);

  expect(newState["9999-12-23"][1].goodsName).toBe("blabla");
  expect(newState["9999-12-23"][1].currency).toBe("PLN");
  expect(newState["9999-12-23"][1].amount).toBe(10);
})

test("LIST should work correctly", () => {
  const action = list();

  const newState = history_reducer(initialState, action);

  expect(Object.keys(newState)).toEqual(["1111-11-11", "2222-02-01", "9999-12-23"]);
})

test("CLEAR should work correctly", () => {
  const action = clearNote("2222-02-01");

  const newState = history_reducer(initialState, action);

  expect(newState["2222-02-01"]).toBe(undefined);
})
