import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';
const TimeSale = ({ saleList }) => {
    return (
        <div>
            <div className='margin-top-4rem'>
                <Container>
                    <h4 className='margin-bottom-2rem'> 오늘의 타임세일 ⏰</h4>
                    <Row>
                        {saleList.map((item, i) => (
                            <Col lg={3} key={i}>
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
