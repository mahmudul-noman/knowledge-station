import React from 'react';
import Card from 'react-bootstrap/Card';
import './Blog.css';

const Blog = ({ blog, handleReadTime, handleBookmarks }) => {

    return (
        <div>
            <Card className='mb-5 border-0 border-bottom'>
                <Card.Img variant="top" src={blog.banner} />
                <Card.Body>
                    <div className="author-bookmark d-flex justify-content-between align-items-center">
                        <div className="author-info d-flex align-items-center">
                            <div className="author-img me-2">
                                <img style={{ width: '50px', height: '50px' }} className="rounded-circle" src={blog.author} alt="" />
                            </div>
                            <div className="author-text">
                                <h3>{blog.name}</h3>
                                <p>{blog.publish_date}</p>
                            </div>
                        </div>

                        <div className="bookmark-info d-flex align-items-start">
                            <p>{blog.time} min read</p>
                            {/* <button onClick={() => { handleBookmarks(blog) }} style={{ cursor: 'pointer', background:'none' }} href="#" className='border-0'><img src="././src/assets/Frame.png" alt="" /></button> */}
                            <button onClick={() => { handleBookmarks(blog) }} style={{ cursor: 'pointer', background:'none' }} href="#" className='border-0'><img src="Frame.png" alt="" /></button>
                        </div>
                    </div>
                    <h3 className='card-title'>{blog.title}</h3>
                    <p className='hashtag'>#beginners &nbsp; #programming</p>
                    <button onClick={() => handleReadTime(blog.time)} className='btn btn-link p-0 m-0 mark-btn'>Mark as read</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;