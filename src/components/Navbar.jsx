import { faList, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { myPageList } from '../constants/myPageList';
const Navbar = ({ isOpenSideBar, setIsOpenSideBar }) => {
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
    const goToMy = (item) => navigate(`/${item?.slug}`);
    const search = (e) => {
        if (e.key === 'Enter') {
            const keyword = e.target.value;
            navigate(`/products/?q=${keyword}`);
        }
    };
    useEffect(() => {
        console.log('side:', isOpenSideBar);
    }, [isOpenSideBar]);
    return (
        <div className='nav'>
            <div className='logo-container'>
                <img
                    src='https://image.msscdn.net/display/images/2024/07/19/3a7caf3364184181a3cae5741f91464f.png'
                    onClick={() => goToTheHome()}
                />
                <ul className='nav-mypage'>
                    <FontAwesomeIcon
                        className='category'
                        onClick={() => setIsOpenSideBar((prev) => !prev)}
                        icon={faList}
                        style={{ color: 'white' }}
                    />
                    {myPageList.map((item, i) => (
                        <div className='category-list'>
                            <li key={i} onClick={() => goToMy(item)}>
                                {item.label}
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
            <div className='container-horizontal'>
                <input
                    onKeyPress={(e) => search(e)}
                    className='nav-search'
                    type='text'
                    placeholder='슈즈 페스티벌 최대 80% 할인'
                />
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
