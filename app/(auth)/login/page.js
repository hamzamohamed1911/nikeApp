"use client"
import { arrowRight } from "@/app/assets/icons";
import Button from "@/components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {

	const [enteredValues, setEnteredValues] = useState({
		email:'',
		password:''
	})
	
	const handleInputChange =(identifier,value)=>{
		setEnteredValues(prevValues=>({
			...prevValues,
			[identifier]:value
		}))


	}

const router = useRouter()
  const handleSubmit= (e)=>{
	
	e.preventDefault();
    console.log(enteredValues)
	setEnteredValues({email:'',password:''})
	router.push('/products')
	
  }
    return(
		<form onSubmit={handleSubmit}>
			<div className="padding p-10 flex flex-1 justify-center items-center">

<div className="min-h-screen bg-primary py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md  ">
			<h1 className='mt-10 font-montserrat text-xl  font-bold text-coral-red '>
               Nike helps you choose comfortable shoes
              </h1>
				<div>
					<h1 className="text-2xl font-bold text-center pt-2">Login </h1>
				</div>
				
				<div className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

						<div className="relative">
							<input
							 id="email" 
							 name="email"
							  type="text" 
							  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" 
							  placeholder="Email address"
							  onChange={(e)=>handleInputChange('email',e.target.value)}
							  value={enteredValues.email}
							   />
							 <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div className="relative">
							 <input 
							  id="password" 
							  name="password"
							  type="password" 
							  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
							  placeholder="Password" 
							  onChange={(e)=>handleInputChange('password',e.target.value)}
							  value={enteredValues.password}

							  />
							<label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>

						<div className="relative">

                        <Button type="submit"  label="Login" iconURL={arrowRight }/>
                                                
						</div>

                        <Link href="/forgot-password" className="ms-auto text-sm font-medium text-coral-red hover:underline mt-2 ">forgot password?</Link>
						
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                           Not registered? 
						   
						   <Link href="/register" className=" text-coral-red hover:underline ">Create account</Link>
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
;
  }