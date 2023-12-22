'use client';
import React from 'react'
import { Login } from '@/redux/features/auth';
import { useDispatch, useSelector } from 'react-redux';

const Button = () => {
    const dispatch = useDispatch()
    const isAuthenticated = useSelector(state=>state.auth.isAuthenticated);
    
const handleLogin = async() =>{
await dispatch(Login())
console.log(isAuthenticated)
    
    }
  return (
    <div className='py-4'>
    <button className='btn btn-primary' onClick={()=>handleLogin()}>Click</button>
    </div>
  )
}

export default Button