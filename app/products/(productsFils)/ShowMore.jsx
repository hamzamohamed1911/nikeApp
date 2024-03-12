'use client'
import React from 'react';
import Button from '../../../components/Button';
import { arrowRight } from '@/app/assets/icons';


const ShowMore = ({pageNumber,isNext ,setLimit}) => {
    const handleNavigation = ()=>{
        const newLimit = (pageNumber +1)* 5;
        setLimit(newLimit);
    }
  return (
    <div className=' mt-10' >
        {!isNext &&(   
        <Button
        label='More'
        iconURL={arrowRight}
        handleClick={handleNavigation}
        />
              )}
    </div>
  )
}

export default ShowMore;
