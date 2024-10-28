import React from 'react'
import Container from '../components/Container'
import { IoSearch } from "react-icons/io5";
import { blog, blog1 } from '../constant';
import BlogCard1 from '../components/Blog/BlogCard1';
import { FaCaretDown } from 'react-icons/fa';
const Blog = () => {
  return (
    <div className='bg-white w-full'>
    <Container className="py-10">
      <div className='text-center w-full'>
          <h1 className='text-text-head lg:text-3xl text-2xl mb-2 font-semibold'>Latest Articles & Updates</h1>
          <p className='lg:text-lg md:text-md text-sm lg:w-[35%] md:w-[50%] w-[80%] mx-auto text-text-para'>Stay ahead with our latest tips,news and updates from
          the world of physics</p>
      </div>

      <div className='flex items-center justify-start gap-2 border-b-2 p-1 max-w-md mt-10'>
        <IoSearch className='text-lg text-text-head'/>
        <input placeholder='Search' type='text' name='search' className='outline-none w-full'/>
      </div>

      <div className=''>

      <div className='w-full flex flex-wrap gap-4 my-12 mx-auto' >
                {
                  blog1.map(b=>(
                    <BlogCard1 key={b.id} image={b.image} title={b.title} description={b.description} date={b.date}/>
                  ))
                }

       </div>

         <div className='w-full flex items-center justify-center'>
              <button className='bg-blue-btn flex items-center justify-center gap-2 text-white active:scale-95 hover:bg-text-para duration-200 hover:shadow-lg rounded-full py-2 px-6'>Read More <FaCaretDown className='text-xl'/></button>
            </div>

      </div>

    </Container>
</div>
  )
}

export default Blog
