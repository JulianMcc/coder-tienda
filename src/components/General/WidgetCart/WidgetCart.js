import './WidgetCart.css';

const WidgetCart = ({show, action}) => {
    return (
        <div className={`widgetCart ${show?'open':'close'}`}>
            <p>Su carrito esta vacio</p>
            <button onClick={action}>Cerrar</button>
        </div>
    )
}

export default WidgetCart;
