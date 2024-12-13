import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Heading from '../../Utils/Heading/Heading';
import Button from '../../Components/Button/Button';
import { Oval } from 'react-loader-spinner';
import googlelogo from '../../images/google.svg';
import img from '../../images/class-ecom-login-img.jpg';
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import Cookies from 'js-cookie';
import { emailregex } from '../../Components/Components';
import './Login.css';
import { useLoginMutation } from '../../Redux/apiSlice';

const Login = () => {

    const navigate = useNavigate()

    const [login , {isLoading , isError , error}] =  useLoginMutation()

    const [checktype , setChecktype] = useState(false)

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


    const loginBtn = async (e)=>{
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
            try {
                const res = await login(loginData)
                const data = res.data
                if(data.statuscode === 400){
                    return alert (data.message)
                }
                if(data.statuscode === 500){
                    return alert (data.message)
                }
                console.log(data);
                Cookies.set("accessToken" , data.data.accessToken,{expires:1});
               
                    if(Cookies.get("accessToken")){
                        navigate("/")
                    }
                
            } catch (error) {
                console.log("login post error" , error.message); 
            } 
        }
    }
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
                            <input className='password-input' value={loginData.password } type={checktype ? "password" : "text"} placeholder='Enter your password' name="password" onChange={handelform}/>
                            {  
                                checktype  
                                ?
                                <IoIosEyeOff className='login-closs_eye' onClick={()=>{setChecktype(!checktype)}}/>
                                :
                                <IoMdEye className='login-open_eye' onClick={()=>{setChecktype(!checktype)}} />
                            }
                            {sendError.password && <p className='lonin-error'>{sendError.password}</p>}
                        </div>
                        <div className='forget-pass-box'>
                            <Link className='forget-pass' to='forgetpass'>Forget?</Link>
                        </div>
                        <div className='form-login-btn-box'>
                            {
                                isLoading
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