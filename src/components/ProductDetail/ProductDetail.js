import CountButton from '../General/ProductCard/Counter';
import './Detail.css';
import {useHistory} from 'react-router-dom';

const ProductDetail = ({item}) => {
    const IrAlCarrito = () => {
        const history = useHistory();
        let goCart = () => {
            history.push("/Carrito");
            }
    }
    return (
        <article>
            <article className="product">
                <div className="foto"><img src={item.foto} alt=""/></div>
                <div className="info">
                    <h1><p>{item.titulo}</p>
                    <p>Descripción del producto: {item.descripcion}</p>
                    <p>${item.precio}</p></h1>
                    </div>
                    <h1 onClick={ goCart }><CountButton /></h1>
            </article>
        </article>
    )
}

export default ProductDetail;