import './App.css';
import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ShoppingList from './components/ShoppingList';


function App() {
  const [cart, updateCart] = useState([])

  return (
    <div className="App">
      <Banner/>
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart}/>
        <ShoppingList cart={cart} updateCart={updateCart}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
