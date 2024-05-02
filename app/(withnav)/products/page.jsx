'use client'
import React, { useState, useContext, Suspense } from 'react';
import Image from 'next/image';

import { loaderIcon } from '@/app/assets/icons';
import { APIContext } from '@/store/api-context';

const ProductsData = React.lazy(() => import('./(productsFils)/ProductsData'));

const Products = () => {
  const {  allShoes } = useContext(APIContext);
  const [query, setQuery] = useState('');

  return (
    <>
      <div className='padding'>
        <header className="flex justify-center content-center gap-2.5">
          <h2 className="text-4xl font-palanquin font-bold ">
            Our <span className="text-coral-red">Products</span>
          </h2>
        </header>

        <main id="products" className="max-container gap-10 max-sm:mt-12">
          <Suspense fallback={<div className="h-screen flex items-center justify-center">
            <Image className='animate-spin h-16 w-16 flex justify-center items-center ' src={loaderIcon} alt='loaderIcon' />
          </div>}>
            <ProductsData allShoes={allShoes} query={query} setQuery={setQuery} />
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default Products;
