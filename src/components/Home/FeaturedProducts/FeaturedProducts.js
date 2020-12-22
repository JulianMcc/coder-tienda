import {useState, useEffect} from 'react';
import ProductCard from '../../General/ProductCard/ProductCard';
import './FeaturedProducts.css';


const FeaturedProducts = () => {
    const [items, setItems] = useState([]);

    const products = [
        {
            id: 1,
            titulo: 'RHCP - Californication',
            precio: 4500,
        },
        {
            id: 2,
            titulo: 'Pearl Jam - Alive',
            precio: 3300,
        },
        {
            id: 3,
            titulo: 'David Bowie - Bowie',
            precio: 4600,
        }
    ]

    const gettingVinilos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 4500)
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