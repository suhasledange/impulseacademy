import React from 'react'

const ReviewCard = ({image,review,name,batch}) => {
  return (
    <div className='shadow-xl border-2 border-gray-300 flex w-[38rem] min-h-[12rem] items-center py-2 px-6 rounded-xl hover:shadow-xl duration-200'>
            <div className='w-80 h-30'>
                <img className='w-full h-full object-contain' src={image} alt='icn'/>
            </div>
    <div className='ml-2 flex-col justify-between'>
    <p className='text-text-para mb-6'>{review}</p>
    <p className='text-text-head text-right font-medium mb-4'> ~ {name} <span>{batch}</span></p>
    </div>
</div>
  )
}

export default ReviewCard
