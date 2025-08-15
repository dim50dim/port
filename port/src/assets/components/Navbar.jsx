import React from 'react'
import Logo from "@/assets/logo1.png"
const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
          <div>
              <img src={Logo} alt="Logo" style={{width:"50px"}} />
          </div>
          <div> 
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Skill</li>
              <li>Work</li>
              <li>Contact</li>
          </ul>
      </div>         

               {/* Hamburger  */}

    </div>
  )
}

export default Navbar
