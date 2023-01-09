import React from 'react'
import '../../sass/UI/input.scss'

function Input({ extra }) {
  return <input type="text" {...extra} required />
}

export default Input
