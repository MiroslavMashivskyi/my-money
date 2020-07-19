import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Currency_Container from './Currency_Container';
import require from '../utils/validator';
import { Input, Select } from './Input';

const Add = (props) => {
  const onSubmit = ({ date, amount, currency, goodsName, reset }) => {
    props.addNote(date, amount, currency, goodsName);
    props.add(amount, currency);
    props.reset('add');
    props.clear();
  }
  
  return (
    <AddReduxForm onSubmit={onSubmit}/>
  );
}

const AddForm = (props) => {
  return (
    <form className="form add" onSubmit={props.handleSubmit}>
      <button className = "button">Add</button>
      <Field component={Input} name="date" type="date" validate={require}/>
      <Field component={Input} name="amount" type="number" validate={require}/>
      <Field component={Select} name="currency" validate={require}>
        <option></option>
        <Currency_Container />
      </Field>
      <Field component={Input} name="goodsName" type="text" validate={require}/>
    </form>
  )
}

const AddReduxForm = reduxForm({form: "add"})(AddForm);
export default Add;