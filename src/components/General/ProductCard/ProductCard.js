import './ProductCard.css';
import CountButton from './Counter.js';


const ProductCard = ({titulo, precio}) => {


    return (
        <article className="productCard">
            <img src="https://via.placeholder.com/150/FF0000/FFFFFF?Text=TU-VINILO" alt="Tu Vinilo"/>
            <div>
                <h3>{titulo}</h3>
                <div className="qty">
                <CountButton />
                </div>
                <p>${precio}</p>
            </div>
        </article>
    )
}

export default ProductCard;
