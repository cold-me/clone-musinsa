import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const MainBanner = () => {
    return (
        <div>
            <div>
                <Carousel className='main-banner'>
                    <Carousel.Item>
                        <div className='main-banner-imgs'>
                            <img
                                className='main-banner-img'
                                src='https://image.msscdn.net/thumbnails/images/goods_img/20241004/4487816/4487816_17282784023336_big.jpg?w=1200'
                            />
                            <img
                                className='main-banner-img'
                                src='https://image.msscdn.net/thumbnails/images/goods_img/20231006/3610104/3610104_17277654993136_big.png?w=1200'
                            />
                            <img
                                className='main-banner-img'
                                src='https://image.msscdn.net/thumbnails/images/prd_img/20241004/4487816/detail_4487816_17282783509003_500.jpg'
                            />
                            <Carousel.Caption>
                                <h3>모카무스의 계절 </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='main-banner-imgs'>
                            <img
                                className='main-banner-img'
                                src='https://image.msscdn.net/thumbnails/images/goods_img/20250224/4823763/4823763_17416780242909_big.png?w=1200'
                            />
                            <img
                                className='main-banner-img'
                                src='https://image.msscdn.net/thumbnails/images/prd_img/20220712/2660509/detail_2660509_17072023668381_big.jpg?w=1200'
                            />
                            <img
                                className='main-banner-img'
                                src='https://image.msscdn.net/thumbnails/images/goods_img/20250304/4853339/4853339_17412297338071_big.jpg?w=1200'
                            />
                        </div>
                        <Carousel.Caption>
                            <h3>뷰티 첫구매 혜택 최대 50% 쿠폰</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='main-banner-imgs'>
                            <img
                                className='main-banner-img'
                                src='https://image.msscdn.net/thumbnails/images/prd_img/20250304/4853339/detail_4853339_17412297452428_big.jpg?w=1200'
                            />
                            <img
                                className='main-banner-img'
                                src='https://image.msscdn.net/thumbnails/images/prd_img/20240828/4380234/detail_4380234_17437501631024_big.jpg?w=1200'
                            />
                            <img
                                className='main-banner-img'
                                src='https://image.msscdn.net/thumbnails/snap/images/2024/11/11/7271b30521224ea28832d3ced3ba69c7.jpg'
                            />
                            <Carousel.Caption>
                                <h3>귀여움 한도초과 텔레토비 친구들</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default MainBanner;
