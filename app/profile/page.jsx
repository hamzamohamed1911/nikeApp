'use client'
import Button from '@/components/Button';
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
    <div className='flex items-center justify-center p-96'>
    { authUser ?( <h1 > {authUser.email}</h1>) : (<Button handleClick={handleLogin} label='please login'/> )}
    </div>
  )
}

export default page;
