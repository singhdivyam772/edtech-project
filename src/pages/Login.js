import React from "react";
import loginImage from "../assets/login.png"
import Template from "../components/Template";
const Login = ({setIsLoggedIn}) => {

     return(
          <Template 
               title="Welcome Back"
               desc1="Build skill for today"
               desc2="Education to future-proof your career."
               image={loginImage}
               formtype="login"
               setIsLoggedIn={setIsLoggedIn}
          />
     );

}

export default Login;