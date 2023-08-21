import './styles.css';

const EmptyTodos = () => {
    return(
        <li>
            <p className='empty-todos'>No se encotraron tareas, puedes añadirlas usando el botón + 🤔👆</p>
        </li>
    );
}

export { EmptyTodos };