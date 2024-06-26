'use client'
import Image from 'next/image';
import { star } from '@/app/assets/icons';

import { useContext, useState } from 'react';
import ShoesDetails from './ShoesDetails';
import { CartContext } from '../(store)/shopping-cart-context';
import Toasts from './Toasts';
import Button from '@/app/_components/Button';
const ProductsCard = ({id,category ,price,image ,description }) => {
  
  let [isOpen, setIsOpen] = useState(false);
  let [toastsIsOpen, setToastsIsOpen] = useState(false)
  const { addItemToCart} =useContext(CartContext);
  
  const handlleAddedIem =()=>{

     addItemToCart(id)
     setToastsIsOpen(true)
  }
 

  return <>
  
  <section className='Relative  ' id='product'>
    
    <div className="flex flex-1 flex-col  max-sm:w-full bg-primary  rounded-md  relative  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 mt-6 ">
    <div className='cursor-pointer' onClick={()=>{setIsOpen(true)}}  >

            <div className=' w-full my-3 object-contain relative h-56'>
                   <Image  src={image}className=' rounded-md object-contain'  fill priority  alt={category } />

            </div>
            <div className='m-3 pb-10' >

                    <div className='mt-8 flex  gap-2.5 '>
                       <Image src={star} alt='rating' width={24} height={24} style={{ width: 'auto', height: 'auto' }}/>
                       <p className='font-montserrat text-xl leading-normal text-slate-gray'>(4.9)</p>
                    </div>

                    <h3 className='mt-2 text-xl leading-normal font-semibold font-palanquin'>{category}</h3>
                    <p className='mt-2 font-semibold font-montserrat p- text-coral-red text-xl leading-normal'>{price} $</p>
                  
            </div>

              

    </div>
              <div className='absolute right-3 bottom-3  '>
                <Button label="Add"  handleClick={handlleAddedIem}  />
              </div>

    </div>
    <ShoesDetails id={id} category={category} price={price} image={image} description={description}  isOpen={isOpen} closeModal={()=>setIsOpen(false) } />
    <Toasts  category={category} toastsIsOpen={toastsIsOpen} closeModal={()=>setToastsIsOpen(false)   }  />
  
    </section>
    
  </>
}

export default ProductsCard;


