import React from 'react'

const ReviewCard = ({image,review,name,batch}) => {
  return (
    <div className='shadow-xl border-2 flex flex-grow border-gray-300 w-[38rem] min-h-[12rem] justify-center py-6 pb-3 lg:px-6 md:px-5 px-3 rounded-xl hover:shadow-xl duration-200 gap-2'>
            <div className='lg:w-28 lg:h-28 md:w-24 md:h-24 w-20 h-20 -ml-2 rounded-full'>
                <img className='w-full h-full object-contain rounded-full' src={image} alt='icn'/>
            </div>
    <div className='ml-2 flex-1 flex-col justify-between'>
    <p className='text-text-para mb-6 lg:text-md text-sm review-bar overflow-y-auto pr-1 lg:h-32 md:h-32 h-28'>{review}</p>
    <p className='text-text-head text-right lg:text-lg text-sm font-medium mb-4'> ~ {name} <span>{batch}</span></p>
    </div>
</div>
  )
}

export default ReviewCard
