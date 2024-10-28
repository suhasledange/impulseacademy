import React from 'react'
import { achievers } from '../../constant'

const Section2 = () => {
  return (
    <div>
        <h1 className=' text-text-head font-semibold lg:text-3xl text-2xl text-center my-16'>Meet Our Top Achievers</h1>
    
        <div className='w-full flex flex-wrap gap-4 mt-8 mb-8' >
            {
                achievers.map(a=>(
                    <div key={a.id} className='shadow-lg flex lg:max-w-[25.5rem] max-w-[26rem] lg:mx-0 md:mx-0 mx-auto flex-grow flex-col justify-center md:p-6 p-5 rounded-xl hover:shadow-xl duration-200 min-h-[24rem]'>
                    <img className='w-full h-full object-contain' src={a.image} alt={a.id}/>
                 </div>

                ))
            }
        </div>

    </div>
  )
}

export default Section2
