const validate = values => {
  const errors = {}
  
    if (!values.date) {
      errors.date = 'Field is required';
    } 
    
    if (!values.amount) {
      errors.amount = 'Field is required';
    } else if (values.amount < 1) {
      errors.amount = 'The number must be positive';
    }
    
    if (!values.currency) {
      errors.currency = 'Field is required';
    } 
    
    if (!values.goodsName) {
      errors.goodsName = 'Field is required';
    }

  return errors;
}
export default validate;