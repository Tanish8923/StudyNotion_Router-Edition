import {useState} from 'react';
import { Route , Routes } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import PrivateRoute from './components/PrivateRoute';

import NavBar from "./components/NavBar";
import About from './pages/About';
import Contact from './pages/Contact';
import MainHeader from './pages/MainHeader';
import PageNotFound from './pages/PageNotFound';

function App() {

  const [isLoggedIn , setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-full bg-richblack-900 flex flex-col ">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path="/" element={<MainHeader/>}>
            <Route index element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/LogIn" element={<LogIn setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path="/SignUp" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path="/Dashboard" element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Dashboard/>
              </PrivateRoute>
              }/>
            <Route path="*" element={<PageNotFound/>}/>  
         </Route> 
      </Routes>
    </div>
  );
}

export default App;
