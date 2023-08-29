import React from 'react'
import logoClear from '../../assets/logos/souvenir_white_spacing 0.png'
import logoWhite from '../../assets/logos/souvenir_white_filled_hd copy.png'
import './styles.css'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {

  const pageLocation = useLocation()

  return (
    <div className='nav-bar'>

      <Link to="/home"><img className={pageLocation.pathname === '/home' ? 'logo-white' : 'logo'} src={ pageLocation.pathname === '/home' ? logoWhite : logoClear } /></Link>

         <nav className='nav-container'>

            <div className='work-button'><Link to='/work' style={{ textDecoration:"none", color:"white", backgroundColor:"transparent"}}> work </Link> </div>
            <div className='divider'> | </div>
            <div className='work-button'><Link to='/about' style={{ textDecoration:"none", color:"white", backgroundColor:"transparent"}}> about </Link> </div>

        </nav>

    </div>
  )
}

export default Nav