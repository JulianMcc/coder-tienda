import './NavCart.css';
import {FiShoppingBag} from 'react-icons/fi'

const NavCart = ({action}) => {
    return (
        <div className="NavCart" onClick={action}>
            <FiShoppingBag />
            <span>0</span>
        </div>
    )
}

export default NavCart;