import './reset.css';
import NavAndWidgetCart from './components/General/NavAndWidgetCart/NavAndWidgetCart';
import Home from './components/Home/Home'
import Detail from './components/ProductDetail/Index';

function App() {
const sectionToShow = (section) => {
  switch(section) {
    case 'Home' : return <Home />
    case 'Detail' : return <Detail />
    default : return <Home />
  }
}

  return (
    <>
      <NavAndWidgetCart />
      {sectionToShow('Detail')}
    </>
  );
}


export default App;