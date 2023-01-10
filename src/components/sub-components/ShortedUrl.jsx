import React from 'react'

function ShortedUrl({ real, short }) {
  return (
    <div>
      <p>{real}</p>
      <a href={short}>{short}</a>
    </div>
  )
}

export default ShortedUrl
