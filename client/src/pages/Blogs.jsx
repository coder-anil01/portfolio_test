import React, { useEffect, useState } from 'react'
import Blogimage from '../images/project.jpeg'
import '../style/Blogs.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Blogs = () => {

  const [blog, setBlog] = useState([]);

  const getBlog = async() => {
    try {
      const {data} = await axios.get('https://coderanilblog.onrender.com/api/v1/blog/get');
      setBlog(data.blogs)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className='blog'>
      <div className='about-heading'>Latest Blogs Post</div>
      <div className='blog-container'>
        {blog[0] ? blog?.map((b) => (
          <div key={b._id} className='blog-card'>
            <Link to={`/blog/${b._id}`}><img className='blog-card-image' src={Blogimage} alt="blog" /></Link>
            <div className='blog-card-title'>{b?.title.slice(0,20)}...</div>
          </div>
        )) : <h2>Blog Not Found</h2>}
      </div>
    </div>
  )
}

export default Blogs
