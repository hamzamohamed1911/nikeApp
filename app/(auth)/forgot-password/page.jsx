'use client'
import { arrowRight } from "@/app/assets/icons";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useRef } from "react";



export default function ForgotPassword() {
    const router = useRouter();
    const email = useRef()

    const handleSubmit =(e)=>{
    e.preventDefault();
    
    const enteredEmail = email.current.value;
    console.log(enteredEmail)
    router.push('/login')

   }
    return (
     <form onSubmit={handleSubmit}> 
       <div className="padding p-10 flex flex-1 justify-center items-center">
       <div className="min-h-screen  py-6 flex flex-col justify-center">
  <div className="relative py-3 sm:max-w-xl sm:mx-auto">
    
    <div className="relative px-4 py-10  shadow-lg rounded-3xl sm:p-20 bg-slate-50">

      <div className="max-w-md mx-auto">


        <div>
          <h1 className="text-2xl font-bold">Find Your Account</h1>
          <p className="font-montserrat mt-2">Please enter your email address or mobile number to search for your account.</p>
        </div>

        <div className="divide-y divide-gray-200">
          <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            
          <div className="relative">

         <input 
         autoComplete="email" 
         id="email" 
         name="email" 
         type="text"
         className=" bg-slate-50 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
         placeholder="Email address" 
         ref={email}
         required
          />
         <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
         </div>
         <Button type="submit"  label="Resset password" iconURL={arrowRight }/>
          
          </div>
        </div>

      </div>

    </div>
  </div>


</div>
</div>
     </form>

    );
  }