import React from 'react'
import search from '../../Assets/Interface/Search.png'
import Iconblack from '../../Assets/Interface/Iconblack.png'
import data from './data'
import eth from '../../Assets/Coin/Ethereum/ethlaptop.png'
import btc from '../../Assets/Coin/BitCoin/btclaptop.png'
const Hero = () => {
  
  const dim = window.innerWidth
  return (
    <section>
      <section className='hero-section'>
      <img src={eth} alt="eth coin" className='eth'/>
      <div className='hero-center'>
        <h1>Discover, and sell unique web3 assets.</h1>
        <p className='hero-center-p'>Make your project eye-catching with awesome web3 assets.
        For both commercial and personal purposes</p>
        <div className='hero-center-search'>
          <div className='hero-center-search-top'>
            <img src={Iconblack} alt="icon" className='iconblack'/>
            <select >
            <option>Images</option>
            <option>Im2ages</option>
          </select>
          <input type='text' placeholder='Search all Images'/>
          </div>
          <div>
          <button className='hero-search-btn'> <img src={search} alt="search button" className='search'></img> </button>
          </div>
        </div>
        <p className='popular'>Popular:   nft,  web3,  stickers,  icons,  cryptocurrency</p>
      </div>
      <img src={btc} alt="btc coin" className='btc'/>
    </section>

    <section className='next-section'>
      {
        data.map(item => {
          return (
            <div key={item.id} className="next-sec">
              <img src={item.image} alt='doas' />
            </div> 
            
          )
        })
      }
    </section>
    </section>
  )
}

export default Hero