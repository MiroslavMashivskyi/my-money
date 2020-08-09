import React from 'react';

const Select_Field = ({ input, meta: { touched, error }, ...props }) => {
  
  return (
    <>
      <select {...input} {...props} />
      <br />
      {touched && error && <span className="renderField">{error}</span>}
    </>
  )
} 

export default Select_Field;