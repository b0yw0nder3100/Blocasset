import React, { useState } from 'react'
import logo from '../../Assets/logolaptop.png'
import './header.css'
import ham from '../../Assets/Interface/hamburgmenu.png'
import Mobilenav from '../mobilemenu/Mobilenav'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dim = window.innerWidth
  

  // look for a fix to make the resize much better
  return (
    <header>
      { isOpen && 
        <Mobilenav closemenu={setIsOpen}></Mobilenav>}
      { dim > 1024 ? (
        <nav>
            <div className='header-nav'>
                <img src={logo} alt="blocasset logo"  className='header-logo'/>
                <ul className='header-ul'>
                <li>Images</li>
                <li>Icons</li>
                <li>Illustrations</li>
                <li>Videos</li>
            </ul>
            </div>
            <div className='header-button'>
                <button className='header-btn-one'>Become a contributer</button>
                <button className='header-btn-two'>Connect wallet</button>
            </div>
        </nav> ) : (

        <nav>
            <div className='header-nav'>
                <img src={logo} alt="blocasset logo"  className='header-logo'/>
            </div>
            <img src={ham} alt="hammenu" onClick={() => setIsOpen(!isOpen) }/>
        </nav> )}
    </header>
  )
}

export default Header