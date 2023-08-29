import React from 'react'
import logo from '../../assets/logos/souvenir_white_spacing 0.png'
import './styles.css'
import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <div className='nav-bar'>

      <Link to="/home"><img className='logo' src={logo} /></Link>

         <nav className='nav-container'>

            <div className='work-button'><Link to='/work' style={{ textDecoration:"none", color:"white", backgroundColor:"transparent"}}> work </Link> </div>
            <div className='divider'> | </div>
            <div className='work-button'><Link to='/about' style={{ textDecoration:"none", color:"white", backgroundColor:"transparent"}}> about </Link> </div>

        </nav>

    </div>
  )
}

export default Nav