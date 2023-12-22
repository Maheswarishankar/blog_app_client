import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../Components/BlogCard";
import { URL } from "../App";

const Blog = ({id}) => {

  const [blogs, setBlogs] = useState([]);
  //get blogs
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get(`${URL}/api/blog/getall-blog`);
      if (data?.success) {
        setBlogs(data?.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);
  return (
    <div key={id}>
      {blogs &&
        blogs.map((blog) => (
          <BlogCard
            id={blog?._id}
            isUser={localStorage.getItem("userId") === blog?.user?._id}
            title={blog?.title}
            description={blog?.description}
            image={blog?.image}
            username={blog?.user?.username}
            time={blog.createdAt}
          />
        ))}
    </div>
  )
}

export default Blog