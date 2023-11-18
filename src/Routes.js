import { Route, Switch, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import Products from './pages/Products';
import EditProduct from './pages/EditProduct';

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" render={ () => <Redirect to="/login" /> } exact />
        <Route path="/login" component={ Login } exact />
        <Route path="/product" component={ Products } exact />
        <Route path="/editProduct" component={ EditProduct } exact />
      </Switch>
    </>
  )
}

export default Routes;