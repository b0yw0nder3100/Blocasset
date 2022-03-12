import React from 'react'
import trending from '../trending/trending-ing'
import vector from '../../Assets/Vector2.png'
import Icon from '../../Assets/Interface/Icon.png'
import Icon2 from '../../Assets/Interface/Icon2.png'
import Icon3 from '../../Assets/Interface/Icon3.png'
import Icon4 from '../../Assets/Interface/Icon4.png'
import polygon from '../../Assets/Interface/Polygon.png'
import Carousel from 'react-elastic-carousel'
const Trending = () => {
  const dim = window.innerWidth
  return (
      <section className='next-section-two'>
        <div className='next-section-two-header two two'> 
             <div className='next-section-two-header-top two two'>
                <h1>Trending</h1>
                <img src={vector} alt="vector" className='next-section-header-image' /> 
            </div>
            <p>Newly minted assets from top artists around the world</p>
      </div>
        
      {   dim > 1025 &&  <Carousel 
          itemsToShow={4}
          showArrows={false}
          initialActiveIndex={20}
          itemPadding={[0, 0, 50, 20]}
          >     
        {  trending.map((item ) => {
            return (
              <div key={item.id} className='new-releases-container two'>
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
          </Carousel> }

      {   dim > 601 && dim < 1025 &&  <Carousel 
          itemsToShow={3}
          showArrows={false}
          initialActiveIndex={20}
          itemPadding={[0, 0, 50, 20]}
          >     
        {  trending.map((item ) => {
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
          </Carousel> }
      {   dim < 601 &&   <Carousel 
          itemsToShow={1}
          showArrows={false}
          initialActiveIndex={5}
          itemPadding={[0, 0, 50]}
          >     
        {  trending.map((item ) => {
            return (
             item.id < 12 && <div key={item.id} className='new-releases-container'>
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
          </Carousel> }
      </section>
  )
}

export default Trending