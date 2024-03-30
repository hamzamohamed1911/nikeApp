import { Hero,  CustomerReviews,  PopularProducts, Services, SpecialOffers, Subscribe, SuperQuality } from "./_homeComponents";

export default function Home() {
  return (
   <main className="relative">
    <div className='xl:padding-l wide:padding-r padding-b'><Hero/></div>
    <div className='padding '>  <PopularProducts/></div>
    <div className='padding'>  <SuperQuality /></div>
    <div className='padding'> <Services/> </div>
    <div className='padding'>  <SpecialOffers/></div>
    <div className='bg-pale-blue padding'><CustomerReviews/></div>
    <div className='padding-x sm:py-32 py-16 w-full'> <Subscribe/> </div>

   </main>

  );
}
