import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (

    <footer>
    <ul className='footer_categories'>
     
      <li><Link  to="/Posts/categories/:Agriculture">Agriculture</Link></li>
      <li><Link  to="/Posts/categories/:Education">Education</Link></li>
      <li><Link  to="/Posts/categories/:Business">Business</Link></li>
      <li><Link  to="/Posts/categories/:Art">Art</Link></li>
      <li><Link  to="/Posts/categories/:Weather">Weather</Link></li>
      <li><Link  to="/Posts/categories/:Uncategorized">Uncatogorized</Link></li>

    </ul>
    <div className="copyright">
      <small> All Rights Reserved &copy; Copyright</small>
    </div>
    </footer>
  )
}

export default Footer