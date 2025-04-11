import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthData } from '../context/AuthContext';

const My = () => {
    const { authenticate, setAuthenticate } = useAuthData();
    const navigate = useNavigate();
    const goToLogin = () => navigate('/login');
    const goToLogOut = () => {
        setAuthenticate(false);
        navigate('/');
    };
    useEffect(() => {}, [authenticate]);
    return (
        <div className='my-container'>
            <h5 style={{ marginBottom: '2rem' }}>마이</h5>
            <div>무신사 회원은 최대 4% 적립, 전 상품 무료배송 혜택</div>
            {authenticate ? (
                <span className='my-log-inout' onClick={() => goToLogOut()}>
                    로그아웃하기
                </span>
            ) : (
                <span className='my-log-inout' onClick={() => goToLogin()}>
                    로그인하기
                </span>
            )}
            {/* <span className='my-log-inout'>회원가입하기</span> */}
        </div>
    );
};

export default My;
