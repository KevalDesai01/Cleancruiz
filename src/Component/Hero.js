import React from 'react'

import heroimage from '../image/heroimage.png'
import amazon_logo from '../image/amazon_logo.png'
import ebay_logo from '../image/ebay_logo.png'
import klarna_logo from '../image/klarna_logo.png'
import master_card_logo from '../image/master_card_logo.png'
import neteller_logo from '../image/neteller_logo.png'
import stripe_logo from '../image/stripe_logo.png'

import Navbar from './Navbar'
import Mobile from './Mobile'
import Woman from './Woman'

const Hero = () => {
  return (
    <div>

      <Navbar />
      <div className='container'>

        <div className='row'>

          <div className='col-lg-5'>
            <h1>Let us handle your<br /> next cleaning</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua <br />
              Thank you.</p>
            <button className='btn-booknow'>Book Now</button>
          </div>

          <div className='col-lg-7'>
            <img className='hero-image' src={heroimage} />
          </div>
        </div>


        <div className='row' id="hero-row">

          <div className='col-lg-2'>
            <img src={amazon_logo} />
          </div>

          <div className='col-lg-2'>
            <img src={ebay_logo} />
          </div>

          <div className='col-lg-2'>
            <img src={klarna_logo} />
          </div>

          <div className='col-lg-2'>
            <img src={master_card_logo} />
          </div>

          <div className='col-lg-2'>
            <img className='neteller-img' src={neteller_logo} />
          </div>

          <div className='col-lg-2'>
            <img src={stripe_logo} />
          </div>

        </div>

      </div>
      <Mobile />
      <Woman/>







    </div>
  )
}

export default Hero