import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Content from '../Content/Content';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {

    // fetch data for all blogs
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    // Spent on read time: set data in localStorage & getData in UI
    const [readTime, setReadTime] = useState(0);
    const handleReadTime = (time) => {
        const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
        if (previousReadTime) {
            const sum = previousReadTime + time;
            console.log(sum);
            localStorage.setItem("readTime", sum);
            setReadTime(sum);
        } else {
            localStorage.setItem("readTime", time);
            setReadTime(time);
        }
    };


    return (
        <>
            <div className='main row py-5'>

                {/* Blog Section */}
                <div className="blog-container col-md-8">
                    {
                        blogs.map(blog => <Blog
                            key={blog.id}
                            blog={blog}
                            handleReadTime={handleReadTime}
                        ></Blog>)
                    }
                </div>

                {/* Sidebar Section */}
                <div className="side-bar col-md-4 text-center">
                    <Sidebar
                        readTime={readTime}
                    ></Sidebar>
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