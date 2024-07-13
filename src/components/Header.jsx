import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo (2).png'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
const Header = () => {
  return (
   
    <nav>
      <div className="container nav_container">
        <Link to="/" className='nav_logo'>
        <img src={logo} alt='Navbar Logo'></img>
        </Link>

        <ul className="nav_menu">
          <li><Link to='/profile'>Ernest</Link> </li>
          <li><Link to='/create'> Create Post</Link> </li>
          <li><Link to='/author'> Authors</Link> </li>
          <li><Link to='/logout'> Logout</Link> </li>
        </ul>
        <button className="nav_toggle-btn">
<AiOutlineClose/>
        </button>
      </div>
    </nav>
  )
}

export default Header