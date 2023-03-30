import React from 'react';
import Blog from '../Blog/Blog';

const Home = () => {
    return (
        <div className='main row py-5'>

            {/* Blog Section */}
            <div className="blog-container col-md-8">
                <Blog></Blog>
            </div>

            {/* Sidebar Section */}
            <div className="side-bar col-md-4 text-center">
                <h1>This is Side Bar</h1>
            </div>
        </div>
    );
};

export default Home;