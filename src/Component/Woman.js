import React from 'react'

import woman from '../image/woman.png'
import endline from '../image/endline.png'

const Woman = () => {
    return (
        <div>

            <div className='container-fulid' id="container-woman">
                <div className='container'>
                    <div className='row' id="woman-row">
                        <div className='col-lg-6'>
                            <h2 className='heading-woman'>Our customer care<br />
                                agents are always ready<br />
                                to help you</h2>
                            <p className='text-woman'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
                                eiusmod tempor incididunt ut labore et dolore magna aliqua <br /> eiusmod tempor incididunt ut labore  dolore magna aliqua  ghetu   <br />
                                Thank you.</p>
                            <button className='btn-woman'>Book Now</button>
                        </div>
                        <div className='col-lg-6'  data-aos="zoom-in">
                            <img className='woman-img' src={woman} />
                        </div>
                    </div>

                </div>
                {/* <div className='end-section'>

                    <h3 className='heading-cruiz'>Clean Cruiz</h3>
                    <h4 className='copyright'>Copyright 2018-2020 Clean Cruiz - All rights reserved.</h4>
                </div> */}
            </div>
            <div className='end-section'>

<h3 className='heading-cruiz'>Clean Cruiz</h3>
<h4 className='copyright'>Copyright 2018-2020 Clean Cruiz - All rights reserved.</h4>
</div>











        </div>
    )
}

export default Woman