import React from 'react'
import logo from '../../Assets/logolaptop.png'
import close from '../../Assets/Interface/Close.png'
import './mobilenav.css'

const Mobilenav = ( { closemenu} ) => {
  return (
        <nav className='mobile-nav'>
            <div className='mobile-header-nav'>
              <div className='mobile-header-nav-top'>
                <img src={logo} alt="blocasset logo"  className='header-logo'/>
                <img src={close} alt="close menu" className='close-menu' onClick={() => closemenu(false)} />
              </div>
              <ul className='mobile-header-ul'>
                <li>Images</li>
                <li>Icons</li>
                <li>Illustrations</li>
                <li>Videos</li>
              </ul>
              <div className='mobile-header-button'>
                <button className='mobile-header-btn-one'>Become a contributer</button>
                <button className='mobile-header-btn-two'>Connect wallet</button>
            </div>
            </div>
        </nav>
  )
}

export default Mobilenav