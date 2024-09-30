import React from 'react'
import logo from '../../images/furniro logo.png';
import { Link } from 'react-router-dom';
import { RiAccountCircleLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav id='navbar'>
        <div className='container'>
            <div className='nav-wrapper'>
                <div className='nav-logo-container'>
                    <img src={logo} alt='not found' />
                </div>
                <div className='nav-pages-container'>
                    <ul className='nav-pages-items'>
                        <li>
                            <Link to ='home'>home</Link>
                        </li>
                        <li>
                            <Link to ='shop'>shop</Link>
                        </li>
                        <li>
                            <Link to ='about'>about</Link>
                        </li>
                        <li>
                            <Link to ='contact'>contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='nav-icons-container'>
                    <div className='nav-icon-box'>
                        <RiAccountCircleLine />
                    </div>
                    <div className='nav-icon-box'>
                        <IoSearchOutline />
                    </div>
                    <div className='nav-icon-box'>
                        <FaRegHeart />
                    </div>
                    <div className='nav-icon-box'>
                        <BsCart3 />
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar