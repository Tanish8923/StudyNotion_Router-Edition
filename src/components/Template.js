import React from 'react'
import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'
import frameImage from '../assets/frame.png';
import { FcGoogle } from "react-icons/fc";

const Template = ({title , desc1 , desc2 , image , formType , setIsLoggedIn }) => {
  return (
    <div className="flex w-10/12 max-w-[1160px] py-12 h-full mx-auto gap-y-0 gap-x-12 justify-between overflow-x-hidden scrollbar-hide ">
        <div className="w-11/12 max-w-[450px] mx-0 text-white ">
            <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
            <p className="flex flex-col text-[1.125rem] mt-4 leading-[1.625rem]">
                <span className="text-richblack-100">{desc1}</span>
                <span className="text-blue-100 italic">{desc2}</span>
            </p>
            {formType === "SignUp" ? (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>) : (<LogInForm setIsLoggedIn={setIsLoggedIn}/>)}
            <div className="flex w-full items-center my-4 gap-x-2">
                <div className="h-[1px] w-full bg-richblack-700"></div>
                <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
                <div className="h-[1px] w-full bg-richblack-700"></div>
            </div>
            <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-richblack-100 border-richblack-700 border px-[12px] py-[8px] gap-x-2 mt-6 ">
                 <FcGoogle /> Sign up with Google
            </button>
        </div>

        <div className="relative w-11/12 max-w-[450px]">
            <img src={frameImage} alt='frame' width={558} height={504} loading='lazy'/>
            <img src={image} alt='students' width={558} height={490} loading='lazy' className="absolute -top-4 right-4 " />
        </div>
    </div>
  )
}

export default Template
