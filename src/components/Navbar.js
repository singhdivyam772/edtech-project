import React from "react";
import {Link} from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";


const Navbar = (props)=>{
     let isLoggedIn = props.isLoggedIn;
     let setIsLoggedIn = props.setIsLoggedIn;

     return(
          <div className="flex justify-around w-11/12 max-w-[1160] py-4 mx-auto text-slate-100 font-semibold gap-5">
               <Link to="/" className="flex">
                    <img src={logo} alt="logo" width={160} height={32} loading="lazy"/>
               </Link>

               <nav className="">
                    <ul className="flex gap-5">
                         <li>
                              <Link to="/">Home</Link>
                         </li>
                         <li>
                              <Link to="/">About</Link>
                         </li>
                         <li>
                              <Link to="/">Contact</Link>
                         </li>
                    </ul>
               </nav>

               <div className="flex gap-5">
                    { !isLoggedIn &&
                         <button className="bg-richblack-800 rounded-[8px] px-[8px] py-[12px]">
                              <Link to="/login">Login</Link>
                         </button>
                    }

                    { !isLoggedIn &&
                         <button className="bg-richblack-800 rounded-[8px] px-[8px] py-[12px]">
                              <Link to="/signup">Signup</Link>
                         </button>
                    }

                    {    isLoggedIn &&
                         <button onClick={()=>{
                              setIsLoggedIn(false);
                              toast.success("logged out");

                         }}
                         className="bg-richblack-800 rounded-[8px] px-[8px] py-[12px]">
                              <Link to="/">Logout</Link>
                         </button>
                    }

                    {     isLoggedIn &&
                         <button className="bg-richblack-800 rounded-[8px] px-[8px] py-[12px]">
                              <Link to="/Dashboard">Dashboard</Link>
                         </button>
                    }
               </div>
               
          </div>
     );

}

export default Navbar;