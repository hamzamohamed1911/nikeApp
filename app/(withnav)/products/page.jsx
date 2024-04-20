'use client'
import { useState ,useEffect, useContext} from 'react';
import Image from 'next/image';
import Header from './(productsFils)/Header';
import ProductsCard from './(productsFils)/ProductsCard';
import ShowMore from './(productsFils)/ShowMore';
import { loaderIcon } from '@/app/assets/icons';
import { APIContext } from '@/store/api-context';

const Products = () => {
  const { fetchShoes ,allShoes} =useContext(APIContext);
  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState('');

  // const filteredShoes = allShoes.filter((shoe) => (
  //    shoe.name.toLowerCase().includes(query.toLowerCase())
  // ));

    const getShoes = async ()=>{
      setIsLoading(true);
      try {
        await  fetchShoes({ limit: limit });
        } catch (error) {
          console.log(error)
         
         }finally{
          setIsLoading(false)
         }
     
          }      
          useEffect(()=>{ getShoes()}, [limit])

return (
<>
<div  className='padding'>
   {allShoes.length>0 ? (

   <section id="products" className="max-container gap-10 max-sm:mt-12">

      <div className="flex  justify-center content-center gap-2.5">
       <h2 className="text-4xl font-palanquin font-bold ">Our <span className="text-coral-red">Products</span>  </h2>
      </div> 



<Header setQuery={setQuery} query={query} />

     {allShoes.length > 0 && (
            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14    ">
              {allShoes
                .filter((shoe) => shoe.category.toLowerCase().includes(query.toLowerCase())) 
                .map((product, id) => (
                  <ProductsCard {...product} key={id} />
                ))}
            </div>
          )}
      
      {isLoading ? (
              <div className='mt-10  flex  '>
              <p >
                 <Image className='animate-spin h-10 w-10 ' src={loaderIcon} alt='loaderIcon' />
                </p>
              </div>
      ): <ShowMore 
      pageNumber={limit /5}
      isNext ={limit> allShoes.length}
      setLimit={setLimit}
      />}

     
   </section>

   ):(
   <div className='h-screen flex justify-center items-center flex-col gap-2'>
   <h2 className='text-black text-xl font-bold'>oops , no results </h2>
   </div>)}

  </div>
 </>
    
  )
  
}

export default Products;

