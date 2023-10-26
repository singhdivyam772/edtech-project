import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useEffect, useState } from 'react'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-[1100px] bg-slate-900">

      <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}
      />

      <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} ></Route>
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} ></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>        

      </Routes>
      
    </div>
  );
}

export default App;
