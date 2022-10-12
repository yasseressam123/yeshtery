import Header from './components/header/header';
import Footer from './components/footer/footer';
import Product from './pages/product/product';
import CartProvider from './store/CartProvider';
import Cart from './components/cart/cart';

import { useState } from 'react';


import './App.scss';
import 'bootstrap/scss/bootstrap.scss';

function App() {
  const [visibleRight, setVisibleRight] = useState(false);

  const showCartHandler = () => {
    setVisibleRight(true);
  };

  const hideCartHandler = () => {
    setVisibleRight(false);
  };

  return (
    <CartProvider>
      {visibleRight && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <Product/>
      <Footer/>
    </CartProvider>
  );
}

export default App;
