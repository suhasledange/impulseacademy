import React from 'react'

const CourseCard = ({title,description,icon}) => {
  return (
    <div className='shadow-lg flex flex-grow flex-col justify-center py-8 px-6 rounded-xl hover:shadow-xl duration-200 min-h-[24rem]'>
    <div className='flex items-center justify-start gap-2 border-b-2 border-gray-400 pb-4 mb-4'>
            <div className='w-14 h-14 bg-back-blue-light rounded-full p-2'>
                <img className='w-full h-full object-contain' src={icon} alt='icn'/>
            </div>
            <h1 className='text-2xl font-semibold text-text-head'>{title}</h1>
    </div>
    <p className='text-text-para font-light mb-1 text-justify'>{description}</p>
    <p className=' text-text-head underline underline-offset-2 decoration-dotted cursor-pointer font-medium'>Learn more</p>
    <div className='w-full flex flex-col flex-1 items-center h-full justify-end'>
    <button className='active:scale-95 px-10 py-2 mt-2 rounded-full bg-blue-btn hover:bg-text-para duration-300 text-white'>Course Overview</button>
    </div>
</div>
  )
}

export default CourseCard
