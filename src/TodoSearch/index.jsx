import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './styles.css';

const TodoSearch = () => {
   const { searchValue, setSearchValue} = useContext(TodoContext);
   return (
        <input type='text' placeholder='Buscar tareas' className='todo-search'
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        />
    );
}

export { TodoSearch };