import React from 'react'
import HTML from "@/assets/html.png"
const Skill = () => {
  return (
    <div>
   <div name="skills" className='bg-[#0a192f]'>
           {/* Container ? */}
           <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
               <div className='text-white'>
                  <p className='text-4xl text-gray-300 py-4'>Experience</p>
                  <p> These are things I've used to build peculiar stuff</p>
               </div>
                 <div>
                       <div>
                            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                       </div>
                 </div>
           </div>
   </div>
    </div>
  )
}

export default Skill
