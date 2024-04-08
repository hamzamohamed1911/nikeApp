'use client'
import { useState } from 'react';
import CartModal from './CartModal';
import { CartContext } from '../(store)/shopping-cart-context'; 
import { useContext } from 'react';
import Button from '@/components/Button';
import { CiSearch } from 'react-icons/ci';


const Header = () => {

  const {items} =useContext(CartContext)
  let [isOpen, setIsOpen] = useState(false);
    let cartQuantity =items.length;
  
  return (
     <>
       <header className='flex justify-between  items-center pt-8 ' id="main-header">
        
      <form className='bg-white flex items-center w-auto sm:border sm:border-slate-gray rounded-full relative sm:p-3 lg:p-3  md:p-3'>
        <input type='text' placeholder='find your shoes' className='input ' autoComplete='auto' />
        <button className='absolute right-5'> <CiSearch className='h-7 w-7'/> </button>
      </form>

      <p className='flex  items-center justify-end '>
        <Button handleClick={()=>{setIsOpen(true)}}   label={`Cart (${cartQuantity})`} ></Button>
      </p>
      
      </header>
      <CartModal   isOpen={isOpen} closeModal={()=>setIsOpen(false)}     />
      
  </>
  )
}

export default Header;
      
