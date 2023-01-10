import React from 'react'
import '../../sass/sub-components/shortened-url.scss'

function ShortedUrl({ real, short }) {
  return (
    <div className="shortened-url">
      <p>{real}</p>
      <a href={short}>{short}</a>
    </div>
  )
}

export default ShortedUrl
