import {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail';
import {useParams} from 'react-router-dom';
import products from '../data/products.json'

const Detail = () => {
     const {id} = useParams();
//     const [product, setProduct] = useState(null);
//     const getProduct = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 id,
//                 nombre: titulo,
//                 foto: "https://via.placeholder.com/350/FF0000/FFFFFF",
//                 descripcion,
//                 precio,
//             })
//         }, 420);
//     });

    // useEffect(() => {
    //     getProduct
    //     .then(response => setProduct(response))
    //     .catch(error => console.log(error));
    // }, []);

    const product =  products.filter(disk => disk.id === Number(id));

    return (
        <>
            {
                product ?
                <div className="container">
                    <ProductDetail item={product[0]} />
                    <section>
                        El id del producto seleccionado es {id}
                        <div className="qty">

                        </div>
                    </section>
                </div> : 
                <p>Cargando producto...</p>
            }
        </>
    )
}
export default Detail;