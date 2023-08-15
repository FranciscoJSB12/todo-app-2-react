import './App.css';
import { TodoLayout } from './TodoLayout';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoSearchCreate } from './TodoSearchCreate';

const defaultTodos = [];

for (let i = 0; i < 1; i++) {
  defaultTodos.push({
    text: 'Clic en el botón de más para añadir tarea',
    completed: false
  });
}

const App = () => {
  return (
    <>
      <TodoLayout>
        <TodoCounter total={3} completed={10}/>
        <TodoSearchCreate/>
        <TodoList>
          {defaultTodos.map((todo, index) => <TodoItem 
            text={todo.text} 
            key={index}
          />)}
        </TodoList>
      </TodoLayout>
    </>
   
  );
}

export default App;
