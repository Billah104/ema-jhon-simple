import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name , img, price, quantity, ratings, seller} = props.product
    const handleAddToCard = props.handleAddToCard
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'> {name} </h6>
                <p> Price: ${price}  </p>
                <p>Manufacturer: {seller} </p>
                <p>Rating: {ratings} stars </p>
            </div>
            <button onClick={() => handleAddToCard(props.product)} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;