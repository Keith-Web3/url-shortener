import React, { useEffect } from 'react'
import ShortenedUrl from './sub-components/ShortenedUrl'

function ShortenedUrls({ urls, setUrls }) {
  useEffect(() => {
    const url = JSON.parse(localStorage.getItem('savedUrls'))
    setUrls(url)
  }, [])

  return (
    <div>
      {urls?.length &&
        urls.map((el, idx) => {
          return (
            <ShortenedUrl
              key={idx}
              real={el.real}
              short={el.short}
              shortLink={el.shortLink}
            />
          )
        })}

      {!urls?.length && <p></p>}
    </div>
  )
}

export default ShortenedUrls
