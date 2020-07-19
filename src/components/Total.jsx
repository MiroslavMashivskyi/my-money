import React from 'react';
import Currency_Container from './Currency_Container';
import { Field, reduxForm } from 'redux-form';
import { Select } from './Input';
import require from '../utils/validator';

const Total = (props) => {

  const onSubmit = ({ currency }) => {
    props.converter(props.collection, currency, props.amount);
    props.reset("total");
  }
  return (
    <TotalReduxForm onSubmit={onSubmit} />
  )
}

const TotalForm = (props) => {
  return (
    <form className = "form" onSubmit={props.handleSubmit}>
      <button className="button">Total</button>
      <Field component={Select} name="currency" validate={require}>
      <option></option>
        <Currency_Container />
      </Field>
    </form>
  )
}

const TotalReduxForm = reduxForm({form: "total"})(TotalForm);

export default Total;