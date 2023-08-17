import { useState } from 'react';
import { useLocalStorage } from './useLocaStorage';
import { AppUI } from './AppUI';

const App = () => {
  const { item: todos, 
          saveItem: saveTodos, 
          loading, 
          error } = useLocalStorage('todos_v1', []);
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
    <AppUI
        loading={loading}
        error={error}
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        completeTodos={completeTodos}
        deleteTodos={deleteTodos}
    />
  );
}

export default App;

