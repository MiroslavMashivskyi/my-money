import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from './Input';
import require from '../utils/validator';

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

const ClearForm = (props) => {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <button className = "button">Clear</button>
      <Field component={Input} type="date" name="date" validate={require}/>
    </form>
  )
}

const ClerFormRedux = reduxForm({form: "clear"})(ClearForm);

export default Clear;