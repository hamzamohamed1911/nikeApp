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
          <Button handleClick={() => setIsOpen(true)} label={`Cart ( ${cartQuantity} )`} />
        </p>
      </header>
      <CartModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </>
  );
};

export default Header;
