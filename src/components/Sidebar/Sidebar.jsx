import React, { useEffect, useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ readTime, bookmarks }) => {

    const [time, setTime] = useState(readTime);

    useEffect(() => {
        const getReadTimeFromStorage = localStorage.getItem("readTime");
        setTime(getReadTimeFromStorage);
    }, [readTime])

    return (
        <>
            <div className="top-card card mb-4 p-4 text-primary border-primary">
                <h3>Spent time on read: {time ? time : 0} min</h3>
            </div>
            <div className='card-wrapper shadow text-start p-3'>
                <div className="bottom-card">
                    <div className="bookmark-blog mb-2 p-2">
                        <h3>Bookmarked Blogs: {bookmarks.length}</h3>
                    </div>
                    <div className="bookmark-info">
                        {
                            bookmarks.map(bookmark => <h5 className='bookmarks-h5 shadow p-4 rounded-2'
                                key={bookmark.id}
                            >{bookmark.title}</h5>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;