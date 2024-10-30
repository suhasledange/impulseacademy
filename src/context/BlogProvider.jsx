import React, { createContext, useContext, useEffect, useState } from 'react'
import service from '../appwrite/service';

const BlogsContext = createContext();

export const BlogProvider = ({children}) => {


    const [blogsData,setBlogs] = useState([]);
    const [offset,setOffset] = useState(0);
    const [fetchedOffsets, setFetchedOffsets] = useState(new Set());
    const [loadingData,setLoadingData] = useState(false);
  useEffect(() => {
    if (fetchedOffsets.has(offset)) return;

    setLoadingData(true);
    service.getBlogs(offset).then((blog) => {
      if (blog) {
        setBlogs((prevBlogs) => [...prevBlogs, ...blog.documents]);
        setFetchedOffsets((prevOffsets) => new Set(prevOffsets).add(offset));
        setLoadingData(false)
      }
    });
  }, [offset, fetchedOffsets]);

      const loadMoreBlogs = () => {
        setOffset((prevOffset) => prevOffset + 3); 
    };

  return (
    <BlogsContext.Provider
        value={{
                blogsData,
                loadMoreBlogs,
                loadingData,
                setOffset
            }}
    >
        {children}
    </BlogsContext.Provider>
  )
}

export const useBlogsContext = () => useContext(BlogsContext)
