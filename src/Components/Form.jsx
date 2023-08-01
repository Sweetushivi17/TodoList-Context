import React, { useContext, useEffect, useState } from 'react';
import TodoContext from '../Context/TodoContext';



const Form = () => {

  const { saveTodo, edit , updateTodo} = useContext(TodoContext);

  const [text, setText] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
  if(edit.isEdit){
   updateTodo(edit.todo.id , text);
  }else{
    saveTodo(text);
  }
    setText(""); 
  }
 useEffect(() => {
  setText(edit.todo.text); 
 },[edit]);

  return (
    <form onSubmit ={handleSubmit} >
      <input type="text" className='form-control rounded-3 my-2 p-3'  required placeholder='Write Something Here...' 
     onChange={(e) => setText(e.target.value)} value={text} />
      <button className='btn btn-outline-success my-2 p-2 w-100 '>Save </button>
      
    </form>
  )
}

export default Form;
