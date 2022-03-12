import React from 'react'
import howitworks from './how-itworks'
import vector from '../../Assets/Vector2.png'

const Howitworks = () => {
  return (
      <section className='next-section-four'>
          <div className='next-section-two-header-top three'>
            <h1>How it works</h1>
            <img src={vector} alt="vector" className='next-section-header-image three' /> 
          
        </div>
        <div className='next-section-four-content'>
            {
            howitworks.map((item) => {
                return (
                    <div className='next-section-four-container'>
                        <img src={item.image} alt={item.name} />
                        <h1>{item.name}</h1>
                        <p>{item.text}</p>
                    </div>
                )
            })
        }
        </div>
      </section>
  )
}

export default Howitworks