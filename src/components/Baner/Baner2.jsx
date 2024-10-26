import React from 'react'

const Baner2 = ({title,image,className,className1}) => {
  return (
    <div className={`flex items-center box-shadow-lg rounded-3xl w-full py-3 px-8 gap-20 ${className1}`}>
        <h3 className={`text-xl text-white ${className}`}>{title}
        </h3>
        {image && <div className=' w-28 h-24'>
            <img className='w-full h-full object-contain' src={image} alt='book'/>
        </div>
        }
    </div>
  )
}

export default Baner2
