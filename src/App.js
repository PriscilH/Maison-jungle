import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
// import Cart from './components/Cart';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <div className="App">
      <Banner/>
      {/* <Cart/> */}
      <ShoppingList/>
      <Footer/>
    </div>
  );
}

export default App;
