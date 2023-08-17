import { TodoLayout } from '../TodoLayout';
import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoSearchCreate } from '../TodoSearchCreate';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import './styles.css';

const AppUI = ({
      loading,
      error, 
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodos,
      deleteTodos }) => {
        
      return (
        <TodoLayout>
          <TodoCounter completed={completedTodos} total={totalTodos} />
          <TodoSearchCreate>
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            <CreateTodoButton/>
          </TodoSearchCreate>
          <TodoList>
            {loading && <li>Cargando, por favor espere...</li>}
            {error && <li>Disculpe, hubo un error</li>}
            {(!loading && searchedTodos.length === 0) && <li>No tienes tareas guardadas, crea la primera con el botón +</li>}
            {searchedTodos.map(todo => <TodoItem 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodos(todo.text)}
              onDelete={() => deleteTodos(todo.text)}
              key={todo.text}
            />)}
          </TodoList>
        </TodoLayout>
      );
  }
  
export { AppUI };