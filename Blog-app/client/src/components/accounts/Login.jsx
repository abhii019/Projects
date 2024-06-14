import { useState } from 'react';
import React from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material';
import { API } from '../../service/api.js';

export default function Login() {
    const imageUrl = "/572.png";

    const Error = styled(Typography)`
        font-size: 10px;
        color: #ff6161;
        line-height: 0;
        margin-top: 10px;
        font-weight: 600;
    `;
    const Component = styled(Box)`
        padding: 60px;
        width: 400px;
        height: 400px;
        margin: 30px auto;
        box-shadow: 5px 2px 5px 2px rgb(0 0 0 / 0.6);
    `;
    const Image = styled("img")`
        width: 200px; 
        display: flex;
        margin: auto;
        padding: 1px -1px 0px 90px;
    `;
    const Log = styled(Box)`
        padding: 0px 30px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    `;
    const Back = styled(Button)`
        text-transform: none;
        background: #00796b;
        height: 48px;
        font-size: 20px;
    `;

    const signupInitialValues = {
        name: '',
        username: '',
        password: ''
    };

    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, setError] = useState('');

    const toggleSignup = () => {
        toggleAccount(account === 'login' ? 'signup' : 'login');
    };

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    };

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.iSuccess) {
            setError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        } else {
            setError('Something went wrong');
        }
    }

    return (
        <Component>
            <Image src={imageUrl} alt="login" />
            {account === 'login' ? (
                <Log>
                    <TextField placeholder="Enter username" variant='standard' />
                    <TextField placeholder="Enter password" variant='standard' />
                    {error && <Error>{error}</Error>}

                    <Back variant='contained'>Login</Back>
                    <Button onClick={toggleSignup} variant='contained'>Create an account</Button>
                </Log>
            ) : (
                <Log>
                    <TextField
                        placeholder="Enter name"
                        onChange={onInputChange}
                        name='name'
                        value={signup.name}
                        variant='standard'
                    />
                    <TextField
                        placeholder="Enter username"
                        onChange={onInputChange}
                        name='username'
                        value={signup.username}
                        variant='standard'
                    />
                    <TextField
                        placeholder="Enter password"
                        onChange={onInputChange}
                        name='password'
                        value={signup.password}
                        variant='standard'
                    />
                    {error && <Error>{error}</Error>}
                    <Button onClick={signupUser} variant='contained'>Signup</Button>
                    <Back onClick={toggleSignup} variant='contained'>Already have an account</Back>
                </Log>
            )}
        </Component>
    );
}
