import './styles.css';

const TodoCounter = ({ completedTodos, totalTodos }) => {
    return (
        <h1 className='todo-counter'>Completaste {completedTodos} de {totalTodos} tareas</h1>
    );
}

export { TodoCounter };