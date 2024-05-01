"use client"
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import ProductsCard from './ProductsCard';
import Header from './Header';
import ShowMore from './ShowMore';
import { APIContext } from '@/store/api-context';
import { loaderIcon } from '@/app/assets/icons';

const ProductsData = ({  query, setQuery }) => {
     const { fetchShoes ,allShoes} =useContext(APIContext);
     const [isLoading, setIsLoading] = useState(true);
     const [limit, setLimit] = useState(10);

    const getShoes = async () => {
        setIsLoading(true);
        try {
          await fetchShoes({ limit: limit });
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      useEffect(() => {
        getShoes();
      }, [limit]);
  return (
    
    <>
      <Header setQuery={setQuery} query={query} />
      {allShoes.length > 0 ? (
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 ">
          {allShoes
            .filter((shoe) => shoe.category.toLowerCase().includes(query.toLowerCase()))
            .map((product, id) => (
              <ProductsCard {...product} key={id} />
            ))}
        </div>
      ) : (<div className='h-screen flex justify-center items-center flex-col gap-2'>
   <h2 className='text-black text-xl font-bold'>oops , no results </h2>
   </div>)}

{isLoading ? (
              <div className='mt-10  flex  '>
               <p >
                 <Image className='animate-spin h-12 w-12 ' src={loaderIcon} alt='loaderIcon' />
                </p>
              </div>
      ): <ShowMore 
      pageNumber={limit /5}
      isNext ={limit> allShoes.length}
      setLimit={setLimit}
      />}
    </>
  );
};

export default ProductsData;
