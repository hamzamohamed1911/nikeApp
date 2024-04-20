"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaTimes   } from "react-icons/fa";

const LeaderDetail = ({ leader, onClose }) => {
    return (
      <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 20, stiffness: 100 }}
     className="fixed top-0 right-0 bottom-0 z-50 bg-white md:max-w-[65%] mx-auto overflow-y-auto"
      >
        <div className='bg-black relative text-white  h-1/3'>
        <button className='text-lg absolute right-6 top-4 ' onClick={onClose}><FaTimes className='h-9 w-9'/></button> 

        <div className=" absolute bottom-11 left-11 font-bold ">
          <h2 className="text-2xl md:text-4xl ">{leader.name}</h2>
          <p className=" mt-2  md:text-xl ">{leader.position}</p>

        </div>
        </div>

        <Image
    width={0}
    height={0}
    src={leader.imgURL}
    alt={leader.name}
    className="object-fill h-auto"
  />
            <div className='p-6 md:p-10'>
            <p className="text-black text-md md:text-xl  ">{leader.Description}</p>
            </div>    
      </motion.div>
    );
  };
  export default LeaderDetail;