'use client'
import React from 'react'
import Image from 'next/image';
import { arrowRight } from '@/app/assets/icons';
import { offer } from '@/app/assets/images';
import { useRouter } from 'next/navigation';
import Button from '@/app/_components/Button';

const SpecialOffers = () => {
  const router = useRouter()
  const shopHandler =()=>{
    router.push('/products')
  }
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10'>
      <div className=' flex-1 flex-col'>
        <Image src={ offer} alt='offer' height={773} width={687} className='object-contain w-full' />
       
     </div>
<div className='flex flex-1 flex-col'>
     <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg '>
        <span 
     className='text-coral-red '>Special
     </span> Offer
      </h2>
    
      <p className='mt-4 info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
      <div className='mt-11 flex flex-wrap gap-6 '>
      <Button label="Shop Now" handleClick={shopHandler} iconURL={arrowRight}/>

       <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />

      </div>
</div>
  
    </section>
    
  )
}

export default SpecialOffers;