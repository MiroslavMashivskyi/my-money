import React from 'react';

export const Input = ({ meta, input, ...props }) => {
  return (
    <>
      <input {...input} {...props} className={meta.touched && meta.error ? "add__error" : ""}/>
    </>
  )
}

export const Select = ({ meta, input, ...props }) => {
  return (
    <>
      <select {...input} {...props} className={meta.touched && meta.error ? "add__error" : ""}/>
    </>
  )
}

