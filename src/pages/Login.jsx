import React from 'react';
import { Button } from 'react-bootstrap';
import LoginForm from '../components/LoginForm';

const Login = () => {
    return (
        <div className='login-container'>
            <div className='login-box'>
                <div className='login-form-title'>로그인</div>
                <LoginForm />
                <div className='login-identify-search'>
                    <div>아이디찾기</div>
                    <div>|</div>
                    <div>비밀번호찾기</div>
                </div>
                <div className='another-login'>
                    <Button variant='warning'>카카오 로그인</Button>
                    <Button variant='light'>Apple 로그인</Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
