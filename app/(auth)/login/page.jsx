"use client"
import { arrowRight } from "@/app/assets/icons";
import Button from "@/app/_components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { isEmail, hasMinLength, isNotEmpty } from "@/util/validation";
import { useAuth } from "@/store/Auth-context";

export default function Login() {
  const { setIsLoggedIn, authUser, logIn } = useAuth();
  const [error, setError] = useState(false);
  const router = useRouter();

  const [didEdit, setdidEdit] = useState({
    email: false,
    password: false,
  });
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });

  const emailIsInvalid = didEdit.email && (!isEmail(enteredValues.email) || !isNotEmpty(enteredValues.email));

  const PasswordIsInvalid = didEdit.password && (!hasMinLength(enteredValues.password, 6) || !isNotEmpty(enteredValues.password));

  const handleInputChange = (identifier, value) => {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value
    }))
    setdidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }))
    setError(false);
  }

  const handleInputBlur = (identifier) => {
    setdidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }))
    setError(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setError(false)

    try {
      await logIn(enteredValues.email, enteredValues.password);

      if (authUser) {
        router.push('/products');
        setIsLoggedIn(true)
        setEnteredValues({ email: '', password: '' })
        setError(false)
      } else {
        setError(true);
      }

    } catch (err) {
      setError(true);
      console.error("Error occurred during login:", err);
    }

  }

  return (
    <form onSubmit={handleSubmit}> {/* Attach handleSubmit to form's onSubmit event */}
      <div className="padding p-10 flex flex-1 justify-center items-center">
        <div className="min-h-screen py-6 flex flex-col justify-center">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto ">
            <div className="relative px-4 py-10 bg-slate-50 shadow-lg rounded-3xl sm:p-20">
              <div className="max-w-md  ">
                <h1 className='mt-10 font-montserrat text-xl font-bold text-coral-red '>
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
                        className="peer bg-slate-50 placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Email address"
                        onBlur={() => handleInputBlur('email')}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        value={enteredValues.email}
                        autoComplete="email"
                      />
                      <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                      <div className="text-coral-red">
                        {emailIsInvalid && (<p>email is invalid </p>)}
                      </div>
                    </div>
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        className="peer bg-slate-50 placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Password"
                        onBlur={() => handleInputBlur('password')}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        value={enteredValues.password}
                        autoComplete="new-password"
                      />
                      <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                      <div className="text-coral-red">
                        {PasswordIsInvalid && (<p>password is invalid </p>)}
                      </div>
                    </div>
                    <div className="relative">
                      <Button type="submit" label="Login" iconURL={arrowRight} /> {/* Set button type to "submit" */}
                    </div>
                    {error && <h1 className="bg-primary rounded text-center text-red-500 p-6" >User is not valid. Cannot navigate to products.</h1>}
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
  );
}
