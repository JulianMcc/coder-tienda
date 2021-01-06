import {useState, useEffect} from 'react';
import ProductCard from '../../General/ProductCard/ProductCard';
import './FeaturedProducts.css';
import {useParams} from 'react-router-dom';
import products from '../../data/products.json'


const FeaturedProducts = () => {
    const [items, setItems] = useState([]);
    const {category_name} = useParams();

    const gettingVinilos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 420)
    })
    const GetVinilos = async () => {
        try {
            const result = await gettingVinilos;
            setItems(result);
        } catch(error) {
            alert('No podemos mostrar los productos en este momento');
        }
    }
    useEffect(() => {
        GetVinilos();
    }, [])

    return (
        <section className="Destacados">
            <div className="container">
                {
                    items.length ?
                    <>
                        <h2>Vinilos del mes</h2>
                        <ul>
                            {
                                items.map((item, index) => (
                                    <li key={index}>
                                        <ProductCard
                                            id={item.id}
                                            titulo={item.titulo}
                                            precio={item.precio}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </> :
                    <p className="cargando">Encendiendo el tocadiscos...</p>
                }
            </div>
        </section>
    )
}
export default FeaturedProducts;