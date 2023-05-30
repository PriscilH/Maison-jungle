import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <div className="App">
      <Banner/>
      <div className='lmj-layout-inner'>
        <Cart/>
        <ShoppingList/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
