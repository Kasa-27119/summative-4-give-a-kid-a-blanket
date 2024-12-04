import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {CartContext} from '../context/CartContext'
import useCustomizer from '../hooks/useCustomizer'

const Navbar = () => {
  const {cart} = useContext(CartContext)
  const { mobileNavColor } = useCustomizer()

  // menu states
  const [isOpen, setIsOpen] = useState(false)

  // menu toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);  // Toggle between true and false
    document.body.style.overflow = isOpen ? 'auto' : 'hidden'
  }

  // menu close
  const closeMenu = () => {
    setIsOpen(false);  // Set isOpen to false, closing the menu
    document.body.style.overflow = 'auto';  // Restore scroll functionality
  }

  useEffect(() => {
    const mobile = document.querySelector('.navlinks')

    if (isOpen && mobile) {
      mobile.style.backgroundColor = mobileNavColor
    } else {
      mobile.style.backgroundColor = 'transparent'
    }
  }, [isOpen, mobileNavColor])

  return (
    <header>
      <nav className={`navbar ${isOpen ? "menu-open" : ""}`}>
        <NavLink to="/" className="logo">
          <img className='logo' src="./images/gakab-logo.png" alt="Give a Kid a Blanket logo" />
        </NavLink>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar bar1 ${isOpen ? "toggle" : ""}`}></div>
          <div className={`bar bar2 ${isOpen ? "toggle" : ""}`}></div>
          <div className={`bar bar3 ${isOpen ? "toggle" : ""}`}></div>
        </div>
        {/* navlinks */}
        <ul className={`navlinks ${isOpen ? "active" : ""}`}>
          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Store"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Store
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active-link cart-navlink" : "")}
            >
              <div>
                <img id='cartIcon' src="./images/cream-cart.png" alt="cart icon" />
                {cart.length > 0 && `(${cart.length})`}
              </div>
            </NavLink>
          </li>
        </ul>

        {/* cart logo */}
        {/* <div className='cart'>cart</div> */}
      </nav>
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  )
}

export default Navbar
