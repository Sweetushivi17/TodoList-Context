import { useContext } from 'react';
import ListItem from './ListItem';
import TodoContext from '../Context/TodoContext';





const ListGroup = () => {

  const {todos } = useContext(TodoContext);

  return (
    <ul className='list-group bg-light '>
      {todos.map((todo) => (<ListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ListGroup;
