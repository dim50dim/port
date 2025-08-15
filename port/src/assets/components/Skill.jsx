import React from 'react'
import HTML from "@/assets/html.png"
const Skill = () => {
  return (
    <div>
   <div name="skills">
           {/* Container ? */}
           <div>
               <div>
                  <p>Experience</p>
                  <p> These are things I've used to build peculiar stuff</p>
               </div>
                 <div>
                       <div>
                            <img className='w-[50px]' src={HTML} alt="HTML icon" />
                       </div>
                 </div>
           </div>
   </div>
    </div>
  )
}

export default Skill
