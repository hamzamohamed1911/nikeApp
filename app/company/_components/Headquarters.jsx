"use client"
import { headquarters } from '@/constants';
import Image from 'next/image'
import React, { useState } from 'react';
import { AiOutlineInfoCircle } from "react-icons/ai";


const Headquarters = () => {
  const [open, setOpen] = useState(false);

  const handleOpening = ()=>{
    setOpen((prev)=> !prev);
  
  }
  
  return (
 <section className='padding'>
     <h1 className='font-palanquin font-bold text-3xl pb-6'>
     Headquarters
 </h1>
 
   <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        {headquarters.map((place,id)=>(
          <div  className="group block pb-28 " key={id}>
          <div className='relative'>
          <Image
          width={0}
          height={0}
          src={place.imgURL}
          alt="man"
          className="aspect-square w-full h-full object-cover  "

          />
          <button onClick={handleOpening} className='absolute right-4 bottom-4  z-20'>
          <AiOutlineInfoCircle className='h-10 w-10 hover:text-gray-500 text-white '/>
          </button>
          
     {open && <div className='p-6 absolute bottom-0 right-0 left-0 bg-black'>
          <p className='text-white'>
           {place.Description}
          </p>
           </div>}

          </div>

          <div className="mt-4 ">
          <h3 className=" text-4xl  font-bold text-gray-900  ">
          {place.place}
          </h3>
          <div className="mt-4 text-lg text-gray-500 ">
              <div className="mt-1 ">
              One Bowerman Drive
              </div>
              <div className="mt-1">
              Beaverton, OR 97005
              </div>
              <div className="mt-1  "> 
              United States
              </div>
              <div className="mt-1  ">

              +1 503 671 6453
              </div>
          </div>
          </div>
          </div>

     ))}

 
  
</div>
 </section>
  )
}

export default Headquarters
