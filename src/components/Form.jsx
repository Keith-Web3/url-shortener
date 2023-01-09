import React from 'react'
import Button from './UI/Button'
import Input from './UI/Input'
import '../sass/form.scss'
import axios from 'axios'
import { useState } from 'react'

function Form({ setUrls }) {
  const [link, setLink] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const res = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      )
      if (!res?.data?.ok) throw new Error(res?.data?.error)
      console.log(res)
      localStorage.setItem(
        'savedUrls',
        JSON.stringify([
          ...JSON.parse(
            localStorage.getItem('savedUrls') || JSON.stringify([])
          ),
          {
            real: link,
            short: res.data.result.short_link,
          },
        ])
      )
      setUrls(JSON.parse(localStorage.getItem('savedUrls')))
    } catch (err) {
      console.error(err.message)
      alert(err.message)
    }
  }
  function updateLink(e) {
    setLink(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        extra={{ placeholder: 'Shorten a link here...' }}
        link={link}
        updateLink={updateLink}
      />
      <Button>Shorten it!</Button>
    </form>
  )
}

export default Form
