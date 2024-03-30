import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FaTimes } from "react-icons/fa";
import { SiNike } from "react-icons/si";
const Toasts = ({closeModal,toastsIsOpen,category}) => {
    
       return (
        <Transition
            appear
            show={toastsIsOpen}
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-450"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
      >
        <Dialog onClose={ closeModal}>
        <div className="fixed inset-0 flex w-screen items-center justify-center p-5">
          <Dialog.Panel>
            
            {
              <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-slate-50 rounded-lg shadow-3xl dark:text-gray-400 dark:bg-gray-800" role="alert">
                 
                      <SiNike className='h-10 w-10 text-coral-red inline-flex items-center justify-center '/>
                     
                         
                     <div className="ms-3 text-sm font-normal text-gray-600"><p> {category} has been added successfully.</p></div>
                      <button    onClick={closeModal} type="button" className="ms-auto -mx-1.5 -my-1.7  text-black  rounded-lg  p-1.5  inline-flex items-center justify-center ">
                        <FaTimes />
                      </button>
                               
              </div>     
              }
          </Dialog.Panel>
          </div>
        </Dialog>
 </Transition>
  

 
           )
}

export default Toasts;









