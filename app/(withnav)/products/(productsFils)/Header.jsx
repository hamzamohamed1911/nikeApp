"use client"
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import Button from '@/app/_components/Button';
import CartModal from './CartModal';
import { CartContext } from '../(store)/shopping-cart-context'; 
import { useContext } from 'react';

const Header = () => {
  const { items } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');

  
  const handleSearch = (e) => {
    e.preventDefault();
    
    console.log('Search term:', searchTerm);
   
    setSearchTerm('');
  };

  let cartQuantity = items.length;

  return (
    <>
      <header className='flex justify-between pt-8' >
        <form className='bg-white flex items-center w-auto sm:border sm:border-slate-gray rounded-full relative sm:p-3 lg:p-3 md:p-3 shadow-md'>
          <input
            type='text'
            placeholder='Find your shoes'
            className='input'
            autoComplete='auto'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='absolute right-5' onClick={handleSearch}>
            <CiSearch className='h-7 w-7' />
          </button>
        </form>

        <p className='flex items-center justify-end'>
      


<button onClick={() => setIsOpen(true)}>
<div className="relative py-2">
  <div className="t-0 absolute left-6">
    <p className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-4 text-xs text-white">{cartQuantity}</p>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="file: mt-5 h-12 w-12">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>
</div>
  
</button>

          
        </p>
      </header>
      <CartModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </>
  );
};

export default Header;
