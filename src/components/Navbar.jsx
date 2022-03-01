import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css';

const Navbar = ({isAuth}) => {
  return (
     <nav>
       <h1>Co Name.</h1>
       <ul>
         <Link to='/'>Home</Link>
         {!isAuth && <Link to='/login'>LogIn</Link>}
         {isAuth && <Link to='login'>LogOut</Link>}
       </ul>
     </nav>
  )
}

export default Navbar
