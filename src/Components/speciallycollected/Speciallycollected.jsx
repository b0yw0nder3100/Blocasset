import React from 'react'
import speciallycollected from './specially-collected.js'
import Icon from '../../Assets/Interface/Icon.png'

const Speciallycollected = () => {
  return (
    <section className='next-section-three'>
        <h4>Specially collected</h4>
        <h1>Blocasset specials</h1>

        <div className='special-container'>
            {
                speciallycollected.map((item => {
                    return (
                        <div key={item.id}>
                            <div className='special-con'>
                                <img src={item.image} alt={item.name} />
                                <div className='special-container-text'>
                                <h3>{item.name}</h3>
                                <h2>{item.text} <img src={Icon} alt="icon" /> </h2>
                            </div>
                            </div>
                        </div>
                        )
            }))
        }
        </div>
      </section>
  )
}

export default Speciallycollected