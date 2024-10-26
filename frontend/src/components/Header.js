import React from 'react'
import logo_img from "../img/img.jpg"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header_container'>
        <div className='img_container'>
            <img className='logo_img' src={logo_img}></img>
        </div>
        <div className='Title'>
          <p>YummyFoods.com</p>
        </div>
        <div className='nav_container'>
            <Link to="/" style={{textDecoration:"none",color:"white"}}>Home</Link>
            <Link to="/about" style={{textDecoration:"none",color:"white"}}>About</Link>
            <Link to="/contact" style={{textDecoration:"none",color:"white"}}>Contact</Link>
            <Link to="/signin" style={{textDecoration:"none",color:"white"}}>Signin</Link>
        </div>
    </div>
  )
}

export default Header