import ProductCard from '../../General/ProductCard/ProductCard';
import './FeaturedProducts.css';


const FeaturedProducts = () => {
    return (
        <section className="Destacados">
            <div className="container">
                <h2>Vinilos del mes</h2>

                <ul>
                    <li><ProductCard titulo="RHCP - Californication" precio="4500" /></li>
                    <li><ProductCard titulo="Pearl Jam - Alive" precio="5300" /></li>
                    <li><ProductCard titulo="David Bowie - Bowie" precio="3750" /></li>
                </ul>
            </div>
        </section>
    )
}

export default FeaturedProducts;