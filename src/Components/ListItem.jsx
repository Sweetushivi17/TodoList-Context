import React, { useContext } from 'react'
import TodoContext from '../Context/TodoContext';


 
 
const ListItem = ({todo}) => {
 const {deleteTodo, editTodo, completeTodo} = useContext(TodoContext);

  return (
    <li className="list-group-item p-2 m-2 rounded-3 ">{todo.text}
      <div className=" btn btn-outline-danger btn-sm rounded-3 float-end m-1 " onClick={()=>editTodo(todo)}>Edit</div>
      <div className=" btn btn-outline-warning btn-sm rounded-3 float-end m-1" onClick={() => deleteTodo(todo.id)} >Delete</div>
      <div className=" btn btn-outline-info btn-sm rounded-3 float-end m-1" onClick={() => completeTodo()} >Starred</div>


    </li>

  );
};

export default ListItem;
