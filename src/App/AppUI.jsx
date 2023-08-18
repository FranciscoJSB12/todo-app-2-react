import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './styles.css';
import { TodoLayout } from '../TodoLayout';
import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoSearchCreate } from '../TodoSearchCreate';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { EmptyTodo } from '../EmptyTodo';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

const AppUI = () => {
      const {
        loading,
        error, 
        searchedTodos,
        completeTodos,
        deleteTodos,
        openModal, 
        setOpenModal } = useContext(TodoContext);
      return (
        <TodoLayout>
            <TodoCounter/>
            <TodoSearchCreate>
                <TodoSearch/>
                <CreateTodoButton setOpenModal={setOpenModal}/>
            </TodoSearchCreate>
            <TodoList>
                {loading && <TodoLoading/>}
                {error && <TodoError/>}
                {(!loading && searchedTodos.length === 0) && <EmptyTodo/>}
                {searchedTodos.map(todo => <TodoItem 
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodos(todo.text)}
                  onDelete={() => deleteTodos(todo.text)}
                  key={todo.text}
                />)}
            </TodoList>
            {openModal && (
            <Modal>
              <TodoForm/>
            </Modal>)}
        </TodoLayout>
      );
  }
  
export { AppUI };