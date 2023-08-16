import { useState } from "react";
import { TodoLayout } from './TodoLayout';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoSearchCreate } from './TodoSearchCreate';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos = [
  {text: 'Despertar', completed: false}, 
  {text: 'Comer', completed: false},
  {text: 'Estudiar', completed: false},
  {text:'Dormir', completed: true}
];

const App = () => {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const filteredTodo = todo.text.toLowerCase();
    const searchedValue = searchValue.toLowerCase();
    return filteredTodo.includes(searchedValue);
  });

  const completeTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <>
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
          {searchedTodos.map(todo => <TodoItem 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
            key={todo.text}
          />)}
        </TodoList>
      </TodoLayout>
    </>
   
  );
}

export default App;
