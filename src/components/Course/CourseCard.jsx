import React from 'react'
import { NavLink } from 'react-router-dom'

const CourseCard = ({title,description,icon}) => {
  return (
    <div className='shadow-lg flex flex-grow flex-col lg:max-w-[25rem] lg:mx-auto md:mx-0 mx-auto max-w-[26rem] justify-center py-8 px-6 rounded-xl hover:shadow-xl duration-200 min-h-[24rem]'>
    <div className='flex items-center justify-start gap-2 border-b-2 border-gray-400 pb-4 mb-4'>
            <div className='lg:w-14 lg:h-14 md:w-12 md:h-12 w-10 h-10 bg-back-blue-light rounded-full p-2'>
                <img className='w-full h-full object-contain' src={icon} alt='icn'/>
            </div>
            <h1 className='lg:text-2xl text-xl font-semibold text-text-head'>{title}</h1>
    </div>
    <p className='text-text-para font-light mb-1 lg:text-md text-sm text-justify'>{description}</p>
    <p className=' text-text-head lg:text-md text-sm underline underline-offset-2 decoration-dotted cursor-pointer font-medium'>Learn more</p>
    <div className='w-full flex flex-col flex-1 items-center h-full justify-end'>
    <NavLink to="/courses"
      onClick={()=>{
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
    <button className='active:scale-95 px-10 py-2 mt-2 rounded-full bg-blue-btn hover:bg-text-para duration-300 text-white lg:text-md text-sm'>Course Overview</button>

    </NavLink>

    </div>
</div>
  )
}

export default CourseCard
