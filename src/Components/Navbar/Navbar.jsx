import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Shop Logo" />
        <p>SHOPPR</p>
      </div>

      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            Shop
          </Link>
        </li>
        <li>
          <Link to="/men" className="nav-link">
            Men
          </Link>
        </li>
        <li>
          <Link to="/women" className="nav-link">
            Women
          </Link>
        </li>
        <li>
          <Link to="/kids" className="nav-link">
            Kids
          </Link>
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/Login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
