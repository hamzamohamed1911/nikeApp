import React from 'react'
import Image from 'next/image';
import LeaderShip from './_components/LeaderShip';
import Headquarters from './_components/Headquarters';
import ContactUs from './_components/ContactUs';
import { nikelogos } from '@/app/assets/images';


const Company = () => {
  return (
  <section>
<div  className='flex justify-center  items-center padding bg-primary'>

<div className='font-palanquin font-bold'>
    <h1 className='text-2xl flex justify-center  '>
        <span>
        Company
        </span>
    </h1>

  <div className= 'lg:text-8xl text-4xl  md:text-4xl'>
     
     <h1>
        <span className=' relative z-10 pr-10 bold inline-block mt-3'>
        WELCOME TO
        </span>
     </h1>

        <h1 className=' font-palanquin  flex justify-center '>
        <span className='text-coral-red  '>Nike ,  </span> INC.
        </h1>

  </div>
     </div>
     
    </div>


    <div className='bg-white font-palanquin sm:text-xl md:text-2xl lg:text-4xl padding'> 

   <h1 className='flex justify-center items-center'>
   <span>
   <span className='text-coral-red  '>Nike ,  </span>  Inc. is a team comprised of the  <span className='text-coral-red  '>Nike ,  </span>  Jordan and
    </span>
   </h1>

  <h1 className='flex justify-center'>
  <span>
    Converse brands driven by a shared purpose to leave an 
  </span>

  </h1>
  <h1 className='flex justify-center'>
  <span>
  enduring impact.
  </span>

  </h1>
    </div>
   
    <div className='padding'>
    <h1 className='font-palanquin font-bold text-3xl pb-6'>
    Who We Are
    </h1>
      <Image alt='nikelogos' height={0} width={0} className='h-auto w-auto object-contain' src={nikelogos}/> 
    </div>
    <div className='padding font-palanquin text-2xl flex justify-center '>

      <div className=' items-center'>
        <h1>
        <span className='flex justify-center items-center'>
        With a global footprint, culture of innovation and team-first mentality, we take action to create a future of

        </span>
        </h1>
       
     <h1>
     <span className=''>
        continual progress for athletes, sport and our world.
        </span>
     </h1>
      </div>

    </div>
    <div className='padding'>
    <h1 className='font-palanquin font-bold text-3xl pb-6'>
    At a Glance
    </h1>
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
  <div className="h-auto rounded-lg bg-gray-100">
   <div className='m-5 mb-12'>
   <h1 className='text-8xl font-bold'>
    43%
    </h1>
    <p  className='text-lg'>
    of NIKE’s leadership positions are held by women.
    </p>
   </div>
  </div>
  <div className="h-auto rounded-lg bg-gray-100">
   <div className='m-5 mb-12'>
   <h1 className='text-8xl font-bold'>
   78%
    </h1>
    <p className='text-lg'>
    renewable energy in owned or operated facilities, up from 48% in FY20.
    </p>
   </div>
  </div>
  <div className="h-auto rounded-lg bg-gray-100">
   <div className='m-5 mb-12'>
   <h1 className='text-8xl font-bold'>
   $97.7M
    </h1>
    <p  className='text-lg'>
    invested in NIKE, Inc.'s fiscal year 2021 to drive positive impact in communities around the world.
    </p>
   </div>
  </div>
</div>

    </div>
    <LeaderShip/>
    <Headquarters/>
    <ContactUs/>
  </section>
  )
}

export default Company;