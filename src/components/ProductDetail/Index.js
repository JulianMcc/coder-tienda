import {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail';


const Detail = () => {
    const [product, setProduct] = useState(null);
    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1, 
                nombre: "RHCP - Californication",
                foto: "https://www.mixup.com.mx/mixup/ImgMixup/Mixup_big/93624900085.jpg",
                descripcion: "Made in Vietnam.",
                precio: 4500
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
                </div>: 
                <p>Cargando producto...</p>
            }
        </>
    )
}
export default Detail;


