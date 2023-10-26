import React from "react"
import signupImg from "../assets/signup.png"
import Template from "../components/Template"

const Signup = ({setIsLoggedIn}) => {

     return(
          <Template
               title="Join the millions leraning to code with StudyNotion for free"   
               desc1="Build Skill for today, tommorrow and beyound."
               desc2="Educaton to future-proof your career"
               image={signupImg}
               formtype="signup"
               setIsLoggedIn={setIsLoggedIn}
          />
     );

}

export default Signup;
