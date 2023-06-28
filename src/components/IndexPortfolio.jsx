import React from 'react'
import Presentation from './Presentation'
import WorkExperience from './WorkExperience'
import Philosophy from './Philosophy'
import SkillsSet from './SkillsSet'
import MyPorjects from './MyPorjects'
import Behance from './Behance'

import Contact from './Contact'
import Footer from './Footer'
import Languages from './Languages'
import NavBar from './NavBar'
import { ContactLogic } from './ContactLogic'
import NavBarResponsive from './NavBarResponsive'
const IndexPortfolio = () => {
  return (
    <section className='max-w-[1600px] justify-center mx-auto'>
{/* 
      <NavBar/> */}
      <NavBarResponsive/>
    <Presentation/> 
      <WorkExperience/>
      <Languages/>
      <Philosophy/>
      <SkillsSet/>
      <MyPorjects/>
      <Behance/>
      <ContactLogic/>
     {/*  <Contact/> */}
     
    </section>
  )
}

export default IndexPortfolio