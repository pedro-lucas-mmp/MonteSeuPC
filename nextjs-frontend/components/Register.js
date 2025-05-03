'use client';
import { useState } from 'react';
import styled from '@emotion/styled';
import Cookies from 'js-cookie';

export default function Register({route}) {
  const [message, setMessage] = useState([]);
  const errorsMessage = message?.details?.errors?.map(error => error.message) || []  
  const API_URL = process.env['NEXT_PUBLIC_API_URL'];
  const register = async (event) => {
    event.preventDefault();
    setMessage(null);
    
    const formData = new FormData(event.target);
  
    const jsonData = Object.fromEntries(formData);

    const reqOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    };
    
    try {
    const req = await fetch(`${API_URL}/api/auth/local/register`, reqOptions);
    const res = await req.json();
 
    
    if (res.error) {
      if (!!res.error.details.errors){
      setMessage(res.error);
      }else {
        setMessage(res.error.message);
      }
      
      return;
    }

    if (res.jwt && res.user) {
        Cookies.set('jwt', res.jwt, {
        httpOnly: false,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        expires: 30
    });
      setMessage('Successfull registration.');
      
      const token = res.jwt;
      const userId = res.user.id;
      let insertCart = {
        data:{
          user:{
            id: userId
          }
        }
      }

      const reqOptionsCart = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(insertCart)
      };
      const reqCart = await fetch(`${API_URL}/api/carts`, reqOptionsCart);
      const resCart = await reqCart.json(); 
      window.location.href = route ? route : '/';
    }
  } catch (error) {
    console.error('Error:', error);
  }
  };

  return (
    <RegisterStyled>
      <form onSubmit={register}>
        <title>Registration</title>
        <h2>Registration</h2>
        <label htmlFor="username" className="block">Username</label>
        <input type="text" id="username" name="username" className="block" />

        <label htmlFor="email" className="block">Email</label>
        <input type="email" id="email" name="email" className="block mb-2" />

        <label htmlFor="password" className="block">Password</label>
        <input type="password" id="register-password" name="password" className="block" />

        <button type="submit">Submit</button>
        {/* {console.log(message?.details?.errors?.map(error => error.message) || []  )} */}

        {errorsMessage?.map(error => <div key={error}>{error}</div>)}
        { !!message?.details?.errors ? null  : <div>{ message }</div> }
        
      </form>
    </RegisterStyled>
  );
}

const RegisterStyled = styled.div`
  background-color: #efefef;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.60);
  margin: 20px;

  form {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.10);
    input{
      margin-bottom: 10px;
    }
    button {
      margin-top: 10px;
      padding: 10px 20px;
      background-color: #444;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
      &:hover {
        background-color: #222;
      }
    }
    h2 {
      text-align: center;
      margin-bottom: 20px;
    }
    div {
      text-transform: capitalize;
      color: red;
      margin-top: 10px;
      font-size: 14px;
      text-align: center;
    }
  }

  `