import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import ProductList from './component/productInfo/ProductList';
import Cart from './component/cart/Cart';
import ProductDetails from './component/productInfo/ProductDetails';
import Default from './component/default/Default';

import Details from './component/details/Details';
import Modal from './component/modal/Modal';

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route path='/cart' component={Cart} />
        <Route path='/productDetails' component={ProductDetails} />

        <Route path='/details' component={Details} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
