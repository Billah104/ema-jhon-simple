import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // const {cart} = props


  //---------------------------------------------------------------------------------------------------------

    // Total Price Calculate
    let total = 0;
    for (const product of cart){
        total = total + product.price
    }
// 
    return (
        <div className='cart'>
            <h2 className='cart-head'>Order Summary</h2>
            <div className='cart-info'>
            <p>Selected Items: {cart.length} </p>
            <p>Total Price: {total} </p>
            <p>Total Shipping Charge: $5</p>
            <p>Tax: $114</p>
            <h5 className='grand-total'>Grand Total:</h5>
            </div>
            
        </div>
    );
};

export default Cart;