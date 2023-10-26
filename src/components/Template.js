import React from "react";
import imageFrame from "../assets/frame.png"
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import {FcGoogle} from "react-icons/fc"

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {

     console.log(formtype);
     console.log("this is setLogin "+setIsLoggedIn);

     return(
          <div className="flex justify-between flex-row w-11/12 max-w-[1160px] 
                         py-12 mx-auto gap-x-12 gap-y-0">
               <div className="w-11/12 max-w-[450px]">
                    <h1 className="text-slate-100 font-semibold text-[1.875rem] leading-[2.375rem]">
                         {title}
                    </h1>

                    <p className="text-[1.125rem] leading[1.625rem] mt-4">
                         <span className="text-slate-100">{desc1}</span><br/>
                         <span className="text-blue-300 italic">{desc2}</span>
                    </p>

                    {formtype === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

                    <div className="flex w-full items-center my-4 gap-x-2">
                         <div className="w-full h-[1px] bg-slate-600"></div>

                         <p className="text-slate-600 font-medium leading[1.30rem]">OR</p>

                         <div className="w-full h-[1px] bg-slate-600"></div>
                    </div>

                    <button className="w-full flex justify-center items-center 
                                   rounded-[8px] font-medium text-slate-100
                                   border border-slate-600 px-[12px] py-[8px] gap-x-2 mt-6 ">
                                   <FcGoogle/>
                         <p> Sign Up with Google </p>
                    </button>
               </div>

               <div className="relative w-11/12 max-w-[450px]">
                    <img src={imageFrame}
                         alt="imageFrame"
                         width={558}
                         height={504}
                         loading="lazy"
                         />

                    <img src={image}
                         alt="image"
                         width={538}
                         height={490}
                         loading="lazy"
                         className='absolute -top-4 right-4'
                         />
               </div>
          </div>
     );
}

export default Template;