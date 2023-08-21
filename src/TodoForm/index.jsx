import { useState } from 'react';
import './styles.css';

const TodoForm = ({ setOpenModal, addTodo }) => {
    const [value, setValue] = useState('');
    
    const saveTodo = (text) => {
        addTodo(text);
        setOpenModal(state => !state);
    }

    return (
        <form 
            className='todo-form'
            onSubmit={(event) => { event.preventDefault() }}
        >
            <label  className='todo-label'>Escribe aquí</label>
            <textarea
                placeholder='Ejemplo: Hacer mercado'
                className='todo-textarea'
                rows={5}
                value={value}
                onChange={(event) => setValue(event.target.value)}
            ></textarea>
            <div className='todo-button-container'>
                <button className='todo-cancel'
                type='button'
                onClick={() => setOpenModal(state => !state)}
                >Cancelar</button>
                <button className='todo-save'
                type='submit'
                onClick={() => saveTodo(value)}
                >Guardar</button>
            </div>
        </form>
    );
}

export { TodoForm };