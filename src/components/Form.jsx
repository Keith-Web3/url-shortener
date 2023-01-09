import React from 'react'
import Button from './UI/Button'
import Input from './UI/Input'
import '../sass/form.scss'

function Form() {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <Input extra={{ placeholder: 'Shorten a link here...' }} />
      <Button>Shorten it!</Button>
    </form>
  )
}

export default Form
