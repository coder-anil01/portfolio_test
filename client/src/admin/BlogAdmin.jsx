import React, { useEffect, useState } from 'react'
import DashbordNavbar from '../component/DashbordNavbar'
import axios from 'axios'
import '../style/BlogAdmin.css'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom'
import {Modal} from 'antd'

const BlogAdmin = () => {

  const [blog, setBlog] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [image, setImage] = useState(null);
  const [videourl, setVideourl] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blogid, setBlogid] = useState("");
  const [blogrtitle, setBlogtitle] = useState("");
  const [submitButton, setSubmitButton] = useState('Submit');
  const pass = "coder8987anil";

  const handleImageChange = (event) => {
    const file = (event.target.files[0])
    const render = new FileReader();
    if(file){
      render.readAsDataURL(file);
      render.onload = () => {
        console.log(render.result)
        setImage(render.result)
      }
    }
  };

  const handleOk = async () => {
    try {
      // const {data} = await axios.post(`https://coderanilblog.onrender.com/api/v1/blog/delete/${blogid}`, {pass})
      const {data} = await axios.post(`http://localhost:8000/api/v1/blog/delete/${blogid}`, {pass})
      getBlog()
      console.log(data)
      if(data.success){
        setIsModalOpen(false);
      }
    } catch (error) {
      console.log(error)
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };



  const getBlog = async() => {
    try {
      // const {data} = await axios.get('https://coderanilblog.onrender.com/api/v1/blog/get');
      const {data} = await axios.get('http://localhost:8000/api/v1/blog/get');
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

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      setSubmitButton("Processing...")
      const {data} = await axios.post('http://localhost:8000/api/v1/blog/create', {title, description,image, video_url: videourl, pass})
      // const {data} = await axios.post('https://coderanilblog.onrender.com/api/v1/blog/create', {title, description,image, video_url: videourl, pass})
      if(data.success){
        setSubmitButton("Submit")
        setTitle("");
        setDescription("");
        setImage("");
        setVideourl('');
      }
      getBlog()
    } catch (error) {
      console.log(error)
      setSubmitButton("Submit")
    }
  }
  return (
    <>
    <DashbordNavbar/>
      <div className='dashbord-blog-main'>
        <div className='dashbord-blog-container'>
{/* Add New */}
          <form onSubmit={handleCreate} className='dashbord-blog-create-container'>
            <input type="text"
              className='dashbord-blog-input'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Enter Heading' />

            <input type="text"
              className='dashbord-blog-input'
              value={videourl}
              onChange={(e) => setVideourl(e.target.value)}
              placeholder='Enter Video Url' />

            <textarea type="text"
              className='dashbord-blog-input'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Enter Description' />

              <input className='dashbord-blog-input' type="file" onChange={handleImageChange} accept="image/*" />

              {image? <img className='dashbord-blog-preview-image' src={image} alt="blog pic" /> : 
              <div className='dashbord-blog-preview-image'>Preview Image</div>}

              

            <button className='homepage-button-hire' type='submit'>{submitButton}</button>
          </form>
{/* SHOW */}
        <div className='dashbord-blog-show'>
          {blog?.map((b) => (
            <div key={b._id} className='dashbord-blog-card'>
              <Link to={`/blog/${b._id}`}><img className='dashbord-blog-image' src={b.image} alt="blog" /></Link>
              <div className='dashbord-blog-buttom'>
                <div className='dashbord-blog-title'>{b?.title.slice(0,20)}...</div>
                <div onClick={() => {setIsModalOpen(true); setBlogid(b._id); setBlogtitle(b.title)}} className='dashbord-blog-delete'><MdDelete/></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      <Modal title="Delete Blog" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <h3>{blogrtitle}</h3>
      </Modal>
    </>
  )
}

export default BlogAdmin
