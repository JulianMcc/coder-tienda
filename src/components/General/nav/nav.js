import './nav.css';
import NavItem from '../NavItem/NavItem';
import NavCart from '../NavCart/NavCart';

function Nav({titulo, action}) {
    return (
    <header>
        <nav>
            <div className="container">
                <h1>{titulo}</h1>

                <ul>
                <NavItem text="Rock" />
                <NavItem text="Metal" />
                <NavItem text="Pop" />
                <NavItem text="Indie" />
                </ul>

                <NavCart action={action} />                
            </div>
        </nav>
    </header>
    )
}

export default Nav;