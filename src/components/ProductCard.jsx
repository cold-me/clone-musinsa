import React from 'react';

const ProductCard = ({ item }) => {
    return (
        <div>
            <img className='product-img' src={item?.img} alt='product-img' />
            <div>{item?.new}</div>
            <div>{item?.title}</div>
            <div>₩ {item?.price}</div>
            <div>{item?.size}</div>
        </div>
    );
};

export default ProductCard;
