import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    const gotoProductDetail = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className='img-card'>
            <img
                className='product-img'
                src={item?.img}
                onClick={() => gotoProductDetail(item?.id)}
                alt='product-img'
            />
            <div className='product-info'>
                <span className='new-text'> {item?.new ? 'new' : ''}</span>
                <span className='musinsa-choice-text'>{item?.choice ? 'musinsa standard' : '마리끌레르'}</span>
                <div className='title-text'>{item?.title}</div>
                <div className='price-text'>{item?.price}원</div>
            </div>
        </div>
    );
};

export default ProductCard;
