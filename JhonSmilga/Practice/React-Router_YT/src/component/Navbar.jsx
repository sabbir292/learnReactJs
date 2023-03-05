import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='nav-items'>
        <li>
           <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/products'>Products</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
