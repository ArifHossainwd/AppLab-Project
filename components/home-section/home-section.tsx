import React from 'react'
import Navbar from '../common/navbar'
import HeroSection from '../hero-section/hero-section'
import Section_1 from '../section-1/section_1'
import Section_2 from '../section-2/section_2'
import Section_3 from '../section-3/section_3'
import Section_4 from '../section-4/section_4'
import Section_5 from '../section-5/section_5'
import Section_6 from '../section-6/section_6'
import Section_7 from '../section-7/section_7'
import Section_8 from '../section-8/section_8'
import Section_9 from '../section-9/section_9'
import FutterSection from '../futter-section/futter-section'

export default function HomeSection() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Section_1/>
      <Section_2/>
      <Section_3/>
      <Section_4/>
      <Section_5/>
      <Section_6/>
      <Section_7/>
      <Section_8/>
      <Section_9/>
      <FutterSection/>
    </div>
  )
}
