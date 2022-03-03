import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css';

const Navbar = ({isAuth}) => {
  return (
     <nav>
       <h1 className='logo'>GymTrack</h1>
       <ul>
         <Link to='/'>Home</Link>
         <Link to='/'>Track</Link>
         <Link to='/'> Exercises </Link>
         
         
       </ul>
       <ul>
         {!isAuth && <Link to='/login'>LogIn</Link>}
         {isAuth && <Link to='/login'>LogOut</Link>}
         {!isAuth && <Link to='/login'>Sign Up</Link>}
       </ul>
     </nav>
  )
}

export default Navbar
