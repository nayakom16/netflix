import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/hero'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home
