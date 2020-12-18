import {useState} from 'react';
import Nav from '../Nav/nav';
import WidgetCart from '../WidgetCart/WidgetCart';

const NavAndWidgetCart = () => {
    const [showCart, setShowCart] = useState(false);

    const openCart = () => {
        setShowCart(!showCart);
    }

    return (
        <>
            <Nav titulo='Tu Vinilo' action={openCart} />
            <WidgetCart show={showCart} action={openCart} />
        </>
    )
}

export default NavAndWidgetCart;