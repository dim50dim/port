import React from 'react'
import myPhoto from "@/assets/photo.jpg"
import { HiArrowNarrowRight } from 'react-icons/hi';
const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen '>
               {/* Container  */}
         
         
  
                     <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600 '>Hi, my name is</p>

                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Zhelezkov Dmytro</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Developer</h2>


                    <p className='text-[#8892b0] py-4 max-w-[700px]'>
                      I’m a developer specializing in building (and occasionally
                      designing) exceptional digital experiences. Currently, I’m focused on
                      building responsive full-stack web applications.
                       </p>
                                {/* photo  */}

                                    <div className="flex flex-col items-center mt-10">
                    <div className="w-40 h-40 rounded-full  bg-cover shadow-lg mb-6">
                      <div style={{backgroundImage:`url(${myPhoto})`}} alt="My Photo" className="w-40 h-40 rounded-full  bg-cover shadow-lg border-4 border-white"></div>
                    </div>
                      </div>

                       <div>
                           <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                            View Work  <span className=' group-hover:rotate-90  duration-300'> <HiArrowNarrowRight className='ml-3'/></span></button>
                       </div>
               </div>
    </div>
  )
}

export default Home;
