import './styles.css';

const TodoCounter = ({ completed, total }) => {
    return (
        <h1 className='todo-counter'>Completaste {completed} de {total} tareas</h1>
    );
}

export { TodoCounter };