import React from 'react'
import Container from '../components/Container'
import { FaCaretDown } from 'react-icons/fa';
import { useBlogsContext } from '../context/BlogProvider';
import BlogCard from '../components/Blog/BlogCard';
import Loader from '../components/Loader'
import { Helmet } from 'react-helmet'
const Blogs = () => {
  const { blogsData, loadMoreBlogs,loadingData } = useBlogsContext();
  return (
    <div className='bg-white w-full overflow-x-hidden'>

<Helmet>
        <title>Latest Articles & Updates - Impulse Academy</title>
        <meta
          name="description"
          content="Stay ahead with the latest physics tips, news, and updates from Impulse Academy. Explore our blog for educational content and resources."
        />
        <meta
          name="keywords"
          content="physics blogs, Impulse Academy, physics news, updates, education, blog articles"
        />
      </Helmet>

    <Container className="py-10">
      <div className='text-center w-full'>
          <h1 className='text-text-head lg:text-3xl text-2xl mb-2 font-semibold'>Latest Articles & Updates</h1>
          <p className='lg:text-lg md:text-md text-sm lg:w-[35%] md:w-[50%] w-[80%] mx-auto text-text-para'>Stay ahead with our latest tips,news and updates from
          the world of physics</p>
      </div>

      {/* <div className='flex items-center justify-start gap-2 border-b-2 p-1 max-w-md mt-10'>
        <IoSearch className='text-lg text-text-head'/>
        <input placeholder='Search' type='text' name='search' className='outline-none w-full'/>
      </div> */}

      <div className=''>

      <div className='w-full flex flex-wrap gap-4 my-12 mx-auto' >
                {
                 blogsData ? blogsData?.map((b,i)=>(
                    <div key={b.$id} className='lg:mx-0 md:mx-0 mx-auto'>
                    <BlogCard count={i+1}  {...b}/>
                 </div>
                  )) : <div><h1 className='text-text-head text-lg'>No Data Found</h1></div>
                }
       </div>

         <div className='w-full flex items-center justify-center'>
              <button onClick={loadMoreBlogs} className='bg-blue-btn flex items-center justify-center gap-2 text-white active:scale-95 hover:bg-text-para duration-200 hover:shadow-lg rounded-full py-2 px-6'>Read More {loadingData ? <Loader/> : <FaCaretDown className='text-xl'/>}  </button>
            </div>
      </div>
    </Container>
</div>
  )
}

export default Blogs
