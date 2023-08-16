import { useState } from "react";
import { TodoLayout } from './TodoLayout';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoSearchCreate } from './TodoSearchCreate';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

/*
const defaultTodos = [
  {text: 'Despertar', completed: false}, 
  {text: 'Comer', completed: true},
  {text: 'Estudiar', completed: false},
  {text:'Dormir', completed: true}
];
localStorage.removeItem('todos_v1');
localStorage.setItem('todos_v1', JSON.stringify(defaultTodos));
*/

const useLocalStorage = (itemName, initialValue) => {
  let defaultItem = JSON.parse(localStorage.getItem(itemName));
  
  if (!defaultItem) {
    defaultItem = initialValue;
    localStorage.setItem(itemName, JSON.stringify(initialValue));
  }

  const [item, setItem] = useState(defaultItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }
  
  return [item, saveItem];
}

const App = () => {
  const [todos, saveTodos] = useLocalStorage('todos_v1', []);
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
    saveTodos(newTodos);
  }

  const deleteTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

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

export default App;
