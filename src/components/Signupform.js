import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
import { useAsyncError, useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {
const navigate = useNavigate();

const [formData, setFormData] = useState({
     firstName:"",
     lastName:"",
     email:"",
     password:"",
     confirmPassword:""
})

const [showPassword, setShowPassword] = useState(false);
const [cshowPassword, setCShowPassword] = useState(false);
const [accountType, setAccountType] = useState('student');

function changeHandler(event) {

     setFormData( (prevData) =>(
          {
               ...prevData,
               [event.target.name]:event.target.value
          }
     ) )

}

function submitHandler(event) {
     event.preventDefault();
     if(formData.password != formData.confirmPassword) {
          toast.error("Passwords do not match");
          return ;
     }

     setIsLoggedIn(true);
     toast.success("Account Created");
     const accountData = {
          ...formData
     };
     console.log("printing account data ");
     console.log(accountData);

     navigate("/dashboard");

}

const createPasswordHandler = () =>{
     
     setShowPassword((prev) => !prev);
}

const createCPasswordHandler = () =>{
     setCShowPassword((prev) => !prev);
}

return (
<div>
     {/* student-Instructor tab */}
     <div className='flex bg-slate-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
          <button
          className={`${accountType === "student" 
               ?
               "bg-slate-800 text-slate-100"
               :"bg-transparent bg-slate-300"} py-2 px-5 rounded-full transition-all duration-200`}
               onClick={()=> setAccountType("student")}>
               Student
          </button>
          <button className={`${accountType === "instructor" 
          ? "bg-slate-800 text-slate-100" 
          : "bg-transparent text-slate-300"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={()=> setAccountType('instructor')}>
               Instructor
          </button>
     </div>

     <form onSubmit={submitHandler}>
     {/* first name and lastName */}
          <div className='flex gap-x-4 mt-[20px]'>
               <label className='w-full'>
                    <p className='text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]'>
                         First Name<sup className='text-pink-400'>*</sup></p>
                    <input
                         required
                         type="text"
                         name="firstName"
                         onChange={changeHandler}
                         placeholder="Enter First Name"
                         value={formData.firstName}
                         className='bg-slate-700 rounded-[0.5rem] text-slate-100 p-[12px]'
                    />
               </label>

               <label className='w-full'>
                    <p className='text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]'>
                         Last Name<sup className='text-pink-400'>*</sup></p>
                    <input
                         required
                         type="text"
                         name="lastName"
                         onChange={changeHandler}
                         placeholder="Enter Last Name"
                         value={formData.lastName}
                         className='bg-slate-700 rounded-[0.5rem] text-slate-100 p-[12px]'
                    />
               </label>
          </div>
          {/* email Add */}
          <label className='w-full'>
               <p className='text-[0.875rem] text-slate-100 mt-5 leading-[1.375rem]'>
                    Email Address<sup className='text-pink-400'>*</sup></p>
               <input
                    required
                    type="email"
                    name="email"
                    onChange={changeHandler}
                    placeholder="Enter Email Address "
                    value={formData.email}
                    className='bg-slate-700 rounded-[0.5rem] text-slate-100 p-[12px] w-full mt-2'
               />
          </label>

          {/* createPassword and Confirm Password */}
          <div className='flex gap-x-4 mt-[20px] w-full'>
               <label className='w-full relative'>
               <p className='text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]'>
                    Create Password<sup className='text-pink-400'>*</sup></p>
               <input
                    required
                    type= {showPassword ? ("text") : ("password")}
                    name="password"
                    onChange={changeHandler}
                    placeholder="Enter Password"
                    value={formData.password}
                    className='bg-slate-700 rounded-[0.5rem] text-slate-100 w-full p-[12px]'
               />
               <span 
               className='absolute right-3 top-[38px] cursor-pointer'
               onClick={createPasswordHandler}>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                    (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
               </span>
               </label>

               <label className='w-full relative'>
               <p className='text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]'>
                    Confirm Password<sup className='text-pink-400'>*</sup></p>
               <input
                    required
                    type= {cshowPassword ? ("text") : ("password")}
                    name="confirmPassword"
                    onChange={changeHandler}
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    className='bg-slate-700 rounded-[0.5rem] text-slate-100 w-full p-[12px] relative'
               />
               <span 
               className='absolute right-3 top-[38px] cursor-pointer'
               onClick={createCPasswordHandler}>
                    {cshowPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) :

                    (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
               </span>
               </label>
          </div>
     <button className='w-full bg-yellow-400 rounded-[8px] font-medium text-slate-800 px-[12px] py-[8px] mt-6'>
          Create Account
     </button>
     </form>

</div>
)
}

export default SignupForm
