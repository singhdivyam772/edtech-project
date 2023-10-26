import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({setIsLoggedIn}) =>{

     const [formData, setFormData] = useState({email:"", password:""});
     
     const [showPassword, setShowPassword] = useState(false);
     const navigate = useNavigate();

     const changeHandler = (event) =>{
          setFormData( (prevData) =>(
          {
          ...prevData, 
          [event.target.name]: event.target.value
          }
     )) 
}

     function updateAccount(event){
          event.preventDefault();
          setIsLoggedIn(((prev) =>!prev));
          toast.success("logged in...");
          navigate("/dashboard");


     }
     return(
          <form onSubmit={updateAccount}
               className="flex flex-col w-full gap-y-4 mt-6">
               <label className="w-full">
                    <p className="text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]">
                         Email Address<sup className=" text-pink-400">*</sup>
                    </p>

               <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Enter email id"
                    className="bg-richblack-800 rounded-[0.5rem] text-slate-100 w-full p-[12px]"
               />
               </label>

               <label className="w-full relative">
                    <p className="text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]">
                         Password<sup className="text-pink-400">*</sup>
                    </p>

               <input
                    required
                    type={showPassword ? ("text") : ("password")}
                    name="password"
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter Password"
                    className="bg-richblack-800 rounded-[0.5rem] text-slate-100 w-full p-[12px]"
               />

               <span onClick={() => setShowPassword( (prev) => !prev)}
               className="absolute right-3 top-[38px] cursor-pointer">
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                    (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}     
               </span>

               <Link>
                    <p className='text-xs mt-1 text-blue-400 max-w-max ml-auto'>
                         Forgot Password
                    </p>
               </Link>
               </label>

               <button className="flex justify-center items-center rounded-[10px] text-slate-800
                                   font-medium text- bg-yellow-400 w-full px-[12px] py-[8px] mt-6">
                    Sign In
               </button>
          </form>
     );
}

export default LoginForm;