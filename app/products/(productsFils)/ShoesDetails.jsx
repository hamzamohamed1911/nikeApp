'use client'

import { Fragment } from 'react';
import Image from 'next/image';
import { Dialog,Transition } from '@headlessui/react';
import { closeIcon } from '@/app/assets/icons';
import Link from 'next/link';
import Button from '@/components/Button';


const ShoesDetails = ({isOpen,closeModal, addItem ,category ,price,image,description  ,id}) => {
 

  return <>
  <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 h-150  " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative flex justify-center  w-full max-w-md transform overflow-hidden rounded-2xl bg-primary  p-10  shadow-2xl transition-all">

            <button 
               type='button'
               className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
               onClick={closeModal}>
              <Image src={closeIcon} alt='close' width={20} height={20} className='object-contain' />
           </button>


      <div className='relative rounded-lg w-90  drop-shadow-lg  '>
        

                  <div className=' relative w-full  h-40 object-contain'>
                        <Image  src={image}className=' object-contain '  fill priority  alt={category } />
                  </div>
                  <Link 
                    href="#" 
                    title="Add to Favorites"
                    className="text-4xl text-gray-300 hover:text-red-500 duration-300"
                      >
                    &hearts;
                  </Link>
                  <div className='px-5 py-3 space-y-2' >
                  
                <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{category}</h3>

                <div class="gap-2 space-x-2">
                  <span class="px-3 py-0.5 border border-blue-500 text-[11px] text-blue-500">Free Ship</span>
                  <span class="px-3 py-0.5 border border-blue-500 text-[11px] text-blue-500">7 Day Return</span>
              </div>

              <p class="gap-2 space-x-2">
                  <span class="text-2xl font-semibold text-coral-red  mt-2 font-montserrat">${price}</span>
                  <span class="text-sm line-through text-gray-500">$1000</span>
                  <span class="text-sm text-red-700">40% off</span>
              </p>
            
                  <p className='font-montserrat text-xl leading-normal text-slate-gray'>{description}</p>
              </div>

            <div className='flex justify-center items-center p-4 '>
              <Button label="Add"  handleClick={() => addItem(id)} onClose={closeModal}/>    
            </div>
            

      </div>


                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
  
  </>
}

export default ShoesDetails;