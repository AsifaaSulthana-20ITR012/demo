import Home from './components/Home/Home';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import GiftVoucher from './components/GiftVoucher/GiftVoucher';
import Contact from './components/Contact/Contact';
import Product from './components/Product/Prouct';
import Navbar from "./components/Navbar/Navbar";
import {  Route, Routes } from 'react-router-dom';

function App() {
  return (
  <>
  <Navbar/>
  
  <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/giftVoucher' element={<GiftVoucher/>}></Route>
  <Route path='/products' element={<Product/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/cart' element={<Cart/>}></Route>
  </Routes>
  </>
  );
}

export default App;
