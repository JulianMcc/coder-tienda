import './reset.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavAndWidgetCart from './components/General/NavAndWidgetCart/NavAndWidgetCart';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Detail from './components/ProductDetail/Index';
import Error404 from './components/General/Err404/Err404';

function App() {
  return (
    <BrowserRouter>
      <NavAndWidgetCart />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/category/:category_name?">
          <Category />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;