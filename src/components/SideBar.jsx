import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { myPageList } from '../constants/myPageList';
const SideBar = ({ setIsOpenSideBar }) => {
    const category = ['뷰티', '신발', '상의', '아우터', '하의', '원피스/스커트', '가방'];
    console.log(myPageList);
    return (
        <div>
            <div className={'sidebar'}>
                <FontAwesomeIcon
                    icon={faXmark}
                    className='sidebar-close-icon'
                    onClick={() => setIsOpenSideBar((pre) => !pre)}
                />
                <ul>
                    {myPageList.map((item, i) => (
                        <li key={i}>{item.label}</li>
                    ))}
                    {category.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
