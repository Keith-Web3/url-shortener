import React from 'react'
import '../../sass/UI/button.scss'

function Button({ children, extra }) {
  return <button {...extra}>{children}</button>
}

export default Button
