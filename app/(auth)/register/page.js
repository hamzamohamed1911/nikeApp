'use client'
import { arrowRight } from "@/app/assets/icons";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Register() {
 const router = useRouter()
  const handleSubmit =(e)=>{
    e.preventDefault();
    const formDataObj =new FormData(e.target);
    const data = Object.fromEntries(formDataObj.entries());
    console.log(data);
    e.target.reset();
    router.push('/products')


  }
    return (
      <form onSubmit={handleSubmit}>
        <div className="padding p-10 flex flex-1 justify-center items-center">

<div className="min-h-screen bg-primary py-6 flex flex-col justify-center sm:py-12">
  <div className="relative py-3 sm:max-w-xl sm:mx-auto">
    
    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div className="max-w-md mx-auto">
        <div>
         <h1 className='mt-10 font-montserrat text-xl  font-bold text-coral-red'>
         Nike helps you choose comfortable shoes
        </h1>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-center pt-2">Sign up  </h1>
        </div>
        
        <div className="divide-y divide-gray-200">
        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">


      <div className="relative">
        <input autoComplete="true" id="userName" name="userName" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="User name" />
        <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">User name</label>
      </div>


      <div className="relative">
         <input autoComplete="true" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
         <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
       </div>

       <div className="relative">
           <input  id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
           <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
       </div>


       <div className="relative">
           <input    id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
           <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Confirm Password</label>
       </div>


        <div className="relative">
          <Button type="submit"  label="Sign Up" iconURL={arrowRight}/>                          
        </div>
                        
                        
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </form>

      
    )
  }