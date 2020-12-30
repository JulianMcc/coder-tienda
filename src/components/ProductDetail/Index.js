import {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail';
import {useParams} from 'react-router-dom';

const Detail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: id, 
                nombre: "Vinilo",
                foto: "https://via.placeholder.com/350/FF0000/FFFFFF",
                descripcion: "Made in Vietnam.",
                precio: 999
            })
        }, 420);
    });

    useEffect(() => {
        getProduct
        .then(response => setProduct(response))
        .catch(error => console.log(error));
    }, []);

    return (
        <>
            {
                product ?
                <div className="container">
                    <ProductDetail item={product} />
                    <section>
                        El id del producto seleccionado es {id}
                    </section>
                </div> : 
                <p>Cargando producto...</p>
            }
        </>
    )
}
export default Detail;


