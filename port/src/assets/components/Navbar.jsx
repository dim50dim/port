import React, { useState } from 'react'
import Logo from "@/assets/logo1.png"
import {FaBars, FaTimes,FaGithub,FaLinkedin} from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs"
import { HiOutlineMail } from 'react-icons/hi';
const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav);
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
            <div className='md:hidden z-10' onClick={handleClick}>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>

            {/* Mobile menu  */}
            <div>
                 <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center "}>
              <li className='py-6 text-4xl'>Home</li>
              <li className='py-6 text-4xl'>About</li>
              <li className='py-6 text-4xl'>Skill</li>
              <li className='py-6 text-4xl'>Work</li>
              <li className='py-6 text-4xl'>Contact</li>
          </ul>
            </div>

       {/* Social icons  */}
       <div className= 'hidden lg:flex fixed flex-column top-[35%] left-0'>
            <ul>
           
               <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a target='_blank' className='flex justify-between items-center w-full text-gray-300'
                     href="https://https://github.com/dim50dim?tab=overview&from=2025-08-01&to=2025-08-13">
                        GitHub <FaGithub size={30}/> 
                    </a>
                 </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a target='_blank' className='flex justify-between items-center w-full text-gray-300'
                     href="mailto:zhelezkov.mit@proton.me">
                        Email <HiOutlineMail size={30}/> 
                    </a>
                 </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a target='_blank' className='flex justify-between items-center w-full text-gray-300'
                     href="https://drive.google.com/file/d/12iJ8_zrBDRbf153hGTQCaU1jruoW8kfI/view?usp=drive_link">
                        Resume <BsFillPersonLinesFill size={30}/> 
                    </a>
                 </li>
             <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a target='_blank' className='flex justify-between items-center w-full text-gray-300'
                     href="https://www.linkedin.com/in/dmitri-zelezkov-b35b41202">
                        Linkedin <FaLinkedin size={30}/> 
                    </a>
                 </li>
            </ul>
       </div>
       
    </div>
  )
}

export default Navbar
