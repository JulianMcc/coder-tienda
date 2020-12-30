import './nav.css';
import NavItem from '../NavItem/NavItem';
import NavCart from '../NavCart/NavCart';
import {Link} from 'react-router-dom'

function Nav({titulo, action, qty}) {

    const navItems = [
        {
            texto: 'Rock',
            ruta: '/category/rock',
        },
        {
            texto: 'Indie',
            ruta: '/category/indie',
        },            
        {
            texto: 'Pop',
            ruta: '/category/pop',
        },
        {            
            texto: 'Metal',
            ruta: '/category/metal',
        },
        {            
            texto: 'Folk',
            ruta: '/category/folk',
        },
        {            
            texto: 'Nacional',
            ruta: '/category/nacional',
        },
        {            
            texto: 'Electronica',
            ruta: '/category/electronica',
        },
        
    ]

    return (
    <header>
        <nav>
            <div className="container">
            <h1><Link to="/">{titulo}</Link></h1>
                <ul>
                {
                    navItems.map((section, index) => <NavItem key={index} text={section.texto} url={section.ruta} />)
                }
                
                </ul>
                {
                <NavCart action={action} qty={qty} />     
                }      
            </div>
        </nav>
    </header>
    )
}

export default Nav;