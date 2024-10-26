import React from 'react'
import { Books } from '../../assets'

const Baner2 = () => {
  return (
    <div className='flex items-center bg-text-head box-shadow-lg justify-between rounded-3xl w-full max-w-screen-lg py-3 px-8 gap-20'>
        <h3 className='text-xl text-gray-200 w-[90%] lg:w-[30%] md:w-[50%]'>Sharpen Your Talents with Professional Guidance!!!
        </h3>
        <div className=' w-28 h-24'>
            <img className='w-full h-full object-contain' src={Books} alt='book'/>
        </div>
    </div>
  )
}

export default Baner2
