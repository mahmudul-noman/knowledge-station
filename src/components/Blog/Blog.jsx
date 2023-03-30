import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1198&q=80" />
                <Card.Body>
                    <div className="author-bookmark d-flex justify-content-between">
                        <div className="author-info d-flex align-items-center">
                            <div className="author-img me-2">
                                <img style={{ width: '50px' }} className="rounded-circle" src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="" />
                            </div>
                            <div className="author-text">
                                <h3>Mr. Raju</h3>
                                <p>Mar 14 (4 Days ago)</p>
                            </div>
                        </div>

                        <div className="bookmark-info">
                            <p>05 min read <FontAwesomeIcon icon={faBookmark} /></p>
                            {/* <a href=""><FontAwesomeIcon icon={faBookmark} /></a> */}
                        </div>
                    </div>
                    <h1 className='card-title'>How to get your first job as a self-taught programmer</h1>
                    <Card.Text>
                        <p>#beginners #programming</p>
                    </Card.Text>
                    <button className='btn btn-link p-0 m-0'>Mark as read</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;