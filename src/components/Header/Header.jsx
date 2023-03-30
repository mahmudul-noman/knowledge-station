import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home"><h2>Knowledge Station</h2></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <img style={{width: '50px'}} className="rounded-circle" src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" />
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <hr />
        </div>
    );
};

export default Header;