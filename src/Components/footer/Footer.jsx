import React from 'react'
import './footer.css'
import logo from '../../Assets/logolaptop.png'
import instagram from '../../Assets/Media/instagram.png'
import twitter from '../../Assets/Media/twitter.png'
import linkedin from '../../Assets/Media/linkedin.png'
const Footer = () => {
  return (
    <footer>
      <div className='footer-top'>
        <div className='footer-top-content'>
          <img src={logo} alt="blocasset logo"  className='header-logo'/>
          <p>High quality web3 vectors and designs  from top designers
              all around the world.</p>
          <div className='footer-top-content-one'>
            <input type='text' placeholder='Your Email'/>
            <button> <i>Email Me!</i> </button>
          </div>
        </div>
        <div className='footer-top-content'>
          <h1>Channel</h1>
            <ul>
                <li>Explore</li>
                <li>How it Works</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className='footer-top-content'>
          <h1>Company</h1>
            <ul>
                <li>Custom Work</li>
                <li>About</li>
                <li>FAQs</li>
            </ul>
        </div>
        <div className='footer-top-content'>
          <h1>Support</h1>
            <ul>
                <li>Help center</li>
                <li>Terms of Service</li>
                <li>Legal</li>
                <li>Privacy policy</li>
            </ul>
        </div>
      </div>
      <div className='footer-line'>

      </div>
      <div className='footer-bottom'>
        <p>&copy;2022 All Rights Reserved.</p>
        <div className='footer-bottom-socials'>
          <div className='footer-bottom-social'>
            <img src={twitter} alt='twitter' />
          </div>
          <div className='footer-bottom-social'>
            <img src={instagram} alt='instagram' />
          </div>
          <div className='footer-bottom-social'>
            <img src={linkedin} alt='linkedin' />
          </div>
        </div>

      </div>
    </footer>

  )
}

export default Footer