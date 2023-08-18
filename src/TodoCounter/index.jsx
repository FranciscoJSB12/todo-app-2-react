import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './styles.css';

const TodoCounter = () => {
    const { completedTodos, totalTodos } = useContext(TodoContext);
    return (
        <h1 className='todo-counter'>Completaste {completedTodos} de {totalTodos} tareas</h1>
    );
}

export { TodoCounter };