import React from 'react'
import '../../sass/sub-components/shortened-url.scss'

function ShortedUrl({ real, short, shortLink }) {
  return (
    <div className="shortened-url">
      <p>{real}</p>
      <a href={shortLink} target="_blank">
        {short}
      </a>
    </div>
  )
}

export default ShortedUrl
