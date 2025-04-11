import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
const ProductAll = () => {
    const [query, _] = useSearchParams();
    const [productList, setProductList] = useState([]);
    const getProducts = async () => {
        const searchQuery = query.get('q') || '';
        const url = `https://json-server-vercel-xi-seven.vercel.app/products?q=${searchQuery}`;
        const res = await fetch(url);
        const data = await res.json();
        setProductList(data);
    };
    useEffect(() => {
        getProducts();
    }, [productList]);

    return (
        <div className='margin-top-3rem'>
            <Container>
                <h4 className='margin-bottom-2rem'>전체 상품페이지</h4>
                <Row>
                    {productList?.map((item, i) => (
                        <Col lg={2} xs={4} key={i}>
                            <ProductCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductAll;
