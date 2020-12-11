import Tarjeta from './TarjetaProducto/Tarjeta';
import './Destacados.css';

const Destacados = () => {
    return (
        <section className="Destacados">
            <div className="container">
                <h2>Vinilos del mes</h2>

                <ul>
                    <li><Tarjeta titulo="RHCP - Californication" precio="4500" /></li>
                    <li><Tarjeta titulo="Pearl Jam - Alive" precio="5300" /></li>
                    <li><Tarjeta titulo="David Bowie - Bowie" precio="3750" /></li>
                    <li><Tarjeta titulo="Deftones - White Pony" precio="4100" /></li>
                </ul>
            </div>
        </section>
    )
}

export default Destacados;