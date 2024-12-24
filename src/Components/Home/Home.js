import React from 'react'
import HomePage1 from './HomePage1'
import NavHome from '../../Common/NavHome'
import HomeAbout from './HomeAbout'
import HomeService from './HomeService'
import HomeManagement from './HomeManagement'
import HomeCaseStudy from './HomeCaseStudy'
import HomePortfolio from './HomePortfolio'
import HomeTestimonial from './HomeTestimonial'
import HomeBlog from './HomeBlog'
import FooterHome from '../../Common/FooterHome'

function Home() {
  return (
    <div> 
        <NavHome/>  
        <HomePage1/>
        <HomeAbout/>
        <HomeService/>
        <HomeManagement/>
        <HomeCaseStudy/>
        <HomePortfolio/>
        <HomeTestimonial/>
        <HomeBlog/>
        <FooterHome/>
    </div>
  )
}

export default Home