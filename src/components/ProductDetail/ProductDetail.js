import CountButton from '../General/ProductCard/Counter';
import './Detail.css';

const ProductDetail = ({item}) => {

    return (
        <article>
            <article className="product">
                <div className="foto"><img src={item.foto} alt=""/></div>
                <div className="info">
                    <h1><p>{item.titulo}</p>
                    <p>Descripción del producto: {item.descripcion}</p>
                    <p>${item.precio}</p></h1>
                    </div>
                    <CountButton />
            </article>
        </article>
    )
}

export default ProductDetail;