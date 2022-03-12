import React from 'react'
import newrelease from './new-releases.js'
import vector from '../../Assets/Vector2.png'
import Icon from '../../Assets/Interface/Icon.png'
import Icon2 from '../../Assets/Interface/Icon2.png'
import Icon3 from '../../Assets/Interface/Icon3.png'
import Icon4 from '../../Assets/Interface/Icon4.png'
import polygon from '../../Assets/Interface/Polygon.png'

const Newreleases = () => {
  const dim = window.innerWidth
  return (
    <main>
        {
        dim > 1025 &&     <section className='next-section-two'>
      <div className='next-section-two-header'> 
        <div className='next-section-two-header-top'>
          <img src={vector} alt="vector" className='next-section-header-image' /> 
          <h1> New Releases</h1>
        </div>
        <p>Newly minted assets from top artists around the world</p>
      </div>
      <div className='new-releases-item'>
        {
          newrelease.map((item ) => {
            return (
              <div key={item.id} className='new-releases-container'>
                  <img src={item.image} alt={item.name} className="new-release-image"/>

                  <div className='new-release-interfaces'>
                      <div className='new-release-interface'>
                        <img src={Icon} alt="Icon" />
                      </div>
                      <div className='new-release-interface'>
                        <img src={Icon2} alt="Icon" />
                      </div>
                      <div className='new-release-interface'>
                        <img src={Icon3} alt="Icon" />
                      </div>
                      <div className='new-release-interface'>
                        <img src={Icon4} alt="Icon" />
                      </div>
                  </div>

                  <div>
                    <h2 className='new-release-image-name'>{item.name}</h2>
                  </div>
                
                <div className='new-releases-prices'>
                  <div>
                    <h2>{item.price} Matic</h2>
                    <h3>${item.priceTwo}</h3>
                  </div>
                  <div>
                    <img src={polygon} alt="polygon" className='polygon' />
                  </div>
                </div>

                <div className='new-release-owner'>
                  <img src={item.ownerImage} alt={item.owner} />
                  <h4>{item.owner}</h4>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='load-more'>
          <button>Load More</button>
        </div>
    </section>
      }

    {
      dim > 560 && dim < 1025 && <section className='next-section-two'>
      <div className='next-section-two-header'> 
        <div className='next-section-two-header-top'>
          <img src={vector} alt="vector" className='next-section-header-image' /> 
          <h1> New Releases</h1>
        </div>
        <p>Newly minted assets from top artists around the world</p>
      </div>
      <div className='new-releases-item'>
        {
          newrelease.map((item ) => {
            return (
              item.id > 6 ? (
              <div key={item.id} className='new-releases-container' style={{ display: 'none'}}>
                  <img src={item.image} alt={item.name} className="new-release-image"/>
                  <div>
                    <h2 className='new-release-image-name'>{item.name}</h2>
                  </div>
                
                <div className='new-releases-prices'>
                  <div>
                    <h2>{item.price} Matic</h2>
                    <h3>${item.priceTwo}</h3>
                  </div>
                  <div>
                    <img src={polygon} alt="polygon" className='polygon' />
                  </div>
                </div>

                <div className='new-release-owner'>
                  <img src={item.ownerImage} alt={item.owner} />
                  <h4>{item.owner}</h4>
                </div>
              </div>
              ) : 
              (
                <div key={item.id} className='new-releases-container'>
                  <img src={item.image} alt={item.name} className="new-release-image"/>
                    <div className='new-release-interfaces'>
                      <div className='new-release-interface'>
                        <img src={Icon} alt="Icon" />
                      </div>
                      <div className='new-release-interface'>
                        <img src={Icon2} alt="Icon" />
                      </div>
                      <div className='new-release-interface'>
                        <img src={Icon3} alt="Icon" />
                      </div>
                      <div className='new-release-interface'>
                        <img src={Icon4} alt="Icon" />
                      </div>
                  </div>
                  <div>
                    <h2 className='new-release-image-name'>{item.name}</h2>
                  </div>
                
                <div className='new-releases-prices'>
                  <div>
                    <h2>{item.price} Matic</h2>
                    <h3>${item.priceTwo}</h3>
                  </div>
                  <div>
                    <img src={polygon} alt="polygon" className='polygon' />
                  </div>
                </div>

                <div className='new-release-owner'>
                  <img src={item.ownerImage} alt={item.owner} />
                  <h4>{item.owner}</h4>
                </div>
              </div>
              )
            )
          })
        }
      </div>
      <div className='load-more'>
          <button>Load More</button>
        </div>
    </section>
    }

    {
        dim < 550 &&   <section className='next-section-two'>
      <div className='next-section-two-header'> 
        <div className='next-section-two-header-top'>
          <img src={vector} alt="vector" className='next-section-header-image' /> 
          <h1> New Releases</h1>
        </div>
        <p>Newly minted assets from top artists around the world</p>
      </div>

      <div className='new-releases-item'>
        {
          newrelease.map((item ) => {
            return (
              item.id > 4 ? (<div key={item.id} className='new-releases-container' style={{ display: 'none'}}>
                  <img src={item.image} alt={item.name} className="new-release-image"/>
                  <div>
                    <h2 className='new-release-image-name'>{item.name}</h2>
                  </div>
                
                <div className='new-releases-prices'>
                  <div>
                    <h2>{item.price} Matic</h2>
                    <h3>${item.priceTwo}</h3>
                  </div>
                  <div>
                    <img src={polygon} alt="polygon" className='polygon' />
                  </div>
                </div>

                <div className='new-release-owner'>
                  <img src={item.ownerImage} alt={item.owner} />
                  <h4>{item.owner}</h4>
                </div>
              </div>): (<div key={item.id} className='new-releases-container'>
                  <img src={item.image} alt={item.name} className="new-release-image"/>
                  <div className='new-release-interfaces'>
                      <div className='new-release-interface'>
                        <img src={Icon} alt="Icon" />
                      </div>
                      <div className='new-release-interface'>
                        <img src={Icon2} alt="Icon" />
                      </div>
                      <div className='new-release-interface'>
                        <img src={Icon3} alt="Icon" />
                      </div>
                      <div className='new-release-interface'>
                        <img src={Icon4} alt="Icon" />
                      </div>
                  </div>
                  <div>
                    <h2 className='new-release-image-name'>{item.name}</h2>
                  </div>
                
                <div className='new-releases-prices'>
                  <div>
                    <h2>{item.price} Matic</h2>
                    <h3>${item.priceTwo}</h3>
                  </div>
                  <div>
                    <img src={polygon} alt="polygon" className='polygon' />
                  </div>
                </div>

                <div className='new-release-owner'>
                  <img src={item.ownerImage} alt={item.owner} />
                  <h4>{item.owner}</h4>
                </div>
              </div>)
            )
          })
        }
      </div>
      <div className='load-more'>
          <button>Load More</button>
        </div>
    </section>
      }
    </main>
  )
}

export default Newreleases