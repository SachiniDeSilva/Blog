import React ,{useState, useContext}from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo__2_-removebg-preview.png'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'


 import { UserContext } from '../context/userContext'
const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth >800 ? true :false)
const {currentUser} = useContext(UserContext)

const closeNavHandler = () => {
  if(window.innerWidth <800){
    setIsNavShowing(false)

  } else{
    setIsNavShowing(true)
  }
}




  return (
   
    <nav>
      <div className="container nav_container">
        <Link to="/" className='nav_logo'>
        <img src={logo} alt='Navbar Logo'></img>
        </Link>

        {currentUser?.id && isNavShowing &&<ul className="nav_menu">
          <li><Link to='/profile/sdsffv'>Ernest</Link> </li>
          <li><Link to='/create'> Create Post</Link> </li>
          <li><Link to='/author'> Authors</Link> </li>
          <li><Link to='/logout'> Logout</Link> </li>
        </ul>}


        
        {currentUser?.id && isNavShowing &&<ul className="nav_menu">
     
          <li><Link to='/author'> Authors</Link> </li>
          <li><Link to='/login'> Login</Link> </li>
        </ul>}
        <button className="nav_toggle-btn">
<AiOutlineClose/>
        </button>
      </div>
    </nav>
  )
}

export default Header