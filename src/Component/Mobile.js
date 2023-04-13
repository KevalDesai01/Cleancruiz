import React from 'react'

import mobile from '../image/mobile.png'
import google_button from '../image/google_button.png'
import Ellipse1 from '../image/Ellipse1.png'
import printer1 from '../image/printer1.png'
import Ellipse2 from '../image/Ellipse2.png'
import printer2 from '../image/printer2.png'
import Ellipse3 from '../image/Ellipse3.png'
import printer3 from '../image/printer3.png'

const Mobile = () => {
    return (
        <div>
            <div className='container-fluid'>

                <div className='container'>

                    <div className='row'>

                        <div className='col-lg-6'>
                            <h2 className='heading-mobile' data-aos="zoom-out">Download the Clean<br />
                                Cruiz App on playstore<br />
                                and get 10% discount</h2>
                            <p className='text-mobile'>Lorem ipsum dolor sit amet,<br />
                                consectetur adipiscing elit, sed do<br />
                                eiusmod tempor incididunt ut labore et<br />
                                dolore magna aliqua Thank you. </p>
                            <button className='btn-google'> <img className='google-btn-img' src={google_button} /> </button>
                        </div>

                        <div className='col-lg-6' data-aos="flip-up">
                            <img className='mobile-img' src={mobile} />
                        </div>

                    </div>
                </div>

            </div>

            <div className='container'>
                <h3>Our services include</h3>

                <div className='row' id="row-service">

                    <div className='col-lg-3'  data-aos="zoom-in">
                        <img className='bg-ellipse1' src={Ellipse1} />
                        <img className='printer1' src={printer1} />
                        <br/>
                        <h4>Office cleaning</h4>
                        <p className='text-office'>Lorem ipsum dolor sit amet, consectetur <br />
                            adipiscing elit, sed do eiusmod tempor<br />
                            incididunt ut labore et dolore magna aliqua <br />
                            Thank you.</p>
                    </div>
                    <div className='col-lg-3' id='col-home'  data-aos="zoom-in">
                    <img className='bg-ellipse2' src={Ellipse2} />
                        <img className='printer2' src={printer2} />
                        <br/>
                        <h4 className='heading-office'>Home cleaning</h4>
                        <p className='text-office'>Lorem ipsum dolor sit amet, consectetur <br />
                            adipiscing elit, sed do eiusmod tempor<br />
                            incididunt ut labore et dolore magna aliqua <br />
                            Thank you.</p>
                    </div>
                    <div className='col-lg-3' id='col-door'  data-aos="zoom-in">
                    <img className='bg-ellipse3' src={Ellipse3} />
                        <img className='printer3' src={printer3} />
                        <br/>
                        <h4 className='heading-door'>Out door cleaning</h4>
                        <p className='text-office'>Lorem ipsum dolor sit amet, consectetur <br />
                            adipiscing elit, sed do eiusmod tempor<br />
                            incididunt ut labore et dolore magna aliqua <br />
                            Thank you.</p>
                    </div>
                </div>
            </div>







        </div>
    )
}

export default Mobile