import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddToCard = (product) => {
        const newCart = [...cart , product ]
        setCart(newCart)
    };

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCard={handleAddToCard}
                    ></Product>)
                }
                
            </div>
            <div className='cart-container'>
               <Cart cart={cart}></Cart>
                {/* <p>Total Price: </p>
                <p>Total Shipping Charge: $5</p>
                <p>Tax: $114</p>
                <p>Grand Total:</p> */}
                {/* <button className='clear-cart'>
                    Clear Cart <FontAwesomeIcon icon={faTrashCan} />
                </button> <br />
                <button className='review-order'>
                    Review Order <FontAwesomeIcon icon={faArrowRight} />
                    </button>                 */}
            </div>
        </div>
    );
};

export default Shop;