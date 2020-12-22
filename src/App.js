import {useState} from 'react';
import './reset.css';
import NavAndWidgetCart from './components/General/NavAndWidgetCart/NavAndWidgetCart';
import FeaturedProducts from './components/Home/FeaturedProducts/FeaturedProducts';

function App() {

  const [message, setMessage] = useState('');

  const task = new Promise((resolve, reject) => {
    if(true) {
      setTimeout(() => {
        resolve('Vinilos cargados');
      }, 4000)
    } else {
      reject('Intenta mas tarde');
    }
  })

  task
  .then(rta => setMessage(rta))
  .catch(error => console.log(error));


  return (
    <>
      <NavAndWidgetCart />
      {message}
      <FeaturedProducts />
    </>
  );
  }


export default App;