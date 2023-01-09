import React from 'react'
import '../../sass/sub-components/navigation.scss'

function Navigation({ className, display }) {
  return (
    <nav className={className} style={{ display: display }}>
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
        <li></li>
        <li>Login</li>
        <li>Sign up</li>
      </ul>
    </nav>
  )
}

export default Navigation
