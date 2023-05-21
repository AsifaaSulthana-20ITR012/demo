import Home from './components/HomePage/Home';
import Cart from './components/Cart/Cart';
import GiftVoucher from './components/GiftVoucher/GiftVoucher';
import Contact from './components/Contact/Contact';
import Product from './components/Product/Prouct';
import Navbar from "./components/Navbar/Navbar";
import {  Route, Routes } from 'react-router-dom';
import Login from './components/Admin/Login'
import Signuppage from './components/Admin/Signuppage';
import AddProduct from './components/Product/AddProduct';
import Disp from './components/Product/Disp';
import AddGift from './components/GiftVoucher/AddGift';
import Main from './components/Admin/Main';
import Payment from './components/Payment/Payment';

import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
  <>
   

  {/* <Navbar/> */}
  <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/giftVoucher' element={<GiftVoucher/>}></Route>
  <Route path='/products' element={<Product/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/cart' element={<Cart/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/signup' element={<Signuppage/>}></Route>
   <Route path='/addpro' element={<AddProduct/>}></Route>
   <Route path='/Disp' element={<Disp/>}></Route>
   <Route path='/addGift' element={<AddGift/>}></Route>
   <Route path='/admin' element={<Main/>}></Route>
   <Route path='/payment' element={<Payment/>}></Route>
  </Routes>

  </>
  );
}

export default App;
