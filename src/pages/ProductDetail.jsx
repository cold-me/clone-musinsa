import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DropDownList from '../components/DropDownList';
import { useProductData } from '../context/ProductContext';

const ProductDetail = () => {
    const { id } = useParams();
    const { productList } = useProductData();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        if (productList.length > 0) {
            setProduct(productList[id]);
        }
    }, [productList, id]);
    return (
        <div className='detail-container'>
            <img className='detail-img' src={product?.img} alt='product' />
            <div className='info-container'>
                <span className='new-text'> {product?.new ? 'new' : ''}</span>
                <div>
                    <span className='musinsa-choice-text-detail'>
                        {product?.choice ? 'musinsa standard' : '마리끌레르'}
                    </span>
                </div>
                <div>{product?.title}</div>
                <div>
                    <FontAwesomeIcon icon={faStar} style={{ color: '#FFC81E' }} />
                    <span className='review-number-text'>5</span>
                    <sapn className='review-click-text'>후기 5개 </sapn>
                </div>
                <div className='price-text'>{product?.price}원</div>
                <DropDownList size={product?.size} />
                <div className='shopping-box'>
                    <div style={{ flex: 1 }}>
                        <FontAwesomeIcon icon={faHeart} />
                        <div style={{ fontSize: 'xx-small' }}>156</div>
                    </div>
                    <Button style={{ flex: 2 }} variant='outline-secondary'>
                        장바구니
                    </Button>
                    <Button style={{ flex: 2 }} variant='dark'>
                        구매하기
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
