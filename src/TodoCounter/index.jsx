import './styles.css';

const TodoCounter = ({ total, completed }) => {
    return (
        <h1 className='todo-counter'>Completaste {total} de {completed} tareas</h1>
    );
}

export { TodoCounter };