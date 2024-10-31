import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/service";
import Container from "../components/Container";
import parse from "html-react-parser";
import Loader from "../components/Loader";
import { TailSpin } from "react-loader-spinner";
const Blog = () => {
  const [blog, setBlog] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      service.getBlog(slug).then((blog) => {
        if (blog) setBlog(blog);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  return blog ? (
    <div className="lg:my-16 md:my-8 my-6">
      <Container className="flex flex-wrap items-start justify-start lg:gap-10 md:gap-7 gap-4">
        <div className="lg:flex-[0.6] flex justify-center mb-4 relative rounded-xl p-2 md:h-[28rem] lg:h-[30rem] h-[19rem] mx-auto">
          <img
            src={service.getFilePreview(blog.blogImage)}
            alt={blog.title}
            className="rounded-xl w-full h-full object-contain"
          />
        </div>
        <div className="lg:flex-1">
          <div className=" mb-6">
            <h1 className="text-2xl font-bold text-text-head">{blog.title}</h1>
          </div>
          <div className="">{parse(blog.content)}</div>
        </div>
      </Container>
    </div>
  ) : (
    <Container className="h-screen -mt-32 flex items-center justify-center">
      <TailSpin
        visible={true}
        height="120"
        width="120"
        color="lightblue"
        ariaLabel="tail-spin-loading"
        radius="3"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Container>
  );
};

export default Blog;
