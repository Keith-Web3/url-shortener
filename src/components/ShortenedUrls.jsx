import React, { useEffect } from 'react'
import '../sass/shortened.scss'
import ShortedUrl from './sub-components/ShortedUrl'

function ShortenedUrls({ urls, setUrls }) {
  useEffect(() => {
    const url = JSON.parse(localStorage.getItem('savedUrls'))
    setUrls(url)
  }, [])

  return (
    <div>
      {urls?.length &&
        urls.map((el, idx) => (
          <ShortedUrl key={idx} real={el.real} short={el.short} />
        ))}

      {!urls?.length && <p></p>}
    </div>
  )
}

export default ShortenedUrls
