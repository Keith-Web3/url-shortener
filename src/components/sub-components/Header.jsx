import React from 'react'
import logo from '../../assets/logo.svg'
import harmburger from '../../assets/bars-solid.svg'
import Navigation from './Navigation'
import '../../sass/sub-components/header.scss'

function Header() {
  return (
    <header>
      <img src={logo} alt="shortly logo" />
      <Navigation />
      <img src={harmburger} alt="menu" />
    </header>
  )
}

export default Header
