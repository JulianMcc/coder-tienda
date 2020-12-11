import './reset.css';
import Nav from './components/General/nav/nav';
import Destacados from './components/General/Destacados/Destacados';

function App() {
  return (
    <div>
      <Nav titulo='Tu Vinilo' />
      <Destacados />
    </div>
  );
}

export default App;