import React from 'react'
import flight from '../images/flight.jpg'
import { CiAlarmOn } from 'react-icons/ci'
import { FaLaptopCode } from 'react-icons/fa'
import { HiArrowNarrowRight } from 'react-icons/hi'

import './home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  const Clia = <CiAlarmOn />
  const Code = <FaLaptopCode className='icon' />
  return (
    <div className='home__container' >
      <h1 className='heading__sec first'>SpaceAir : Cross Country Airlines</h1>
      <p className='para'>
        Book International / Domestic flights at Cheap rates
      </p>
      <Link to='/marketplace'>
        <a className='getStarted'>
          Get Started With Us
          <HiArrowNarrowRight className='arrowicon' />
        </a>
      </Link>
    </div>
  )
}

export default Home
