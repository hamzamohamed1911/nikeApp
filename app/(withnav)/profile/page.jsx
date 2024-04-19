'use client'
import Button from '@/app/_components/Button';
import { AuthContext } from '@/store/Auth-context';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'

const page = () => {
    const route = useRouter()
    const handleLogin= ()=>{
       
        route.push('/login')
    }
  const {authUser}= useContext(AuthContext)
  return (
    <div className='h-screen flex items-center justify-center'>
    { authUser ?( <h1 > {authUser.email}</h1>) : (<Button handleClick={handleLogin} label='please login'/> )}
    </div>
  )
}

export default page;
