import React from 'react'
import Button from './Button';
import Image from 'next/image';
import { shoe8 } from '@/app/assets/images';

const SuperQuality = () => {
  return (
   <section id="about-us" className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
    <div className='flex flex-1 flex-col'>
      <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg '>
         we provide you  <span 
       className='text-coral-red '>Super
       </span> 
       <br/>
        <span
         className='text-coral-red '>
          Quality
           </span> shoes
        </h2>
      
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
        <Button label="View Details"/>

        </div>
    </div>
    <div className='flex-1 flex justify-center items-center bg-primary rounded-lg '>
        <Image
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain cursor-pointer'
        />
      </div>
   </section>
  )
}

export default SuperQuality