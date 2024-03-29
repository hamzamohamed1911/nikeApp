'use client'
import Image from 'next/image';
import { navLinks } from '@/constants';
import React from 'react';
import {  headerLogo } from '@/app/assets/images';
import NavLink from './nav-link';
import { useState } from 'react';
import { FaTimes,FaBars ,FaArrowRight   } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';
import { useAuth } from '@/store/Auth-context';
import UserDropdown from './UserDropdown';


const NavBar = () => {
  const [open, setOpen] = useState(false);
  
  const handleMenu = ()=>{
    setOpen((prev)=> !prev);
    console.log(open)
  
  }
  const {isLoggedIn} =useAuth()
  

  return (
    <header className=' padding-x pt-8 pb-3 z-10 w-full max-lg:bg-black shadow-sm '>
      <nav className='flex justify-between items-center mx-auto max-container sm:w-screen	sm:px-0 '>
        

      <div className='flex items-center'>
      <NavLink href="/home">
        <Image src={headerLogo} alt='Nike LOGO'  />
        </NavLink>
      </div>
        
     { open == false && <ul className=' flex-1 flex max-lg:hidden'>
     <div className='flex-1 flex justify-center items-center gap-16'>
        {navLinks.map((item)=>(  
          
            <NavLink  key={item.label} href={item.href}  >
            {item.label}
            </NavLink>
          
        ))}
           
       {!isLoggedIn  &&<NavLink href='/login'>
         Sign in / Explore more
        </NavLink>}
    <div className='flex items-center'>
     <button onClick={handleMenu}  className=' text-black '>
    
  { open == false && <CiSearch  className='w-8 h-8 text-bold' /> }

     </button>
    
  </div>

 </div>

 
      </ul>}


     <div className='flex  items-center justify-center'>
     {isLoggedIn && <UserDropdown/> }

     <div className=' hidden max-2xl:block ' >
         <button onClick={handleMenu} className=' text-white focus:ring-white ' >
           
         {open ? <FaTimes className='w-7 h-7' /> : <FaBars className='w-7 h-7' />}
       </button>
       
    </div>
</div> 
   
 
 </nav>
 <div className='max-lg:hidden object-contain pt-8  mx-auto max-container'>
 
 {open ?(<form className='  flex w-auto gap-4 sm:border sm:border-slate-gray rounded-full  hover:bg-gray-75 p-3'>
 <input type='text' placeholder='find your shoes' className='input ' autoComplete='auto' />
 <button className='text-bold text-xl text-coral-red'>  submit </button>
 <button onClick={handleMenu}  className=' text-black cursor-pointer '>
 { open &&<FaTimes className='w-6 h-6' /> }
     </button>
     
 </form>):null}
</div>
       
        {open ? (
          
              <div className=' hidden p-3 space-y-1 sm:px-3 max-lg:block'>
                  
                    {navLinks.map((item)=>(  
                          
                              <Link
                              key={item.label} 
                              href={item.href} 
                              className='text-white hover:bg-gray-700  block px-3 py-3 rounded-md text-base font-medium '>
                              {item.label}
                              </Link>

                      ))} 
                      {!isLoggedIn  &&  <Link className='text-white hover:bg-gray-700  block px-3 py-3 rounded-md text-base font-medium ' href='/login'>
                     Sign in / Explore more
                      </Link>}
                  
                         <form className=' relative'>
                             
                            <input type='text' placeholder='search' className='input text-[#ffffff] bg-[#2d2d2d]  rounded-full p-3  gap-3 relative'autoComplete='auto' />      
                             <button>   <div> <FaArrowRight className='text-white absolute bottom-4 right-4 '/> </div> </button>
                             
                         </form>
            </div>

      ):null}    

</header>

  )
}

export default NavBar;
