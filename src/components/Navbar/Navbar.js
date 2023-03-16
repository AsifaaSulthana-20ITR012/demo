// import React, { useState } from 'react'
// import logo from '../../images/homeimg1.jpg'
// import './Navbar.css'
// import { NavLink } from 'react-router-dom'
// import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

// const Menu = () => (
//     <>
//       <p>
//         <NavLink  to="/">Home</NavLink>
//       </p>
//       <p>
//       <NavLink  to="/about">About</NavLink>
//       </p>
//       <p>
//       <NavLink  to="/products">Products</NavLink>
//       </p>
//       <p>
//       <NavLink  to="/giftVoucher">Gift Vouchre</NavLink>
//       </p>
//       <p>
//       <NavLink  to="/contact">Contact</NavLink>
//       </p>
//     </>
//   );

// const Navbar = () => {
//     const [toggleMenu, setToggleMenu] = useState(false);
//   return (
//     <div className='container'>
//         <div className='links'>
//             <div className='links-logo'>
//                 <img src={logo} alt="" srcset=""/>
//             </div>
//             <div className='links-wrapper'>
//             <Menu /> 
//             </div>
//                </div>
//                 <div className='nav-button'>
//                 <button type='button'><NavLink  to="/cart">Cart</NavLink></button>
//                 </div>
//                 <div className="nav-menu">
//         {toggleMenu ? (
//           <RiCloseLine
//             color="#333333"
//             size={27}
//             onClick={() => setToggleMenu(false)}
//           />
//         ) : (
//           <RiMenu3Line
//             color="#333333"
//             size={27}
//             onClick={() => setToggleMenu(true)}
//           />
//         )}
//         {toggleMenu && (
//           <div className="nav-menu-wrapper">
//             <div className="nav-menu-wrapper-links">
//               <Menu />
//               <div className="nav-menu-wrapper-button">
//               <button type='button'><NavLink  to="/cart">Cart</NavLink></button>
//               </div>
//             </div>
//           </div>
//         )}
//         </div>
      
//     </div>
//   )
// }
// export default Navbar;

import React, { useState } from 'react'
import logo from '../../images/homeimg1.jpg'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { Link } from 'react-scroll';
// import About from '../About/About';

const Menu = () => (
    <>
      <p>
      <NavLink  to="/" smooth={true} duration={500}>Home</NavLink>
      </p>
      <p >
      <NavLink  to="/about" smooth={true} duration={500}>About</NavLink>
      </p>
      <p>
      <NavLink  to="/products" smooth={true} duration={500}>Products</NavLink>
      </p>
      <p>
      <NavLink  to="/giftVoucher" smooth={true} duration={500}>GiftVouchre</NavLink>
      </p>
      <p>
      <NavLink  to="/contact" smooth={true} duration={500}>Contact</NavLink>
      </p>
    </>
  );

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='container'>
        <div className='links'>
            <div className='links-logo'>
                <img src={logo} alt="" srcset=""/>
            </div>
            <div className='links-wrapper'>
            <Menu /> 
          
            </div>
               </div>
                <div className='nav-button'>
                <button type='button'><NavLink  to="/cart">Cart</NavLink></button>
                </div>
                <div className="nav-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#333333"
            size={30}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#333333"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="nav-menu-wrapper" style={{ zIndex: "1"}}>
            <div className="nav-menu-wrapper-links" >
              <Menu />
              <div className="nav-menu-wrapper-button">
              <button type='button'><NavLink  to="/cart">Cart</NavLink></button>
              </div>
            </div>
          </div>
        )}
        </div>
      
    </div>
  )
}
export default Navbar;