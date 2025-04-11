import { Col, Container, Row } from 'react-bootstrap';
import { useProductData } from '../context/ProductContext';
import ProductCard from './ProductCard';
const Ranking = () => {
    const { rankingList } = useProductData();
    console.log(rankingList);
    return (
        <div className='margin-top-3rem'>
            <Container>
                <h4 className='margin-bottom-2rem'> 이번달 MUSINSA STANDARD 랭킹 🏆</h4>
                <Row>
                    {rankingList?.map((item, i) => (
                        <Col lg={2} xs={4} key={i}>
                            <ProductCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Ranking;
