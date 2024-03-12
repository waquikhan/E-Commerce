import React, { useContext, useState } from 'react'
import "./Navbar.css"

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

// this Page is added inside the app.js File
const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <Link to="/" style={{textDecoration:'none'}}>
            <p>SHOPPER</p>
            </Link>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}>
                <Link to='/' style={{textDecoration:'none'}}>
                    Shop    
                </Link>{menu==="shop"?<hr/>:<></>}
            </li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link  style={{textDecoration:'none'}}to='/womens'>Womens</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link  style={{textDecoration:'none'}}to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link style={{textDecoration:'none'}} to='/login'>
            <button>Login</button>
            </Link>
            <Link style={{textDecoration:'none'}} to='/cart'>
            <img src={cart_icon} alt="" />
            </Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
