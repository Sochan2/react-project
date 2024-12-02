import React, {useState} from 'react'

export const EditTodoForm = ({editTodo,task}) => {
  const [value, setValue] = useState(task.task)
  const handleInputChange = (e) => {
    setValue(e.target.value); 
  };//after you change the form, always call this function. 
 const  handleSubmit = e =>{
   e.preventDefault();
   editTodo(value, task.id);
   setValue(""); 
  
 }
  return (
    
   <form className = "todoForm" onSubmit = {handleSubmit}>
     
     <input className="todoInput" type="text" value ={value} onChange={handleInputChange} /> 
     <button className="todoBtn" type="submit">Update tasks</button>
   </form>
  );
}
