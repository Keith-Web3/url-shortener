import React, { useState } from 'react'
import Form from './Form'
import Statistic from './sub-components/Statistic'
import '../sass/statistics.scss'
import ShortenedUrls from './ShortenedUrls'

const STATISTICS_DATA = [
  {
    key: 1,
    path: 'Brand Recognition',
    desc: "Boost your brand recognition with each click. Generic clicks don't mean a thing. Branded links help instil confidence in your content.",
  },
  {
    key: 2,
    path: 'Detailed Records',
    desc: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
  },
  {
    key: 3,
    path: 'Fully Customizable',
    desc: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
  },
]
function Statistics() {
  const [urls, setUrls] = useState(null)

  return (
    <section className="statistics section--2">
      <Form setUrls={setUrls} />
      <ShortenedUrls urls={urls} setUrls={setUrls} />
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard
      </p>
      <div className="statistics__container">
        {STATISTICS_DATA.map(data => (
          <Statistic {...data} />
        ))}
      </div>
    </section>
  )
}

export default Statistics
