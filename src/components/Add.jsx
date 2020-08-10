import React from 'react';
import { reduxForm, Field} from 'redux-form';
import Currency_Container from './Currency_Container';
import validate from '../utils/validator';
import Input_Field from './Input_Field';
import Select_Field from './Select_Field';

const AddForm = (props) => {
  
  return (
    <form className="form add" onSubmit={props.handleSubmit}>
      <button className = "button">Add</button>
      <fieldset className="fieldset">
        <legend>Date</legend>
        <Field component={Input_Field} name="date" type="date" />
      </fieldset>
      <fieldset className="fieldset">
        <legend>Amount</legend>
        <Field component={Input_Field} name="amount" type="number" />
      </fieldset>
      <fieldset className="fieldset">
        <legend>Currency</legend>
        <Field component={Select_Field} name="currency">
          <option></option>
          <Currency_Container />
        </Field>
      </fieldset>
      <fieldset className="fieldset">
        <legend>Name</legend>
        <Field component={Input_Field} name="goodsName" type="text" />
      </fieldset>
    </form>
  )
}

const AddReduxForm = reduxForm({form: "add", validate})(AddForm);

const Add = (props) => {
  const onSubmit = ({ date, amount, currency, goodsName }) => {
    props.addNote(date, amount, currency, goodsName);
    props.add(amount, currency);
    props.reset('add');
    props.clear();
  }
  
  return (
    <AddReduxForm onSubmit={onSubmit}/>
  );
}

export default Add;