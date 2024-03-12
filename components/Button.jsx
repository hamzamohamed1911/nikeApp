'use client'
import Image from 'next/image';
import React from 'react';


const Button = ({label,iconURL, backgroundColor,textColor,borderColor,fullWidth, handleClick}) => {
  return (
    <button
    onClick={handleClick}
    className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF5A5A] duration-300
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}

      {iconURL && (
        <Image
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5 transition hover:translate-x-3  duration-300 '
        />
      )}
    </button>
  )
}

export default Button;