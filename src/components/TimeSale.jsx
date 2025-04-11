import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useProductData } from '../context/ProductContext';
import ProductCard from './ProductCard';
const TimeSale = () => {
    const { saleList } = useProductData();
    return (
        <div>
            <div className='margin-top-3rem'>
                <Container>
                    <h4 className='margin-bottom-2rem'> 오늘의 타임세일 ⏰</h4>
                    <Row>
                        {saleList?.map((item, i) => (
                            <Col lg={2} xs={4} key={i}>
                                <ProductCard item={item} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default TimeSale;
