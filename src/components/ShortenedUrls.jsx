import React, { useEffect } from 'react'
import '../sass/shortened.scss'
import ShortenedUrl from './sub-components/ShortenedUrl'

function ShortenedUrls({ urls, setUrls }) {
  useEffect(() => {
    const url = JSON.parse(localStorage.getItem('savedUrls'))
    setUrls(url)
  }, [])

  return (
    <div>
      {urls?.length &&
        urls.map((el, idx) => (
          <ShortenedUrl key={idx} real={el.real} short={el.short} />
        ))}

      {!urls?.length && <p></p>}
    </div>
  )
}

export default ShortenedUrls
