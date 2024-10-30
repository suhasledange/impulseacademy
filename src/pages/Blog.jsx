import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import service from '../appwrite/service';
import Container from '../components/Container';
import parse from 'html-react-parser'
const Blog = () => {

  const [blog,setBlog] = useState(null);
  const {slug} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    if(slug){
      service.getBlog(slug).then(blog => {
        if(blog) setBlog(blog)
        else navigate("/")
      })
    }else navigate("/")

  },[slug,navigate])

  return blog ? (
    <div className="py-8 my-16">
        <Container className="flex flex-wrap items-start justify-start gap-10">
            <div className="lg:flex-[0.6] flex justify-center mb-4 relative rounded-xl p-2 h-[30rem]">
                <img
                    src={service.getFilePreview(blog.blogImage)}
                    alt={blog.title}
                    className="rounded-xl w-full h-full object-contain"
                />
            </div>
            <div className='lg:flex-1'>

            <div className=" mb-6">
                <h1 className="text-2xl font-bold text-text-head">{blog.title}</h1>
            </div>
                <div className="">
                {parse(blog.content)}
                </div>
            </div>
        </Container>
    </div>
) : null;
}

export default Blog
