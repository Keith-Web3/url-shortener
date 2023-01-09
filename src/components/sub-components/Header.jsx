import React from 'react'
import logo from '../../assets/logo.svg'
import harmburger from '../../assets/bars-solid.svg'
import Navigation from './Navigation'
import '../../sass/sub-components/header.scss'
import { useState } from 'react'
import 'animate.css'

function Header() {
  const [showNav, setShowNav] = useState(false)
  const [navDisplay, setNavDisplay] = useState('none')

  function toggleShowNav() {
    setShowNav(prevVal => !prevVal)
    navDisplay === 'none'
      ? setNavDisplay('block')
      : setTimeout(() => setNavDisplay('none'), 600)
  }

  return (
    <header>
      <img src={logo} alt="shortly logo" />
      <Navigation
        display={navDisplay}
        className={
          showNav
            ? 'animate__animated animate__bounceInDown'
            : 'animate__animated animate__bounceOutUp'
        }
      />
      <img src={harmburger} alt="menu" onClick={toggleShowNav} />
    </header>
  )
}

export default Header
