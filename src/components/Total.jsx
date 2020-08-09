import React from 'react';
import Currency_Container from './Currency_Container';
import { Field, reduxForm } from 'redux-form';
import Select_Field from './Select_Field';
import validate from '../utils/validator';

const TotalForm = (props) => {
  return (
    <form className = "form" onSubmit={props.handleSubmit}>
      <button className="button">Total</button>
      <fieldset className='fieldset'>
        <legend>Currency</legend>
        <Field component={Select_Field} name="currency">
          <option></option>
          <Currency_Container />
        </Field>
      </fieldset>
    </form>
  )
}

const TotalReduxForm = reduxForm({form: "total", validate})(TotalForm);

const Total = (props) => {
  const onSubmit = ({ currency }) => {
    props.converter(props.collection, currency, props.amount);
    props.reset("total");
  }
  return (
    <TotalReduxForm onSubmit={onSubmit} />
  )
}

export default Total;