import React, { useEffect, useState } from "react";
import Container from "../Container";
import BlogCard from "./BlogCard";
import service from "../../appwrite/service";
const Blogs = () => {

  const  [blogsData,setBlogs]  = useState([]);
  useEffect(() => {
    service.getHomeBlogs().then((blog) => {
      if (blog) {
        setBlogs(blog.documents);
      }
    });
  }, []);
  
  return (
    <div className="w-full bg-white mb-20">
      <Container className="flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-text-head mb-5 lg:text-3xl text-2xl font-semibold">
            Latest From Our Blog
          </h1>
          <p className="w-72 mx-auto text-gray-700 ">
            "Stay <span className="text-text-primary">Updated</span> with the
            latest tips, Study hacks &{" "}
            <span className="text-text-primary">expert insights</span>"
          </p>
        </div>
        <div className="w-full flex flex-wrap gap-4 mt-8 mb-8 mx-auto">
          

            {blogsData.length ? blogsData?.map((b,i) => (
              <div className=" lg:mx-0 md:mx-0 mx-auto" key={b.$id} >
              <BlogCard {...b} count={i + 1}/>
              </div>
            ))
            : <div><h1 className="text-text-head text-lg">No Data Found</h1></div>
          }
        
        </div>
        <div>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
