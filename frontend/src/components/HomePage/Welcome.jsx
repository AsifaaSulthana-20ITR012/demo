import React from 'react'

import About from './about/About'
import Footer from './footer/Footer'

const WelcomePage = () => {
  return (
    <>
    <div>
      <div id='about1'><About /></div>
      <br />
      <br />
      <div id='contact1'><Footer /></div>
      </div>
    </>
  )
}

export default WelcomePage