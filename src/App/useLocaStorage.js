import { useState, useEffect } from 'react';

const useLocalStorage = (itemName, initialValue) => {
    
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
      try {
        setTimeout(() => {
          let defaultItem = JSON.parse(localStorage.getItem(itemName));
          if (!defaultItem) {
            defaultItem = initialValue;
            localStorage.setItem(itemName, JSON.stringify(initialValue));
          } else {
            saveItem(defaultItem);
          }
          setLoading(false);
        }, 3000);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error);
      }
    }, []);
    
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
    
    return {item, 
            saveItem,
            loading,
            error};
}

export { useLocalStorage };

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