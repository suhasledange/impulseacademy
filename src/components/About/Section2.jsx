import React from 'react'
import { achievers } from '../../constant'

const Section2 = () => {
  return (
    <div>
        <h1 className=' text-text-head font-semibold text-3xl text-center my-16'>Meet Our Top Achievers</h1>
    
        <div className='md:w-[90%] w-[95%] mx-auto grid gap-4 mt-8 mb-8' 
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))' }}
        >
            {
                achievers.map(a=>(
                    <div key={a.id} className='shadow-lg flex flex-grow flex-col justify-center md:p-6 p-5 rounded-xl hover:shadow-xl duration-200 min-h-[24rem]'>
                    <img className='w-full h-full object-contain' src={a.image} alt={a.id}/>
                 </div>

                ))
            }
        </div>

    </div>
  )
}

export default Section2
