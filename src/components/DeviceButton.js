import React from 'react';

function DeviceButton({ devicename, partnum }) {

    return (
        <p id="devicearrows">
            <button type="button" className="btn btn-secondary"><i id="devicename">{devicename} - {partnum}</i></button>
            <i className="fa-solid fa-horizontal-rule"></i>
            <i class="fa-regular fa-circle"></i>
            <i className="fa-solid fa-horizontal-rule"></i>
            <i className="fa-solid fa-arrows-up-down"></i>
            <i className="fa-solid fa-arrow-right"></i>
        </p>
    );
}

export default DeviceButton;