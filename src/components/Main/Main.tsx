import React from 'react'
import Nav from '../Nav/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Main = () => {


  return (
    <div className='main-container'>
        <Nav/>
        <Outlet/>
        {/* <Footer/> */}
    </div>
  )
}

export default Main