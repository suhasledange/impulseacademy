import React from 'react'
import { Link} from 'react-router-dom';
import service from '../../appwrite/service';
import formatDate from '../../util/formateDate';

const BlogCard = ({$id,title,blogImage,$updatedAt,count
}) => {

  return (
   
    <div className='shadow-xl border-2 lg:w-[25.5rem] md:w-[25rem] lg:max-w-[25.5rem] md:max-w-[25rem] max-w-[20rem] lg:mx-auto md:mx-0 mx-auto flex-grow border-gray-300 flex flex-col h-[24rem] items-center justify-between p-8 rounded-2xl hover:shadow-xl duration-200'>
      
        <div className='relative w-full h-40 mb-8'>
                <img className='w-full h-full object-cover' src={service.getFilePreview(blogImage)} alt={title}/>
                <div className='absolute rounded-full p-3 w-10 h-10 bg-blue-btn flex items-center justify-center text-white -bottom-6 right-10'>
                            {count}
                </div>
        </div>
        <div className='w-full justify-end h-full'>
            <h1 className='mb-6 capitalize text-text-head font-semibold lg:text-lg text-md'>{ title.length > 65 ? title.substr(0,65)+"..." :title }</h1>
            <p className='text-text-head text-sm'>{formatDate($updatedAt)}</p>
            
        </div>

        <div className='flex w-full items-center justify-end'>
        <Link onClick={
          ()=>{ window.scrollTo({ top: 0, behavior: "smooth" });}
        } to={`/blog/${$id}`}>
            <button className='underline underline-offset-4 hover:decoration-solid decoration-dotted duration-150 hover:text-text-count text-text-head font-medium text-right lg:text-md text-sm '>Read more</button>  
        </Link>
        </div>
    </div>
  )
}

export default BlogCard
