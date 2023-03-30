import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Cart = ({ cart }) => {
    // const {cart} = props


    //---------------------------------------------------------------------------------------------------------

    // Total Price Calculate
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price
        totalShipping = totalShipping + product.shipping
    }

    // Tax Calculate--------------------------------------------------------------------------------------------

    const tax = totalPrice * 7 / 100;

    // Grand Total ----------------------------------------------------------------------------------------------

    const grandTotal = totalPrice + totalShipping + tax

    return (
        <div className='cart'>
            <h2 className='cart-head'>Order Summary</h2>
            <div className='cart-info'>
                <p>Selected Items: {cart.length} </p>
                <p>Total Price: ${totalPrice} </p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h5 className='grand-total'>Grand Total: ${grandTotal.toFixed(2)}</h5>
                <button className='clear-cart'>
                    Clear Cart <FontAwesomeIcon icon={faTrashCan} />
                </button> <br />
                <button className='review-order'>
                    Review Order <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>

        </div>
    );
};

export default Cart;