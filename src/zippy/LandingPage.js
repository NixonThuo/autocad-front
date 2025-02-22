// src/zippy/LandingPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import ZippyHeaderLanding from '../components/ZippyHeaderLanding';

function LandingPage() {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log("Clicked on Start button");
        navigate("/draw");
    };

    return (
        <>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
                <ZippyHeaderLanding />
                <p>Create your CAD designs fast!</p>
                <button className="btn btn-primary" id="loginbutton" onClick={handleClick}>Start</button>
            </div>
        </>
    );
}

export default LandingPage;
