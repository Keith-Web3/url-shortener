import React from 'react'
import Header from './sub-components/Header'
import Button from './UI/Button'
import illustration from '../assets/illustration-working.svg'
import '../sass/hero-section.scss'

function HeroSection() {
  return (
    <section className="hero-section section--1">
      <Header />
      <div className="hero-section__desc">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button
          extra={{
            style: {
              borderRadius: '100vh',
            },
          }}
        >
          Get started
        </Button>
      </div>
      <img src={illustration} alt="working" />
    </section>
  )
}

export default HeroSection
