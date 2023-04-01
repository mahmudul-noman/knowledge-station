import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Content from '../Content/Content';
import Sidebar from '../Sidebar/Sidebar';
import { ToastContainer, toast } from 'react-toastify';

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

    // bookmarked count & title section show UI
    const [bookmarks, setBookmarks] = useState([]);
    
    const handleBookmarks = (blog) => {
        const newBookmark = [...bookmarks, blog];
        if (bookmarks.includes(blog)) {
            setBookmarks(newBookmark);
            toast('You Have Already Bookmarked This Blog'); // show toast message if data is already exist.
        } else {
            setBookmarks(newBookmark);
        }
    }

    return (
        <>
            <div className='main row py-5'>

                {/* Blog Section */}
                <div className="blog-container col-md-8 shadow">
                    {
                        blogs.map(blog => <Blog
                            key={blog.id}
                            blog={blog}
                            handleReadTime={handleReadTime}
                            handleBookmarks={handleBookmarks}
                        ></Blog>)
                    }
                </div>

                {/* Sidebar Section */}
                <div className="side-bar col-md-4 text-center">
                    <Sidebar
                        readTime={readTime}
                        bookmarks={bookmarks}
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