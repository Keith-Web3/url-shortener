import React from 'react'
import { useState, useEffect } from 'react'
import reactLogo from '../../assets/react.svg'
import '../../sass/sub-components/statistic.scss'

function Statistic({ path, desc }) {
  const [logo, setLogo] = useState(reactLogo)

  useEffect(() => {
    async function importLogo() {
      const newPath = path.toLowerCase().replace(' ', '-')
      const { default: logo } = await import(`../../assets/icon-${newPath}.svg`)

      setLogo(logo)
    }

    importLogo()
  })

  return (
    <div className="statistic">
      <picture>
        <img src={logo} alt="logo" />
      </picture>
      <h3>{path}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default Statistic
