import './styles.css';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';

const TodoSearchCreate = () => {
    return (
        <div className='todo-search-create'>
            <TodoSearch/>
            <CreateTodoButton/>
        </div>
    );
}

export { TodoSearchCreate }