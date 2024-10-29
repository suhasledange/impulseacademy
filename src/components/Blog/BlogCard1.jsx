import React from 'react'

const BlogCard1 = ({id,image,title,description,date}) => {
  return (
    <div className='shadow-lg cursor-pointer border-2 w-auto lg:w-[35rem] lg:flex-row flex-col mx-auto flex-grow border-gray-300 flex items-start justify-start lg:px-5 lg:py-5 md:px-3 md:py-5 px-3 py-5 rounded-2xl hover:shadow-xl duration-200 lg:gap-8 md:gap-6 gap-4 overflow-hidden'>

        <div className='lg:w-[25rem] w-auto h-full mb-8 flex items-start mx-auto'>
                <img className='w-full h-full object-contain' src={image} alt='image'/>
        </div>

    <div className='w-full h-full flex flex-col justify-between items-start'>

        <div>
            <div className='mb-3'>
            <h1 className='mb-3 capitalize text-text-head font-semibold lg:text-lg text-md'>{title}</h1>
            <p className='text-text-para text-sm'>{description}</p>
            </div>
        
            <p className='text-text-head text-sm mb-6'>{date}</p>
          
        </div>

        <button className='underline underline-offset-2 decoration-dotted self-start text-text-head font-medium text-right lg:text-md text-sm '>Read more</button>

        </div>


    </div>
  )
}

export default BlogCard1
