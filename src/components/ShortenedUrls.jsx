import React, { useEffect } from 'react'
import '../sass/shortened.scss'

function ShortenedUrls({ urls, setUrls }) {
  useEffect(() => {
    const url = JSON.parse(localStorage.getItem('savedUrls'))
    setUrls(url)
  }, [])

  return (
    <>
      {urls?.length && (
        <div className="shortened">
          {urls.map((el, idx) => (
            <div key={idx}>
              <p>{el.real}</p>
              <p>{el.short}</p>
            </div>
          ))}
        </div>
      )}
      {!urls?.length && <p></p>}
    </>
  )
}

export default ShortenedUrls
