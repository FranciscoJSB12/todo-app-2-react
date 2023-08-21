import './styles.css';

const TodoList = (props) => {
    const renderFunc = props.children || props.render;

    return (
        <ul className='todo-list'>
            {props.loading && props.onLoading()}
            {props.error && props.onError()}
            {(!props.loading && props.totalTodos === 0) && props.onEmptyTodos()}
            {(!!props.totalTodos && !props.searchedTodos.length) && props.onNotFound(props.searchedText)}
            {props.searchedTodos.map(renderFunc)}
        </ul>
    );
}

export { TodoList };