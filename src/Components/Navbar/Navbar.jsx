import React, { useContext,useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
const Navbar = () => {
  const [menu, setMenu] = useState('shop'); // giving the underline effect to the content of the navbar
  const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPR</p>
      </div>
      <ul className="nav-menu">
        <li 
          onClick={() => {
            setMenu('shop');
          }}
        >
          <Link to="/" style={{textDecoration:'none'}}>Shop</Link>{' '}
          {/* now Link tag is setup to use react router to navigate through pages */}
          {menu === 'shop' ? <hr /> : <></>}{' '}
          {/* setting the state if content is === content then hr else nothing */}
        </li>
        <li
          onClick={() => {
            setMenu('Mens');
          }}
        >
          <Link to="/men"style={{textDecoration:'none'}}>Men</Link>
          {menu === 'Mens' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('Womens');
          }}
        >
          <Link to="/women"style={{textDecoration:'none'}}>Women</Link>
          {menu === 'Womens' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('kids');
          }}
        >
          <Link to="/kids"style={{textDecoration:'none'}}>Kids</Link>
          {menu === 'kids' ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/Login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
