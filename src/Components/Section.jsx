import React from 'react'
import './section.css'
import Hero from './hero/Hero'
import Newreleases from './newreleaases/Newreleases'
import Speciallycollected from './speciallycollected/Speciallycollected'
import Howitworks from './howitworks/Howitworks'
import Jointhenetwork from './jointhenetwork/Jointhenetwork'
import Trending from './trending/Trending'
const Section = () => {
  return (
    <main>
     <Hero></Hero>
    
     <Newreleases></Newreleases>

     <Trending></Trending>
      
     <Speciallycollected></Speciallycollected>

     <Howitworks></Howitworks>

     <Jointhenetwork></Jointhenetwork>

  </main>
  )
}

export default Section