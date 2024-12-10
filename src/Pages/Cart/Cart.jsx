import React from 'react'
import Heading from '../../Utils/Heading/Heading';
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";
import whiteshoes from '../../images/white-shoes.jpg';
import blackheadphone from '../../images/black-headphone.jpg'
import './Cart.css'

const cartProductArray = [
  {
      id : 1,
      name : "P47 Wireless Bluetooth Headphone Stereo Earphone with SD Card Slot",
      img : blackheadphone,
      dec : "This is a white shoes",
      color : "Black,",
      brand : "No BrandMore Audio from No Brand,",
      desprice : "Tk 1000",
      oldprice : "Tk 2,500",
  },
  {
    id : 2,
    name : "item ChessCourt -Hot Collection Stylish and Fashionable Winter and Summer Exclusive Sneakers",
    img : whiteshoes,
    dec : "This is a white shoes",
    color : "Black,",
    size : "XL,",
    brand : "No Brand,",
    desprice : "Tk 2000",
    oldprice : "Tk 3,500",
  },
  {
    id : 3,
    name : "item ChessCourt -Hot Collection Stylish and Fashionable Winter and Summer Exclusive Sneakers",
    img : whiteshoes,
    dec : "This is a white shoes",
    color : "Black,",
    size : "XL,",
    brand : "No Brand,",
    desprice : "Tk 2000",
    oldprice : "Tk 3,500",
  },
  {
    id : 4,
    name : "item ChessCourt -Hot Collection Stylish and Fashionable Winter and Summer Exclusive Sneakers",
    img : whiteshoes,
    dec : "This is a white shoes",
    color : "Black,",
    size : "XL,",
    brand : "No Brand,",
    desprice : "Tk 2000",
    oldprice : "Tk 3,500",
  },
]

const Cart = () => {
  return (
    <div id ='cart'>
      <div className='container'>
        <div className='cart-container-flex'>
          <div className='cart-item-box-flex'>
            {
              cartProductArray && 
              cartProductArray.map((item , index)=>(
                <div className='cart-product-box-flex'>
                  <div className='cart-product-flex'>
                    <div className='cart-porduct-img-box'>
                      <img src={item.img} alt="not found" />
                    </div>
                    <div className='cart-porduct-des-box'>
                      <Heading level='h3' text={item.name} className='cart-porduct-name'/>
                      <div className='cart-porduct-des-flex'>
                        <Heading level='h5' text={item.brand} className='cart-porduct-brand'/>
                        <Heading level='h5' text={item.color} className='cart-porduct-color'/>
                        <Heading level='h5' text={item.size} className='cart-porduct-size'/>
                      </div>
                    </div>
                      <div className='cart-porduct-price-box'>
                        <Heading level='h3' text={item.desprice} className='cart-porduct-desprice'/>
                        <Heading level='del' text={item.oldprice} className='cart-porduct-oldprice'/>
                        <div className='cart-porduct-price-icon-box-flex'>
                          <div className='cart-porduct-price-love-flex'>
                            <button className='cart-porduct-price-icon-btn'><CiHeart /></button>
                          </div>
                          <div className='cart-porduct-price-delet-flex'>
                            <button className='cart-porduct-price-icon-btn'><AiTwotoneDelete /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='cart-porduct-cound-box'>
                      <div className="cart-porduct-cound-box-flex">
                        <div className='cart-porduct-cound-btn-box'>
                          <button className='cart-porduct-cound-btn'> - </button>
                        </div>
                        <Heading level= 'p' text='1' className='cart-porduct-cound'/>
                        <div className='cart-porduct-cound-btn-box'>
                          <button className='cart-porduct-cound-btn'> + </button>
                        </div>
                      </div>
                    </div>
                </div>
              ))
            }
          </div>
          <div className='cart-payment-box'>
              <Heading level='h4' text='Location' className='cart-payment-location'/>
              <div className='cart-address-box-flex'>
                <CiLocationOn className='location-icon' />
                <Heading level='p' text='Add Shipping Address' className='cart-payment-address'/>
              </div>
              <hr/>
              <div className='cart-order-box'>
                <Heading level='h3' text='Order Summary' className='cart-order-summary'/>
                <div className='cart-order-item-flex'>
                  <Heading level='h4' text='subtotal' className='cart-order-item'/>
                  <Heading level='h4' text='0' className='cart-order-item-price'/>
                </div>
                <div className='cart-order-item-flex'>
                  <Heading level='h4' text='Shipping Fee' className='cart-order-item'/>
                  <Heading level='h4' text='0' className='cart-order-item-price'/>
                </div>
                <div className='cart-payment-input-box-flex'>
                  <div className='cart-payment-input-box'>
                    <input className='cart-payment-input' placeholder='Enter Voucher Code' type="text" />
                  </div>
                  <div className='cart-payment-btn-box'>
                    <button className='cart-payment-btn'>apply</button>
                  </div>
                </div>
                <div className='cart-order-total-flex'>
                  <Heading level='h4' text='total' className='cart-order-total'/>
                  <Heading level='h4' text='0' className='cart-order-total-price'/>
                </div>
              </div>
              <div className='cart-product-checkout-btn-box'>
                <button className='cart-product-checkout-btn'>proceed to checkout (0)</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart