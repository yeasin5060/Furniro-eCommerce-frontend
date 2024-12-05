import React, { useEffect, useState } from 'react'
import Heading from '../../../Utils/Heading/Heading';
import productone from '../../../images/productone.png';
import producttwo from '../../../images/producttwo.png';
import productthree from '../../../images/productthree.png';
import productfour from '../../../images/productfour.png';
import productfive from '../../../images/productfive.png';
import productsix from '../../../images/productsix.png';
import productseven from '../../../images/productseven.png';
import producteight from '../../../images/productone.png';
import './Shopproduct.css'
import Psbutton from '../../../Components/Psbutton/Psbutton';
import { useDispatch } from 'react-redux';
import { singleProductData } from '../../../Redux/singleProductSlice';
import { useNavigate } from 'react-router-dom';

let shopProductArray = [
    {
        id : 1 , 
        name : "Syltherine",
        pera : "Stylish cafe chair",
        img : productone,
        newprice : "Rp 2.500.000",
        oldprice : "Rp 3.500.000"
    },
    {
        id : 2, 
        name : "Syltherine",
        pera : "Stylish cafe chair",
        img : producttwo,
        newprice : "Rp 2.500.000",
        oldprice : "Rp 3.500.000"
    },
    {
        id : 3 , 
        name : "Syltherine",
        pera : "Stylish cafe chair",
        img : productthree,
        newprice : "Rp 2.500.000",
        oldprice : "Rp 3.500.000"
    },
    {
        id : 4 , 
        name : "Syltherine",
        pera : "Stylish cafe chair",
        img : productfour,
        newprice : "Rp 2.500.000",
        oldprice : "Rp 3.500.000"
    },
    {
        id : 5, 
        name : "Syltherine",
        pera : "Stylish cafe chair",
        img : productfive,
        newprice : "Rp 2.500.000",
        oldprice : "Rp 3.500.000"
    },
    {
        id : 6 , 
        name : "Syltherine",
        pera : "Stylish cafe chair",
        img : productsix,
        newprice : "Rp 2.500.000",
        oldprice : "Rp 3.500.000"
    },
    {
        id : 7 , 
        name : "Syltherine",
        pera : "Stylish cafe chair",
        img : productseven,
        newprice : "Rp 2.500.000",
        oldprice : "Rp 3.500.000"
    },
    {
        id : 8 , 
        name : "Syltherine",
        pera : "Stylish cafe chair",
        img : producteight,
        newprice : "Rp 2.500.000",
        oldprice : "Rp 3.500.000"
    },
    {
        id : 9 , 
        name : "Syltherine",
        pera : "Stylish cafe chair",
        img : productone,
        newprice : "Rp 2.500.000",
        oldprice : "Rp 3.500.000"
    },
    {
        id : 10, 
        name : "Syltherine",
        pera : "Stylish cafe chair",
        img : producttwo,
        newprice : "Rp 2.500.000",
        oldprice : "Rp 3.500.000"
    },
    {
        id : 11 , 
        name : "Syltherine",
        pera : "Stylish cafe chair",
        img : productthree,
        newprice : "Rp 2.500.000",
        oldprice : "Rp 3.500.000"
    },
    {
        id : 12 , 
        name : "Syltherine",
        pera : "Stylish cafe chair",
        img : productfour,
        newprice : "Rp 2.500.000",
        oldprice : "Rp 3.500.000"
    },
    {
        id : 13, 
        name : "Syltherine",
        pera : "Stylish cafe chair",
        img : productfive,
        newprice : "Rp 2.500.000",
        oldprice : "Rp 3.500.000"
    },
    {
        id : 14, 
        name : "Syltherine",
        pera : "Stylish cafe chair",
        img : productsix,
        newprice : "Rp 2.500.000",
        oldprice : "Rp 3.500.000"
    },
    {
        id : 15 , 
        name : "Syltherine",
        pera : "Stylish cafe chair",
        img : productseven,
        newprice : "Rp 2.500.000",
        oldprice : "Rp 3.500.000"
    },
    {
        id : 16 , 
        name : "Syltherine",
        pera : "Stylish cafe chair",
        img : producteight,
        newprice : "Rp 2.500.000",
        oldprice : "Rp 3.500.000"
    },
]
const Shopproduct = () => {
    const [allProduct , setAllProduct] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        setAllProduct(shopProductArray)
    },[])
    //console.log(allProduct);

    const handleCart = (item) => {
        try {
            dispatch(singleProductData(item))
            navigate('/singleproduct')
        } catch (error) {
            console.log('single product data' , error.message); 
        }
   }
   
  return (
    <section id='shopproduct'>
        <div className='container'>
            <div className='shopproduct-contant-wrapper'>
                <div className='shopproduct-images-container-flex'>
                    {
                        allProduct&&
                        allProduct.map((items)=> (
                           <button  key={items.id} className='shopproduct-btn' onClick={()=>handleCart(items)}>
                                <div className='shopproduct-img-container'>
                                    <div className='shopproduct-img-box'>
                                        <img src={items.img} alt='not found' />
                                    </div>
                                    <div className='shopproduct-image-contant-box'>
                                        <Heading level='h4' text={items.name} className='shopproduct-name'/>
                                        <Heading level='h5' text={items.pera} className='shopproduct-pera'/>
                                        <div className='shopproduct-price-box-flex'>
                                            <Heading level='h5' text={items.newprice} className='shopproduct-newprice'/>
                                            <Heading level='h5' text={items.oldprice} className='shopproduct-oldprice'/>
                                        </div>
                                    </div>    
                                </div>
                           </button>
                        ))
                    }
                </div>
            </div>
            <div className='shopproduct-ps-box-flex'>
                <Psbutton text='1'/>
                <Psbutton text='2'/>
                <Psbutton text='3'/>
                <Psbutton text='next'/>
            </div>
        </div>
    </section>
  )
}

export default Shopproduct