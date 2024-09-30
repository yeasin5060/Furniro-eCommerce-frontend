import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Heading from '../../Utils/Heading/Heading';
import Button from '../../Components/Button/Button';
import { Oval } from 'react-loader-spinner';
import googlelogo from '../../images/google.svg';
import img from '../../images/class-ecom-login-img.jpg';
import './Login.css'

const Login = () => {

    const navigate = useNavigate()

    const [loginData , setLoginData] = useState({
        email : "",
        password : "",
    })

                //this useState send the error when user empty the input box and press the login button;
    const [sendError , setSendError] = useState({
        email : "",
        password : "",
    }) 

    const handelform = (e)=>{
        let {name , value} = e.target
        setLoginData({...loginData,[name]:value})
    }

         //email regex
  const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 

    const loginBtn = (e)=>{
        e.preventDefault();
                //validation
        if(!loginData.email){
            setSendError({email:"Email is Require"})
        }else if(!loginData.email.match(emailregex)){
            setSendError({email : ""})
            setSendError({email : "Inter valid Email"})
        }else if(!loginData.password){
            setSendError({password : "Password is Require"})
        }else{
            setSendError({password:""})
            //react loder ture
            setReactLoder(true)
            navigate("/home")

            setLoginData({
                email : "",
                password : "",
                phoneNumber : ""
            })  
        }
    }
    let [ reactLoder , setReactLoder] = useState (false)
        //react loder
  return (
    <section id='login-page'>
        <div className='login-page-wrapper'>
            <div className='user-details-box'>
                <div className='form-user-all-details-box'>
                    <div className='user-details'>
                        <Heading level='h2' text='Login your account' className='login-page-head'/>
                        <Heading level='h2' text='Enter your credentials to access your account' className='login-page-pera'/>
                        <div className='google-account-box'>
                            <img src={googlelogo} alt="not found" />
                            <Link className='google-account' to='google'>Sign in with Google</Link>
                        </div>
                        <div className='or-box'>or</div>
                    </div>
                    <form className='form-box'>
                        <Heading level='p' text="Email Address" className="email-style"/>
                        <div className='email-input-box'>
                            <input className='email-input' value={loginData.email} type='email' placeholder='Enter your email' name="email" onChange={handelform}/>
                            {sendError.email && <p className='lonin-error'>{sendError.email}</p>}
                        </div>
                        <Heading level='p' text="password" className="password-style"/>
                        <div className='password-input-box'>
                            <input className='password-input' value={loginData.password } type='password' placeholder='Enter your password' name="password" onChange={handelform}/>
                            {sendError.password && <p className='lonin-error'>{sendError.password}</p>}
                        </div>
                        <div className='forget-pass-box'>
                            <Link className='forget-pass' to='forget'>Forget?</Link>
                        </div>
                        <div className='form-login-btn-box'>
                            {
                                reactLoder
                                ?
                                (<Oval
                                    visible={true}
                                    height="30"
                                    width="30"
                                    color="#fff"
                                    ariaLabel="oval-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="oval"
                                    />)
                                :
                                <Button Submit={loginBtn} text='login' style='form-login-btn'/>
                            }
                        </div>
                        <div className='sign-create-account-box'>
                            <Heading text='Not a member?' className='sign-create-account-style'/>
                            <Link className='sign-create-style' to='/signup'>Create Account</Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className='login-image-box'>
                <img src={img} alt="not found" />
            </div>
        </div>
    </section>
  )
}

export default Login