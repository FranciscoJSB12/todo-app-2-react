import { useTodos } from './useTodos';
import { TodoLayout } from '../TodoLayout';
import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoSearchCreate } from '../TodoSearchCreate';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { NotFound } from '../NotFound';
import './styles.css';

const App = () => {
      const {
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        setOpenModal,
        loading,
        error, 
        searchedTodos,
        completeTodos,
        deleteTodos,
        openModal,
        addTodo
      } = useTodos();
      
      return (
        <TodoLayout>
            <TodoCounter
                completedTodos={completedTodos}
                totalTodos={totalTodos}
            />
            <TodoSearchCreate>
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <CreateTodoButton 
                    setOpenModal={setOpenModal}
                />
            </TodoSearchCreate>
            <TodoList
                loading={loading}
                error={error}
                searchedTodos={searchedTodos}
                totalTodos={totalTodos}
                searchedText={searchValue}
                onError={() => <TodoError/>}
                onLoading={() => <TodoLoading/>}
                onEmptyTodos={() => <EmptyTodos/>}
                onNotFound={(searchedText) => <NotFound searchedText={searchedText}/>}
                /*render={(todo) => (<TodoItem 
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodos(todo.text)}
                  onDelete={() => deleteTodos(todo.text)}
                  key={todo.text}
                />)}*/>
                {(todo) => (<TodoItem 
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodos(todo.text)}
                  onDelete={() => deleteTodos(todo.text)}
                  key={todo.text}
                />)}
            </TodoList>
            {openModal && (
            <Modal>
              <TodoForm 
                  setOpenModal={setOpenModal}
                  addTodo={addTodo}
              />
            </Modal>)}
        </TodoLayout>
      );
  }
  
export default App;