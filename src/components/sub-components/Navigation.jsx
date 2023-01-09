import React, { useContext } from 'react'
import '../../sass/sub-components/navigation.scss'
import AuthContext from '../../store/AuthContext'

function Navigation({ className, display }) {
  const ctx = useContext(AuthContext)

  return (
    <nav className={className} style={{ display: display }}>
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
        <li></li>
        <li onClick={ctx.logout}>Logout</li>
      </ul>
    </nav>
  )
}

export default Navigation
