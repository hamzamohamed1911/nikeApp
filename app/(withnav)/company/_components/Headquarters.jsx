"use client"
import { headquarters } from '@/constants';
import Image from 'next/image'
import React, { useState } from 'react';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { motion } from 'framer-motion';

const Headquarters = () => {
  const [open, setOpen] = useState({});

  const toggle = (id) => {
    setOpen({
      ...open,
      [id]: !open[id],
    });
  };

  return (
    <section className='padding'>
      <h1 className='font-palanquin font-bold text-3xl pb-6'>Headquarters</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        {headquarters.map((place) => (
          <HeadquartersItem key={place.id} place={place} open={open} toggle={toggle} />
        ))}
      </div>
    </section>
  );
}; export default Headquarters;


const HeadquartersItem = React.memo(({ place, open, toggle }) => (
  <div  className="group block pb-28  " >
  <div className='relative overflow-hidden'>
  <Image
  width={0}
  height={0}
  src={place.imgURL}
  alt="man"
  className="aspect-square w-full h-full object-cover  "

  />
      <button type='button' onClick={() => toggle(place.id)} className='absolute right-4 bottom-4 z-20'>
  <AiOutlineInfoCircle className='h-10 w-10 hover:text-gray-500 text-white '/>
  </button>
  {open[place.id] && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%'  }}  
          transition={{   stiffness: 500 }}
          className='p-6 absolute bottom-0 right-0 left-0 bg-black'
        >
          <p className='text-white'>{place.Description}</p>
        </motion.div>
      )}
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
));  



