import React from 'react'
import '../../sass/UI/input.scss'

function Input({ extra, link, updateLink }) {
  return (
    <input type="text" {...extra} value={link} onInput={updateLink} required />
  )
}

export default Input
