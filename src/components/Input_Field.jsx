import React from 'react';

const Input_Field = ({ input, type, meta: { touched, error } }) => {

  return (
    <>
      <input {...input} type={type} />
      <br />
      {touched && error && <span className="renderField">{error}</span>}
    </>
  )
} 

export default Input_Field;