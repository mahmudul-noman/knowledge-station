import React from 'react';
import './Content.css';

const Content = () => {
    return (
        <div className='content-wrapper pb-5'>
            <h2 className='text-danger text-center qa-heading'>______Question & Answer Section______</h2>
            <div className="q-one mb-5 text-center p-3 shadow rounded">
                <h4 className='ques' style={{ fontWeight: '800', color: 'darkgreen' }}>Props vs State</h4>
                <div>
                    <table className='table table-bordered table-striped'>
                        <thead className='ques'>
                            <tr>
                                <th>Props</th>
                                <th>State</th>
                            </tr>
                        </thead>
                        <tbody className='ans'>
                            <tr>
                                <td>Props are read-only.</td>
                                <td>State is both read and write.</td>
                            </tr>
                            <tr>
                                <td>Props Immutable.</td>
                                <td>State mutable.</td>
                            </tr>
                            <tr>
                                <td>Props allow you to pass data from one component to other components as an argument.</td>
                                <td>State holds information about the components.</td>
                            </tr>
                            <tr>
                                <td>Props can be accessed by the child component.</td>
                                <td>State cannot be accessed by child components.</td>
                            </tr>
                            <tr>
                                <td>Props are used to communicate between components.</td>
                                <td>States can be used for rendering dynamic changes with the component.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="q-two shadow rounded border mb-4 p-4">
                <h4 className="ques">How does useState work?</h4>
                <p className="ans">useState is a hook in React that allows function components to have stateful logic. When you call useState, it returns a pair of values: the current state and a function to update the state. The initial state is passed as an argument to useState when the component first mounts. When the state is updated using the update function, React will re-render the component and update the UI with the new state. This is done asynchronously and in batches, so multiple state updates that occur within the same rendering cycle will be combined into a single update. You can also use destructuring to assign names to the state and update function to make them more descriptive. Finally, useState can also take a function as the initial state value, which can be useful for complex state initialization logic that depends on props or other state values.</p>
            </div>

            <div className="q-three shadow rounded border mb-4 p-4">
                <h4 className="ques">Purpose of useEffect other than fetching data.</h4>
                <p className="ans">The purpose of useEffect in React is to manage side effects in function components. Side effects can include updating the DOM, setting up event listeners, or fetching data from an external API. useEffect can also be used to clean up side effects when a component is unmounted. Additionally, it can be used to control the frequency at which a component is updated by specifying dependencies. Finally, useEffect can be used to trigger updates in child components when a parent component's state changes.</p>
            </div>

            <div className="q-four shadow rounded border p-4">
                <h4 className="ques">How Does React work?</h4>
                <p className="ans">React is a JavaScript library for building user interfaces. It enables developers to create reusable UI components and manage the state of those components. React uses a virtual DOM to optimize the updating process and minimize the number of expensive DOM manipulations. React components are defined as JavaScript classes or functions, and when the state of a component changes, React automatically re-renders the component and updates the UI. React also follows a one-way data flow architecture, where data flows down from parent components to child components through props, and events flow up from child components to parent components through callbacks.</p>
            </div>
        </div>
    );
};

export default Content;