import React from 'react'
import logo from '../image/logo.png'


const Navbar = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="#"><img className='logo'  src={logo}/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="#">MENU</a>
                            <a class="nav-link" href="#">ABOUT US</a>
                            <a class="nav-link" href="#">SERVICE</a>
                            <a class="nav-link" href="#">CONTACT</a>
                            <button className='btn-login'>LOGIN</button>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar