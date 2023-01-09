import React from 'react'
import logo from '../assets/logo-light.svg'
import facebook from '../assets/icon-facebook.svg'
import instagram from '../assets/icon-instagram.svg'
import pinterest from '../assets/icon-pinterest.svg'
import twitter from '../assets/icon-twitter.svg'
import '../sass/footer.scss'

function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo" />
      <ul>
        <li>Features</li>
        <li>Link Shortening</li>
        <li>Branded Links</li>
        <li>Analytics</li>
      </ul>
      <ul>
        <li>Resources</li>
        <li>Blog</li>
        <li>Developers</li>
        <li>Support</li>
      </ul>
      <ul>
        <li>Company</li>
        <li>About</li>
        <li>Our Team</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>
      <div className="icons">
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={pinterest} alt="pinterest" />
        <img src={instagram} alt="instagram" />
      </div>
    </footer>
  )
}

export default Footer
