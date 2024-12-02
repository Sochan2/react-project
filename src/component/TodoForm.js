//task enter form component

import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("") //start from empty
  const handleInputChange = (e) => {
    setValue(e.target.value); 
    console.log(value);
  };//after you change the form, always call this function. 
 const handleSubmit = e =>{
   e.preventDefault();
   addTodo(value);
   setValue(""); 
 } //if you submit the form, always call this function

  return (
    
   <form className = "todoForm" onSubmit = {handleSubmit}>
     
     <input className="todoInput" type="text" value = {value} onChange={ handleInputChange} /> 
     <button className="todoBtn" type="submit">Add new tasks</button>
   </form>
  );
}
