import React from 'react'
import Heading from '../../Utils/Heading/Heading';
import logo from '../../images/furniro-logo.png';
import forgetlogo from '../../images/forgetpass-icon.jpg';
import './Forgetpassword.css';

const Forgetpassword = () => {
  return (
    <div id = 'forgetpassword'>
        <div className='container'>
            <div className='forgetpass-containt-wrapper'>
                <div className='forgetpass-logo-box'>
                    <img src={logo} alt="not found" />
                </div>
                <form className='forgetpass-form-box'>
                    <div className='forgetpass-contant-box'>
                        <div className='forgetpass-img-box'>
                            <img src={forgetlogo} alt="not found" />
                        </div>
                        <Heading level='h2' text='forget password' className='forgetpassword-head'/>
                        <Heading level='p' text='Enter your email and reset your password' className='fogetpaee-pera'/>
                    </div>
                    <Heading level='p' text="Email Address" className="forgetpass-email-style"/>
                    <div className='forgetpass-email-input-box'>
                        <input className='forgetpass-email-input' type='email' placeholder='Enter your email' name="email"/>
                    </div>
                    <div className='forgetpass-newpass-input-box'>
                        <input className='forgetpass-newpass-input' type='password' placeholder='Enter your new password' name="newpassword"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Forgetpassword