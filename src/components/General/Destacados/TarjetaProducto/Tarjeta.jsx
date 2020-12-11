import './Tarjeta.css';

const Tarjeta = ({titulo, precio}) => {
    return (
        <article className="Tarjeta">
            <img src="https://via.placeholder.com/150/FF0000/FFFFFF?Text=TUVINILO" alt="Mi producto de prueba"/>
            <div>
                <h3>{titulo}</h3>
                <p>${precio}</p>
            </div>
        </article>
    )
}

export default Tarjeta;