import React from 'react'
import { NavLink } from 'react-router-dom';

const BlogCard = ({id,image,title,date}) => {
  return (
    <div className='shadow-xl border-2 lg:max-w-[25rem] md:max-w-[27rem] max-w-[26rem] lg:mx-auto md:mx-0 mx-auto flex-grow border-gray-300 flex flex-col min-h-[24rem] items-center justify-between p-8 rounded-2xl hover:shadow-xl duration-200'>
      
        <div className='relative w-full h-32 mb-8'>
                <img className='w-full h-full object-contain' src={image} alt='image'/>
                <div className='absolute rounded-full p-3 w-10 h-10 bg-blue-btn flex items-center justify-center text-white -bottom-6 right-10'>
                            {id}
                </div>
        </div>
            
        <div className='w-full justify-end h-full'>
            <h1 className='mb-6 capitalize text-text-head font-semibold lg:text-lg text-md'>{title}</h1>
            <p className='text-text-head text-sm'>{date}</p>
            
        </div>

        <div className='flex w-full items-center justify-end'>
        
            <button className='underline underline-offset-2 decoration-dotted  text-text-head font-medium text-right lg:text-md text-sm '>Read more</button>
        
        </div>
    </div>
  )
}

export default BlogCard
