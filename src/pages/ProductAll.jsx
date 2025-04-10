import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { useProductData } from '../context/ProductContext';
const ProductAll = () => {
    const { productList } = useProductData();

    return (
        <div className='margin-top-4rem'>
            <Container>
                <h4 className='margin-bottom-2rem'>전체 상품페이지</h4>
                <Row>
                    {productList?.map((item, i) => (
                        <Col lg={3} key={i}>
                            <ProductCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
            ㄴ
        </div>
    );
};

export default ProductAll;
