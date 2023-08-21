import { useState } from 'react';
import { useLocalStorage } from './useLocaStorage';

const useTodos = () => {

    const { item: todos, 
            saveItem: saveTodos, 
            loading, 
            error } = useLocalStorage('todos_v1', []);
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

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

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false
        });
        saveTodos(newTodos);
    }

    return {
                loading,
                error, 
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodos,
                deleteTodos, 
                openModal,
                setOpenModal,
                addTodo
            }
}

export { useTodos };