import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuthData } from '../context/AuthContext';
const LoginForm = () => {
    const { setAuthenticate } = useAuthData();
    const navigate = useNavigate();
    const loginUser = (e) => {
        e.preventDefault();
        setAuthenticate(true);
        navigate('/');
    };
    return (
        <div className='login-form'>
            <Form onSubmit={(e) => loginUser(e)}>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Control type='email' placeholder='아이디' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Control type='password' placeholder='비밀번호' />
                </Form.Group>
                <Button variant='dark' type='submit' style={{ width: '100%' }}>
                    로그인
                </Button>
            </Form>
        </div>
    );
};

export default LoginForm;
