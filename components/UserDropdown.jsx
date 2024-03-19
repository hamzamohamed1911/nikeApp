'use client'
import { cr7 } from '@/app/assets/images'
import { useAuth } from '@/store/Auth-context';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

import React, { useState } from 'react'


const UserDropdown = () => {
 const {authUser ,logOut}= useAuth();
    const [open, setOpen] = useState(false);
    const { setIsLoggedIn} =useAuth()
    const route = useRouter()
    const handleLogOut= async (e)=>{
 
      
        e.preventDefault();
        try{
            await logOut()
         
            
        }catch(err){
          console.log(err.message)

        }

        
        setIsLoggedIn(false)
        route.push('/login');
   
      }

    const handleDrop = ()=>{

        setOpen((prev)=> !prev);
      
      }
  return (
    <div className="flex justify-center z-50">
 {authUser &&  <div className="relative">
    <button onClick={handleDrop} className="block h-12 w-12 rounded-full overflow-hidden focus:outline-none">
      <Image width={30} height={30} className=" object-cover" src={cr7} alt="avatar" />
    </button>
 
   {open  &&  <div className="absolute right-0 w-auto mt-2 py-2 bg-white border rounded shadow-xl ">   
   <div className="p-2 m-2">
   <p> { authUser.email} </p>
  
  
      </div>

   <hr></hr>
      <Link href="/profile" className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-coral-red hover:text-white">Profile</Link>

      <div className="py-2">
        <hr></hr>
      </div>

      <Link   onClick={handleLogOut} href="#" className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-coral-red hover:text-white">    
      Logout
    </Link>
     
           
   
    
  </div>

   }
 
  </div> }
 
 
</div>

  )
}

export default UserDropdown