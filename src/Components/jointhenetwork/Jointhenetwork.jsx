import React from 'react'
import vector1 from '../../Assets/Media/Vector1.png'
import vector2 from '../../Assets/Media/Vector2.png'
import un6 from '../../Assets/unnamed6.png'
import un8 from '../../Assets/unnamed8.png'
import un9 from '../../Assets/unnamed9.png'
import un10 from '../../Assets/unnamed10.png'
import avatar2 from '../../Assets/Avatar/Avatar2.png'

const Jointhenetwork = () => {
  return (
    <section className='next-section-five'>
        <div className='next-section-five-top'>
        <h4>Join the network</h4>
        <h1> <img src={vector1}  alt='vector1' className='vectorone'/>  Monetize your skills, upload your Web3 assets and get paid immediately  in crypto</h1>
        <button>Become a Blocributor &#8594;</button>
        </div>
        <div className='next-section-five-bottom'>
            <div className='next-section-five-bottom-containers'>
                <div className='next-section-five-bottom-container'>
                    <img src={un6} alt='im' className='art'/>
                    <div className='section-five-bottom-container-owner'>   
                        <div className='section-five-bottom-container-owner-info'>
                            <div className='owner'>
                                <img src={avatar2} alt="avatar" className='avatar2' />
                                <div className='owner-details'>
                                    <h2>&#64;ummiweb</h2>
                                    <h3>3D Designer</h3>
                                </div>
                            </div>
                            <h1 className='follow'>follow</h1>
                        </div>
                    </div>
                </div>
                <div className='next-section-five-bottom-container'>
                    <img src={un10} alt='im' className='art'/>
                    <div className='section-five-bottom-container-owner'>   
                        <div className='section-five-bottom-container-owner-info'>
                            <div className='owner'>
                                <img src={avatar2} alt="avatar" className='avatar2' />
                                <div className='owner-details'>
                                    <h2>&#64;comradeglry</h2>
                                    <h3>Motion Designer</h3>
                                </div>
                            </div>
                            <h1 className='follow'>follow</h1>
                        </div>
                    </div>
                </div>
                <div className='next-section-five-bottom-container'>
                    <img src={un8} alt='im' className='art'/>
                    <div className='section-five-bottom-container-owner'>   
                        <div className='section-five-bottom-container-owner-info'>
                            <div className='owner'>
                                <img src={avatar2} alt="avatar" className='avatar2' />
                                <div className='owner-details'>
                                    <h2>&#64;psalmos</h2>
                                    <h3>Photographer</h3>
                                </div>
                            </div>
                            <h1 className='follow'>follow</h1>
                        </div>
                    </div>
                </div>
                <div className='next-section-five-bottom-container'>
                    <img src={un9} alt='im' className='art'/>
                    <div className='section-five-bottom-container-owner'>   
                        <div className='section-five-bottom-container-owner-info'>
                            <div className='owner'>
                                <img src={avatar2} alt="avatar" className='avatar2' />
                                <div className='owner-details'>
                                    <h2>&#64;davide</h2>
                                    <h3>Illustrator</h3>
                                </div>
                            </div>
                            <h1 className='follow'>follow</h1>
                        </div>
                    </div>
                </div>
<img src={vector2}  alt='vector1' className='vectortwo'/> 
            </div>

        </div>
    </section>
  )
}

export default Jointhenetwork