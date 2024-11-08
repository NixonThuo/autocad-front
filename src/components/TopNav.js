import React from 'react';
import { Navbar } from 'react-bootstrap';

const TopNav = () => {
    return (
        <Navbar className="py-1 custom-topbar flex-nowrap">
            <Navbar.Brand href="#home" className="mx-3" style={{ color: "white" }}>Zippy</Navbar.Brand>
        </Navbar>
    );
};

export default TopNav;
