import { useState } from 'react'
import React from 'react'
import { Box, TextField, Button, styled } from '@mui/material'
import { API } from '../../service/api.js'

export default function Login() {
    const imageUrl = "/572.png"

    const Component = styled(Box)`
      padding: 60px;
      width: 400px;
      height: 400px;
      margin: 30px auto;
      box-shadow: 5px 2px 5px 2px rgb(0 0 0 / 0.6);
    `

    const Image = styled("img")`
      width: 200px;
      display: flex;
      margin: auto;
      padding: 1px 0px 0px 90px;
    `

    const Log = styled(Box)`
      padding: 0px 30px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    `

    const Back = styled(Button)`
      text-transform: none;
      background: #00796b;
      height: 48px;
      font-size: 20px;
    `
    
    const signupInitialValues = {
      name: '',
      username: '',
      password: ''
    }

    const [account, toggleAccount] = useState('login')
    const [signup, setSignup] = useState(signupInitialValues)

    const toggleSignup = () => {
        toggleAccount(account === 'login' ? 'signup' : 'login')
    }

    const onInputChange = (e) => {
      setSignup({ ...signup, [e.target.name]: e.target.value })
    }

    const signupUser = async () => {
      try {
        let response = await API.userSignup(signup)
        // Handle response, e.g., show a success message or redirect
      } catch (error) {
        console.error('Error during signup:', error)
        // Handle error, e.g., show an error message
      }
    }

    return (
        <Component>
            <Image src={imageUrl} alt="login" />
            {account === 'login' ?
                <Log>
                    <TextField placeholder="Enter username" variant='standard' />
                    <TextField placeholder="Enter password" variant='standard' />
                    <Back variant='contained'>Login</Back>
                    <Button onClick={toggleSignup} variant='contained'>Create an account</Button>
                </Log>
                :
                <Log>
                    <TextField 
                        placeholder="Enter name" 
                        onChange={onInputChange} 
                        name='name' 
                        variant='standard' 
                    />
                    <TextField 
                        placeholder="Enter username" 
                        onChange={onInputChange} 
                        name='username' 
                        variant='standard' 
                    />
                    <TextField 
                        placeholder="Enter password" 
                        onChange={onInputChange} 
                        name='password' 
                        variant='standard' 
                    />
                    <Button onClick={signupUser} variant='contained'>Signup</Button>
                    <Back onClick={toggleSignup} variant='contained'>Already have an account</Back>
                </Log>
            }
        </Component>
    )
}
