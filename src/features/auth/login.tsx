"use client"
import React, { useState, useEffect } from 'react';


// Types
import { IUser, IFormValues } from '@/types/types';


import { useRouter } from 'next/navigation';
import { Resolver, useForm } from "react-hook-form";

// Icons
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";



const Login = () => {

    // Define email and password of user 
    const [user, setUser] = useState<IUser>({ email: "", password: "" });
    
    // Define remember me state
    const [rememberMe, setRememberMe] = useState<boolean>(true)

    //Define show password controll
    const [showPassword, setShowPassword] = useState<boolean>(true)

   

  
    const router = useRouter();

    // Define form validation
    const { register, handleSubmit, formState: { errors } } = useForm();

     //Sign-In 
     const loginEmailPassword = async (data: any) => {
       // await dispatch(authService.signInWithEmailAndPassword())             
         router.push("/")
    }

    // Show password function
    const handleShowPassword: (data: any) => void = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className=' w-full mx-auto ' >
            <form onSubmit={handleSubmit(loginEmailPassword)} className='p-5 mt-10 flex  flex-col gap-3 border shadow-sm w-10/12 md:w-3/5  lg:w-3/12 xl:w-3/12 mx-auto'>
                <h1 className='font-bold text-4xl mt-5 text-gray-900 text-center' >Sign In</h1>
                <div className='w-full h-3 text-[12px] text-red-600 italic flex flex-col items-start mb-3' >
                    {errors.email && errors.email.type === "required" && <span>Email is required.</span>}
                    {errors.email && errors.email.type === "maxLength" && <span>Max length exceeded.</span>}
                    {errors.password && errors.password.type === "required" && <span> Password is required.</span>}
                    {errors.password && errors.password.type === "maxLength" && <span> Max length exceeded.</span>}
                    {errors.password && errors.password.type === "minLength" && <span> Min length exceeded.</span>}
                </div>                
                <input {...register('email', { required: true, maxLength: 30 })} placeholder='Email' type={"email"} className={`border ${errors.email && "border-red-500"} outline-none rounded-sm text-sm p-3 mt-2`} />
                <div className={`border ${errors.password && "border-red-500"} relative flex items-center justify-between `}>
                    <input {...register('password', { required: true, maxLength: 20, minLength: 6 })} placeholder='Password' type={showPassword ? "password" : "text"} className={`outline-none rounded-sm text-sm p-3 bg-none w-full`} />
                    {showPassword ? <AiOutlineEyeInvisible onClick={handleShowPassword} className='absolute right-1 cursor-pointer hover:opacity-80' /> : <AiOutlineEye onClick={handleShowPassword} className='absolute right-1 cursor-pointer hover:opacity-80' />}
                </div>
                <button onClick={loginEmailPassword} className=' py-1 mt-4 bg-orange-500 rounded-sm text-white hover:opacity-80'>login</button>
                <div className='flex items-center justify-between' >
                    <div className='flex items-center gap-1'>
                        <input type={"checkbox"} />
                        <span className='text-[12px] text-blue-600'>Remember Me</span>
                    </div>
                    <h6 className='text-[12px] text-blue-600'>Forgot Password!</h6>
                </div>
                <div className='flex items-center justify-evenly gap-2 px-2 text-gray-400 text-xs text-center py-2 italic'>
                    <div className='border-b w-full' ></div>
                    <div className='w-full text-[12px]' >Sign-In with</div>
                    <div className='border-b w-full' ></div>
                </div>
                <div className='flex items-center gap-5 justify-center text-3xl'>
                    <FcGoogle className='cursor-pointer hover:opacity-80' />
                    <BsFacebook className='cursor-pointer hover:opacity-80' color='blue' />
                </div>
            </ form>
        </div>
    )
}

export default Login