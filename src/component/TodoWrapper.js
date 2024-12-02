import React, {useState} from 'react'
import { TodoForm } from './TodoForm';
import {Todo} from './TodoList';
import {v4 as uuidv4} from 'uuid';
import { EditTodoForm } from './TodoEdit';
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]) //todos=value, setTodos function to update infor, useState= empty array.
  const addTodo = todo =>{
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing:false}]) //update todos state.
  } //add array to todo useState. (id, todo, complete or not, edit or not)

  const toggleComplete = id =>{
    setTodos(todos.map(todo =>todo.id ===id ? {...todo,completed: !todo.completed}:todo))
  } // change the state if complete or not

  const deleteTodo = id=>{
    setTodos(todos.filter(todo => todo.id !==id))
  } //change the state id delete.

  const editTodo = id =>{
    setTodos(todos.map(todo => todo.id ===id ? {...todo, isEditing:!todo.isEditing}:todo))
  } //change the edit mode.

  const editTask = (task, id )=>{
    setTodos(todos.map(todo => todo.id===id ? {...todo, task, isEditing: false}:todo ))
  } //afte the edit task reflect to array. 


  
  


  return (
    <div className="TodoWrapper">
      <h1>My To-Do Liist</h1>
         <TodoForm addTodo={addTodo} />
         {todos.map((todo,index) =>(
           todo.isEditing ?(<EditTodoForm editTodo={editTask} key={index} task = {todo} />): (
           <Todo task={todo} key={index}
           toggleComplete ={toggleComplete} deleteTodo={deleteTodo} editTodo ={editTodo}/>
           )
         ))}
 
    </div>
 
  );
}

