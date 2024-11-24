import React from 'react';
import {Link, NavLink} from 'react-router-dom'

import Logo from '../assets/Logo.svg'
import toast from 'react-hot-toast';

const NavBar = (props) => {

  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <nav className="flex justify-between items-center w-10/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
          <img src={Logo} alt='logo' height={32} width={160} loading='lazy'/>
      </Link>
      <div className="flex gap-x-6 text-richblack-100 ">
        <NavLink to="/">
          <span>Home</span>
        </NavLink>
        <NavLink to="/About">
          <span>About</span>
        </NavLink>
        <NavLink to="/Contact"> 
          <span>Contact</span>
        </NavLink>
      </div>
      <div className="flex items-center gap-x-4 text-richblack-100">

        {
          !isLoggedIn && <Link to="/LogIn">
          <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Log in</button>
          </Link>
        }

        {
          !isLoggedIn && <Link to="/SignUp">
          <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Sign up</button>
        </Link>
        }

        {
          isLoggedIn && <Link to="/">
          <button onClick={() => 
          {
              setIsLoggedIn(false);
              toast.success("Logged out");
          }} className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Log out</button>
        </Link>
        }

        {
          isLoggedIn && <Link to="/Dashboard">
          <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Dashboard</button>
        </Link>
        }

      </div>
    </nav>
  )
}

export default NavBar
