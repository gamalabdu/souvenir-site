import React from 'react'
import logoClear from '../../assets/logos/souvenir_white stroke_cropped.png'
import logoWhite from '../../assets/logos/souvenir_white filled_cropped.png'
import './styles.css'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {

  const pageLocation = useLocation()

  return (
    <div className={ pageLocation.pathname === '/' || pageLocation.pathname === '/home'   ? 'nav-bar-home' : pageLocation.pathname === '/about' ? 'nav-about' : 'nav-bar'}>

      <Link to="/home" style={{ backgroundColor:"transparent"}}><img className='logo' src={ pageLocation.pathname === '/' || pageLocation.pathname === '/home' ? logoWhite : logoClear } /></Link>

         <nav className='nav-container'>

            <div className='work-button'><Link to='/work' style={{ textDecoration:"none", color:"white", backgroundColor:"transparent"}}> work </Link> </div>
            <div className='divider'> | </div>
            <div className='work-button'><Link to='/about' style={{ textDecoration:"none", color:"white", backgroundColor:"transparent"}}> about </Link> </div>

        </nav>

    </div>
  )
}

export default Nav


