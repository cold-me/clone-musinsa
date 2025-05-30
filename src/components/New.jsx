import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useProductData } from '../context/ProductContext';
import ProductCard from './ProductCard';
const New = () => {
    const { newList } = useProductData();
    return (
        <div className='margin-top-3rem'>
            <Container>
                <h4 className='margin-bottom-2rem'>오늘 따끈따끈 갓나온 NEW ITEM 추천 ✨</h4>
                <Row>
                    {newList?.map((item, i) => (
                        <Col lg={2} xs={4} key={i}>
                            <ProductCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default New;
