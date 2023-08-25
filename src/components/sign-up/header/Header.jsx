import React from 'react'
import Logo from '../../../assets/images/fb-logo.png'
import './Header.css'

const Header = () => {
  return (
    <div className='container d-flex justify-content-center ms-3'>
        <img src={ Logo } className='img-fluid logo' alt="" />
    </div>
  )
}

export default Header