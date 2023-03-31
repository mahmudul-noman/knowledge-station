import React from 'react';

const Content = () => {
    return (
        <div className='content-wrapper pb-5'>
            <h2 className='text-danger text-center'>______Question & Answer Section______</h2>
            <div className="q-one border border-success mb-5 text-center p-3">
                <h4 className='ques'>Props vs State</h4>
                <div>
                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr>
                                <th>Props</th>
                                <th>State</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, consectetur?</td>
                                <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, consectetur?</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div className="q-two border mb-2 p-4">
                <h4 className="ques">How does reac work?</h4>
                <p className="ans">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ipsum aut error, rerum perspiciatis accusantium iste odio iure necessitatibus ad officia excepturi maxime quo repellat, porro repellendus natus placeat. Optio, nisi? Consequuntur debitis repudiandae odio, exercitationem dolorum maiores? Sed deleniti sint aperiam nobis atque dolor temporibus consectetur quidem illum accusantium.</p>
            </div>
            
            <div className="q-three border mb-2 p-4">
                <h4 className="ques">Purpose of useEffect other than fetching data.</h4>
                <p className="ans">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ipsum aut error, rerum perspiciatis accusantium iste odio iure necessitatibus ad officia excepturi maxime quo repellat, porro repellendus natus placeat. Optio, nisi? Consequuntur debitis repudiandae odio, exercitationem dolorum maiores? Sed deleniti sint aperiam nobis atque dolor temporibus consectetur quidem illum accusantium.</p>
            </div>
            
            <div className="q-four border p-4">
                <h4 className="ques">How Does React work?</h4>
                <p className="ans">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ipsum aut error, rerum perspiciatis accusantium iste odio iure necessitatibus ad officia excepturi maxime quo repellat, porro repellendus natus placeat. Optio, nisi? Consequuntur debitis repudiandae odio, exercitationem dolorum maiores? Sed deleniti sint aperiam nobis atque dolor temporibus consectetur quidem illum accusantium.</p>
            </div>
        </div>
    );
};

export default Content;