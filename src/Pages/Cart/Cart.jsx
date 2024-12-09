import React from 'react'
import Heading from '../../Utils/Heading/Heading';
import { CiLocationOn } from "react-icons/ci";
import './Cart.css'

const Cart = () => {
  return (
    <div id ='cart'>
      <div className='container'>
        <div className="cart-container-flex">
          <div className='cart-item-box'>

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