import React from 'react'
import Container from '../Container'
import { blog } from '../../constant'
import BlogCard from './BlogCard'
import { FaCaretDown } from "react-icons/fa";
const Blogs = () => {
  return (
    <div className='w-full bg-white mb-20'>
        <Container className="flex flex-col items-center justify-center">

            <div className='text-center'>
            <h1 className='text-text-head mb-5 text-3xl font-semibold'>Latest From Our Blog</h1>
            <p className='w-72 mx-auto text-gray-700 '>
              "Stay <span className='text-text-primary'>Updated</span> with the latest tips, Study hacks & <span className='text-text-primary'>expert insights</span>"
            </p>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-6 mt-10 mb-10'>

                {
                  blog.map(b=>(
                    <BlogCard key={b.id} id={b.id} image={b.image} title={b.title} date={b.date}/>
                  ))
                }


            </div>
            <div>
              <button className='bg-blue-btn flex items-center justify-center gap-2 text-white active:scale-95 hover:bg-text-para duration-200 hover:shadow-lg rounded-full py-2 px-6'>Read More <FaCaretDown className='text-xl'/></button>
            </div>
        </Container>
    </div>
  )
}

export default Blogs