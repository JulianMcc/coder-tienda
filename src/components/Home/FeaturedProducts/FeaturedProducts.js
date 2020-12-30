import {useState, useEffect} from 'react';
import ProductCard from '../../General/ProductCard/ProductCard';
import './FeaturedProducts.css';
import {useParams} from 'react-router-dom';

const FeaturedProducts = () => {
    const [items, setItems] = useState([]);
    const {category_name} = useParams();

    const products = [
        {
            id: 1,
            cat: 'Rock',
            titulo: 'RHCP - Californication',
            precio: 4500,
        },
        {
            id: 2,
            cat: 'Rock',
            titulo: 'Pearl Jam - Alive',
            precio: 3300,
        },
        {
            id: 3,
            cat: 'Metal',
            titulo: 'Nickelback - Curb',
            precio: 4600,
        },
        {
            id: 4,
            cat: 'Nacional',
            titulo: 'Bajofondo - Mardulce',
            precio: 4000,
        }
    ]

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