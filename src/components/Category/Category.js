import {useParams} from 'react-router-dom';
import './Category.css'
import '../Home/FeaturedProducts/FeaturedProducts.css';
import ProductCard from '../General/ProductCard/ProductCard'
import products from '../data/products.json'

const Category = () => {
    const {category_name} = useParams();

    const categoriaFiltrada =  products.filter(disk => disk.cat === category_name);

    return (
        <>
            <p>Estos son los discos de {[category_name]}</p>
            
            {
                categoriaFiltrada.map((item, index) => (
                    <li key={index}>
                        <ProductCard
                            id={item.id}
                            titulo={item.titulo}
                            precio={item.precio}
                        />
                    </li>
                ))
            }
            
            
        </>
    )
}
export default Category;