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
 
  }
  const {isLoggedIn} =useAuth()
  

  return (
    <header className='padding-x pt-8 pb-3 w-full bg-black sm:bg-transparent ' >
      <nav className='flex justify-between items-center  content-center mx-auto max-container sm:w-screen	sm:px-0  '>
        

      <div className='flex items-center'>
      <Link href="/">
        <Image src={headerLogo} alt='Nike LOGO'  priority/>
        </Link>
      </div>
        
     {!open && <ul className=' flex-1 hidden sm:px-5 sm:flex'>
     <div className='flex-1 flex justify-center items-center sm:gap-8 xl:gap-16'>
        {navLinks.map((item)=>(  
          
            <NavLink  key={item.label} href={item.href}  >
            {item.label}
            </NavLink>
          
        ))}
           
       {!isLoggedIn  &&<NavLink href='/login'>
       SignIn/ Explore more
        </NavLink>}
    <div className='flex items-center'>
     <button onClick={handleMenu}  className=' text-black '>
    
  {/* { !open  && <CiSearch  className='w-8 h-8 text-bold' /> } */}

     </button>
    
  </div>

 </div>

 
      </ul>}


  <div className='flex  items-center justify-center'>
     {isLoggedIn && <UserDropdown/> }

     <div className='sm:hidden block max-xl:block'>
  <button onClick={handleMenu} className='text-white focus:ring-white'>
    {open ? <FaTimes className='w-8 h-8' /> : <FaBars className='w-8 h-8' />}
  </button>
</div>
</div> 
   
 
 </nav>
 <div className='max-lg:hidden object-contain pt-8  mx-auto max-container'>
 
  {/* {open ?( 
  <form className=' bg-white   flex w-auto gap-4 sm:border sm:border-slate-gray rounded-full  5 p-3'>
      <input type='text' className='input ' autoComplete='auto' />
      <button className='text-bold text-xl text-coral-red'>  submit </button>
      <button onClick={handleMenu}  className=' text-black cursor-pointer '>
   { open &&<FaTimes className='w-8 h-8' /> }
     </button>
     
 </form>):null} */}
</div>
       
        {open ? (
          
              <div className='sm:hidden block  p-3 space-y-1 sm:px-3'>
                  
                    {navLinks.map((item)=>(  
                          
                              <Link
                              key={item.label} 
                              href={item.href} 
                              className='text-white hover:bg-gray-700  block px-3 py-3 rounded-md text-base font-medium '>
                              {item.label}
                              </Link>

                      ))} 
                      {!isLoggedIn  &&  <Link className='text-white hover:bg-gray-700  block px-3 py-3 rounded-md text-base font-medium ' href='/login'>
                     SignIn/ Explore more
                      </Link>}
                  
                      <form className='relative'>
    <div className='relative'>
        <input type='text' placeholder='search' className='input text-[#ffffff] bg-[#2d2d2d] rounded-full p-3 pr-10' autoComplete='auto' />
       <button> <FaArrowRight className='w-7 h-7 text-white absolute top-0 right-1 bottom-0 m-auto' /> </button>
    </div>
</form>
            </div>

      ):null}    

</header>

  )
}

export default NavBar;
