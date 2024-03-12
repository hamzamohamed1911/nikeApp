'use client'
import { useState } from 'react';
import Button from '../../../components/Button';
import CartModal from './CartModal';
import { CartContext } from '../(store)/shopping-cart-context'; 
import { useContext } from 'react';


const Header = () => {
  const {items} =useContext(CartContext)
  let [isOpen, setIsOpen] = useState(false);
    let cartQuantity =items.length;
  
  return (
     <>
       <header id="main-header">
        <p className='flex justify-end pt-8  '>
          <Button handleClick={()=>{setIsOpen(true)}}   label={`Cart (${cartQuantity})`} ></Button>
        </p>
      </header>
      <CartModal   isOpen={isOpen} closeModal={()=>setIsOpen(false)}     />
  </>
  )
}

export default Header;
      
