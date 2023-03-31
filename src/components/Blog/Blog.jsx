import React from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import './Blog.css';

const Blog = ({ blog, handleReadTime, handleBookmark }) => {
    return (
        <div>
            <Card className='mb-5'>
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

                        <div className="bookmark-info">
                            {/* <p>{blog.time} min read &nbsp; <a onClick={() => handleBookmark(blog.bookmark)} href="#"> <FontAwesomeIcon icon={faBookmark} /></a></p> */}
                            <p>{blog.time} min read &nbsp;
                            <a style={{cursor: 'pointer'}} href="#"><img src="././src/assets/Frame.png" alt="" /></a>
                            </p>
                        </div>
                    </div>
                    <h3 className='card-title'>{blog.title}</h3>
                    <Card.Text>
                        <p className='hashtag'>#beginners #programming</p>
                    </Card.Text>
                    <button onClick={() => handleReadTime(blog.time)} className='btn btn-link p-0 m-0 mark-btn'>Mark as read</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;