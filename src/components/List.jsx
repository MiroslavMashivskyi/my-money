import React from 'react';

const List = (props) => {
  const onSubmit = () => {
    props.list(); 
    props.clear();
  }
  
  return (
    <div>
      <button className = "button" onClick = {onSubmit}>List</button>
    </div>
  )
}

export default List;