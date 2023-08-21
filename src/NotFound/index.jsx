import './styles.css';

const NotFound = ({ searchedText }) => {
    return (
        <li className='not-found'>No hay coincidencias para {searchedText}</li>
    );
}

export { NotFound }