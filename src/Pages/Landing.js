import React from 'react'

import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import {Link} from 'react-router-dom'

import {Logo} from '../Components'


const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo/>
        </nav>
        <div className='container page'>
            <div className='info'>
                <h1>job <span>tracking</span> app</h1>
                <p>I'm baby scenester try-hard lomo thundercats, iceland quinoa yes plz green juice austin next level bushwick before they sold out cred banjo etsy. Umami actually paleo letterpress, kinfolk authentic tofu salvia viral plaid pabst shoreditch freegan activated charcoal keffiyeh. Celiac pork belly flexitarian</p>
                <Link to='/register' className='btn btn-hero'>Login/Register</Link>
            </div>

            <img src={main} alt='job svg' className='img main-img'/>
        </div>
    </Wrapper>
  )
}



export default Landing;