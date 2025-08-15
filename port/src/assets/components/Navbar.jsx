import React from 'react'
import Logo from "@/assets/logo1.png"
import {FaBars} from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
          <div>
              <img src={Logo} alt="Logo" style={{width:"50px"}} />
          </div>
                {/* menu  */}
         
            <ul className='hidden md:flex '>
              <li>Home</li>
              <li>About</li>
              <li>Skill</li>
              <li>Work</li>
              <li>Contact</li>
          </ul>
            

               {/* Hamburger  */}
            <div className='md:hidden'>
                <FaBars/>
            </div>

            {/* Mobile menu  */}
            <div>
                 <ul className='absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '>
              <li>Home</li>
              <li>About</li>
              <li>Skill</li>
              <li>Work</li>
              <li>Contact</li>
          </ul>
            </div>

       {/* Social icons  */}
       <div className='hidden'>

       </div>
    </div>
  )
}

export default Navbar
