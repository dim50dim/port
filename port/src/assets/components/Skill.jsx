import React from 'react'
import HTML from "@/assets/html.png"
import GIT from "@/assets/github.png"
import REACT from "@/assets/react.png"
import TAILWIND from "@/assets/tailwind.png"
import NODE from "@/assets/node.png"
import CSS from "@/assets/css.png"
import JAVASCRIPT from "@/assets/javascript.png"
const Skill = () => {
  return (
    <div>
   <div name="skills" className='w-full bg-[#0a192f] text-gray-300'>
           {/* Container ? */}
           <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
               <div >
                  <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
                  <p className='py-4'> These are things I've used to build peculiar stuff</p>
               </div>
                 <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

                       <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                            <p className='my-4'>HTML</p>
                       </div>

                       <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                            <p className='my-4'>CSS</p>
                       </div>

                       <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={JAVASCRIPT} alt="JAVASCRIPT icon" />
                            <p className='my-4'>JAVASCRIPT</p>
                       </div>

                       <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={GIT} alt="GITHUB icon" />
                            <p className='my-4'>GITHUB</p>
                       </div>
                       <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={REACT} alt="REACT icon" />
                            <p className='my-4'>REACT</p>
                       </div>
                       <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={NODE} alt="NODE icon" />
                            <p className='my-4'>NODE</p>
                       </div>

                 </div>
             
           </div>
   </div>
    </div>
  )
}

export default Skill
