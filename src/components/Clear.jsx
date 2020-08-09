import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input_Field from './Input_Field';
import validate from '../utils/validator';

const ClearForm = (props) => {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <button className = "button">Clear</button>
      <fieldset className='fieldset'>
        <legend>Date</legend>
        <Field component={Input_Field} type="date" name="date" />
      </fieldset>
    </form>
  )
}

const ClerFormRedux = reduxForm({form: "clear", validate})(ClearForm);

const Clear = (props) => {
  const onSubmit = ({ date }) => {
    props.clearNote(date);
    props.reset("clear");
    props.clear();
  }
  return (
    <ClerFormRedux onSubmit={onSubmit} />
  )
}

export default Clear;