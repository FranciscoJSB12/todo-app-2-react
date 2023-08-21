import './styles.css';

const TodoSearch = ({ searchValue, setSearchValue }) => {
   return (
        <input type='text' placeholder='Buscar tareas' className='todo-search'
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        />
    );
}

export { TodoSearch };