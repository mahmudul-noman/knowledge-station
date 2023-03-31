import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Content from '../Content/Content';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <>
            <div className='main row py-5'>

                {/* Blog Section */}
                <div className="blog-container col-md-8">
                    {
                        blogs.map(blog => <Blog
                            key={blog.id}
                            blog={blog}
                        ></Blog>)
                    }
                </div>

                {/* Sidebar Section */}
                <div className="side-bar col-md-4 text-center">
                    <Sidebar></Sidebar>
                </div>
            </div>

            {/* Question - Answer Section */}
            <div className="content">
                <Content></Content>
            </div>
        </>
    );
};

export default Home;