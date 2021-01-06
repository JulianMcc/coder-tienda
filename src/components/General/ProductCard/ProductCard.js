import './ProductCard.css';
import CountButton from './Counter.js';
import {Link} from 'react-router-dom'

const ProductCard = ({titulo, precio, id}) => {


    return (
        <article className="productCard">
            <h1><Link to={`/detail/${id}`}><img src="https://via.placeholder.com/150/FF0000/FFFFFF"/></Link></h1>
            <div>
                <h3> {titulo} </h3>
                <div className="qty">
                <CountButton />
                </div>
                <p>${precio}</p>
            </div>
        </article>
    )
}

export default ProductCard;
