import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';
const New = ({ newList }) => {
    console.log('object', newList);
    return (
        <div>
            <Container>
                <h4 className='margin-bottom-2rem'>오늘 따끈따끈 갓나온 신상 ITEM 추천 ✨</h4>
                <Row>
                    {newList.map((item, i) => (
                        <Col lg={3} key={i}>
                            <ProductCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default New;
