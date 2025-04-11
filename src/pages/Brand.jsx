import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';

const Brand = () => {
    return (
        <div>
            <div className='login-container'>
                <h3 className='ready login-box'>
                    <FontAwesomeIcon icon={faFaceSmile} />
                    새롭게 준비중입니다..
                </h3>
            </div>
        </div>
    );
};

export default Brand;
