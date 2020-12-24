import './nav.css';
import NavItem from '../NavItem/NavItem';
import NavCart from '../NavCart/NavCart';

function Nav({titulo, action, qty}) {

    const navItems = [
        {
            texto: 'Rock',
            ruta: '',
        },
        {
            texto: 'Metal',
            ruta: '',
        },            
        {
            texto: 'Pop',
            ruta: '',
        },
        {            
            texto: 'Indie',
            ruta: '',
        },
        
    ]

    return (
    <header>
        <nav>
            <div className="container">
                <h1>{titulo}</h1>

                <ul>
                {
                    navItems.map((section, index) => <NavItem key={index} text={section.texto} />)
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