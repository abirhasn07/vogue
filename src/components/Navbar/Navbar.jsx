import React, { useState } from 'react'
import {AiOutlineSearch,AiOutlineHome} from 'react-icons/ai'
import {CgShoppingCart} from 'react-icons/cg'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiUserPlus} from 'react-icons/fi'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
import { useShoppingCart } from '../../context/ShoppingCartContext'
const Navbar = () => {
    const [showNav,setShowNav]=useState(false)
const {cartQuantity} =useShoppingCart()
  return (
    <header>

    <nav className="nav">
        <div className="nav-container">
            <NavLink to="/" className="logo">
              vogue <span>store</span>
            </NavLink>
            <ul className={!showNav?"nav-list":"nav-list active"}>
                <NavLink className={"list-item"} to="/" onClick={()=>setShowNav(!showNav)}>Home</NavLink>
                <NavLink className={"list-item"} to="/shop" onClick={()=>setShowNav(!showNav)}>Shop</NavLink>
                <NavLink className={"list-item"} to="/blog" onClick={()=>setShowNav(!showNav)}>Blog</NavLink>
                <NavLink className={"list-item"} to="/contact" onClick={()=>setShowNav(!showNav)}>Contact</NavLink>
                <NavLink className={"list-item"} to="/login" onClick={()=>setShowNav(!showNav)}>Join</NavLink>
            </ul>

            <div className="cart">
                <NavLink to="/shop" className="search">
                  <span><AiOutlineSearch/></span>  Search
                </NavLink>
                <NavLink to={"/cart"} className="addToCart">
                     <span><CgShoppingCart/></span>Cart <span className="cart-value">{cartQuantity}</span>
                </NavLink>
            </div>

           

        <div className="mobile-menu">
            <GiHamburgerMenu onClick={()=>setShowNav(!showNav)}/>

            <NavLink className={"mobile-menu-icon"} to="/">
            <AiOutlineHome/>
            </NavLink>
            <NavLink className={"mobile-menu-icon"} to="/search">
            <AiOutlineSearch/>
            </NavLink>
            <NavLink className={"mobile-menu-icon"} to={"/login"}>
            <FiUserPlus/>
            </NavLink>
            <NavLink to={"/cart"} className="mobile-shopping-cart mobile-menu-icon">
            <CgShoppingCart/>
            </NavLink>
        </div>
        </div>
    </nav>

    </header>

  )
}

export default Navbar