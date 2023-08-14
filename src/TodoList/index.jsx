import './styles.css';

const TodoList = ({ children }) => {
    return (
        <ul className='todo-list'>{children}</ul>
    );
}

export { TodoList };