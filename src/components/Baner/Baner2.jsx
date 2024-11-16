import React from 'react'

const Baner2 = ({title,image,className,className1,imageWidth}) => {
  return (
    <div className={`flex items-center box-shadow-lg rounded-3xl w-full py-3 px-8 gap-20 ${className1}`}>
        <h3 className={`lg:text-xl md:text-lg text-md text-white ${className}`}>{title}
        </h3>
        {image && <div className={`${imageWidth}`}>
            <img className='w-full h-full object-contain' src={image} alt='book'/>
        </div>
        }
    </div>
  )
}

export default Baner2
