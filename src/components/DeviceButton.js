import React from 'react';

function DeviceButton() {

    return (
        <p id="devicearrows" className="mr-0">
            <button type="button" className="btn btn-secondary"><text id="devicename">Power Source</text></button>
            <i class="fa-solid fa-horizontal-rule"></i>
            <i class="fa-solid fa-horizontal-rule"></i>
            {/*
            <i class="fa-solid fa-arrow-up"></i>
            <i class="fa-solid fa-arrow-down"></i>
            <i class="fa-sharp fa-solid fa-arrow-right"></i>*/}
            <text>
                <i class="fa-regular fa-arrows-up-down-left-right"></i>
            </text>
        </p>
    );
}

export default DeviceButton;