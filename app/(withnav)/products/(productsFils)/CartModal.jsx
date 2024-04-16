'use client'
import React, { useContext } from 'react'
import { Fragment } from 'react';
import Image from 'next/image';
import { Dialog,Transition } from '@headlessui/react';
import { arrowRight, closeIcon } from '@/app/assets/icons';
import Cart from './Cart';
import { useRouter } from 'next/navigation';
import { CartContext } from '../(store)/shopping-cart-context';
import Button from '@/app/_components/Button';

const CartModal = ({isOpen,closeModal }) => {
  const {items} =useContext(CartContext);
  let cartQuantity = items.length;
  const route = useRouter();
  
const shopingHanler =()=>{
  route.push('products/shop')

  
}
 
  return <>
  <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-primary p-8  shadow-2xl transition-all">
                <button 
                 type='button'
                 className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                 onClick={closeModal}
                >
                <Image src={closeIcon} alt='close' width={20} height={20} className='object-contain' />
                </button>

                <div className="flex  justify-center content-center gap-2.5">
                  <h2 className="text-4xl font-palanquin font-bold ">Your <span className="text-coral-red">Cart</span>  </h2>
                </div>

                  <Cart/>

                    {cartQuantity > 0 &&(  <div className='absolute right-2 bottom-2  '>
                          <Button label="Check Out" iconURL={arrowRight} handleClick={shopingHanler} />
                    </div>)}
                   
                    
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
  
  </>
}

export default CartModal