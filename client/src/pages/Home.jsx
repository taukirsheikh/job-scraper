import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Job from '../components/Jobs'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className=' bg-indigo-200'>
    <Navbar/>
    <Hero/>
    <Job/>
    <Footer/>
    
    </div>
  )
}

export default Home