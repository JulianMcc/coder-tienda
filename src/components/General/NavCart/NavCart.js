import './NavCart.css';
import {FiShoppingBag} from 'react-icons/fi'

const NavCart = ({action, qty}) => {
    return (
            <div className="NavCart" onClick={action}>
                <FiShoppingBag />
                <span>{qty}</span>
            </div>
    )
}

export default NavCart;