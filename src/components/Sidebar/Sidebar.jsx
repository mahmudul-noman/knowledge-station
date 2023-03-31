import React, { useEffect, useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ readTime }) => {

    const [time, setTime] = useState(readTime);

    useEffect(() => {
        const getReadTimeFromStorage = localStorage.getItem("readTime");
        setTime(getReadTimeFromStorage);
    }, [readTime])




    return (
        <>
            <div className="top-card card mb-2 p-4 text-primary border-primary">
                <h3>Spent time on read: {time ? time : 0} Min</h3>
            </div>
            <div className='card-wrapper shadow text-start p-3'>
                <div className="bottom-card">
                    <div className="bookmark-blog mb-2 p-2">
                        <h3>Bookmarked Blogs: 10</h3>
                    </div>
                    <div className="bookmark-info shadow p-4 rounded-2">
                        <h5>Introducing Zero-Bundle-Size React Server Components</h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;