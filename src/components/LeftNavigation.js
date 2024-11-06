import React from 'react';
import { Navbar } from 'react-bootstrap';

const LeftNavigation = () => {
    return (
        <div className="d-flex">
            {/* Sidebar */}
            <div className="custom-sidebar" style={{ width: '200px', height: '100vh' }}>
                <nav className="flex-column p-3">
                    <a href="/home" className="nav-link">Home</a>
                    <a href="/profile" className="nav-link">Profile</a>
                    <a href="/settings" className="nav-link">Settings</a>
                    <a href="/help" className="nav-link">Help</a>
                </nav>
            </div>
        </div>
    );
};

export default LeftNavigation;
