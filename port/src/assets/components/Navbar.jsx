import React from 'react'
import Logo from "../logo1.png"
const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
          <div>
              <img src={Logo} alt="Logo" />
          </div>         
    </div>
  )
}

export default Navbar
