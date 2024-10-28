import React from 'react'

const DownloadCard = ({title,description}) => {
  return (
    <div className='shadow-lg flex flex-grow flex-col justify-center p-8 rounded-xl hover:shadow-xl duration-200 lg:max-w-[22.5rem] md:max-w-[25rem] max-w-[26rem] lg:mx-0 md:mx-0 mx-auto min-h-[20rem]'>
    <div className='flex items-center justify-center gap-2 border-b-2 border-gray-400 pb-4 mb-4'>
            <h1 className='lg:text-2xl text-xl lg:w-[70%] md:w-[78%] w-[90%]  text-center font-semibold text-text-head'>{title}</h1>
    </div>
    <p className='text-text-para font-light mb-1 text-justify'>{description}</p>
   
    <div className='w-full flex flex-col flex-1 items-center h-full justify-end'>
    <button className='active:scale-95 px-10 py-2 mt-2 rounded-md bg-blue-btn hover:bg-text-para duration-300 text-white'>Download Now</button>
    </div>
</div>
  )
}

export default DownloadCard
