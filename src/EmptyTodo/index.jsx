import './styles.css';

const EmptyTodo = () => {
    return(
        <li>
            <p className='empty-todo'>No se encotraron tareas, puedes añadirlas usando el botón + 🤔👆</p>
        </li>
    );
}

export { EmptyTodo };