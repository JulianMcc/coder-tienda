import './nav.css';
import NavItem from './NavItem';

function Nav({titulo, action}) {
    // const {titulo} = props;

    return (
        <header>
            <div className="container">
                <h1>{titulo}</h1>
                <nav>
                    <ul>
                        <NavItem text="Rock" />
                        <NavItem text="Pop" />
                        <NavItem text="Indie" />
                        <NavItem text="Metal" />
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Nav;