import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import BlogCard from '../Components/BlogCard';
import { URL } from '../App';


const UserBlog = ({id}) => {

  const [blogs, setBlogs] = useState([]);

  //get user blogs
  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem("userId");
      const { data } = await axios.get(`${URL}/api/blog/user-blog/${id}`);
      if (data?.success) {
        setBlogs(data?.userBlog.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserBlogs();
  }, []);
  console.log(blogs);
  return (
    <div key={id}>
    {blogs && blogs.length > 0 ? (
      blogs.map((blog) => (
        <BlogCard
          id={blog._id}
          isUser={true}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          username={blog.user.username}
          time={blog.createdAt}
        />
      ))
    ) : (
      <h1>You Havent Created a blog</h1>
    )}
  </div>
    
  )
}

export default UserBlog