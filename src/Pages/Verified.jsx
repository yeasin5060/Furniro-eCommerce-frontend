import React from 'react'
import Heading from '../Utils/Heading/Heading'
import './Verified.css'
import { useParams } from 'react-router-dom'
import { useResendMailMutation } from '../Redux/apiSlice'

const Verified = () => {
  const {email} = useParams()
  const [resendMail , {isLoading , isError , error}] = useResendMailMutation()
    const handleVerified = async () =>{
       await resendMail({email})
    }
  return (
    <div id = 'verified'>
        <div className='container'>
            <div className='verified-container'>
                <Heading level='h1' text='verified your email' className='verified-container-head'/>
                <button className='verified-btn' onClick={handleVerified}>verified</button>
            </div>
        </div>
    </div>
  )
}

export default Verified