import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const myPage = ['마이페이지', '좋아요', '장바구니'];
    const menuList = [
        { label: '전체', slug: 'products' },
        { label: '랭킹', slug: 'ranking' },
        { label: '세일', slug: 'sale' },
        { label: '브랜드', slug: 'brand' },
        { label: '신상', slug: 'new' },
        { label: '슈즈페스티벌', slug: 'shoes-festival' },
        { label: '여름준비쿠폰', slug: 'summer-coupon' },
    ];
    const navigate = useNavigate();
    const goToCategory = (item) => navigate(`/${item?.slug}`);
    const goToTheHome = () => navigate('/');
    return (
        <div className='nav'>
            <div className='logo-container'>
                <img
                    src='https://image.msscdn.net/display/images/2024/07/19/3a7caf3364184181a3cae5741f91464f.png'
                    onClick={() => goToTheHome()}
                />
                <ul className='nav-mypage'>
                    {myPage.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className='container-horizontal'>
                <input className='nav-search' type='text' placeholder='슈즈 페스티벌 최대 80% 할인' />
                <FontAwesomeIcon icon={faMagnifyingGlass} className='magnifying-glass-logo' />
            </div>
            <ul className='nav-menu'>
                {menuList.map((item, i) => (
                    <li key={i} onClick={() => goToCategory(item)}>
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
