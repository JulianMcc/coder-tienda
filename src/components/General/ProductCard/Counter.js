import {useState} from 'react';
import './Counter.css';


const CountButton = () => {
    const [qty, setQty] = useState(0);
    const handleClickResta = () => {
        if(qty) {
            setQty(qty - 1);
        }
    }
    const onAdd = () => {
        alert(`${qty} productos fueron agregados al carrito`);
    }

    return(
        <article id="Counter">
        <button 
        disabled={!qty ? 'disabled' : null} 
        onClick={handleClickResta}
        >
        -
        </button>
        <input type="text" value={qty} readOnly/>
        <button onClick={() => setQty(qty + 1)}>+</button>

        <div id="AddCart">
        <button onClick={onAdd}>Agrega al carrito</button>
        </div>
        </article>    
    )
}


export default CountButton;