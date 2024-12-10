/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import cable from '../images/cable.png'

function DeviceButtonTop({ devicename, partnum, btnpos }) {

    const setDevicePos = (id) => {
        console.log("adding button to cell");
        const pos = document.getElementById('position');
        pos.value = id;
    };

    const setDevicePosBottom = (id) => {
        console.log("adding button to cell");
        const pos = document.getElementById('positionbottom');
        pos.value = id;
    };

    return (
        <p id="devicearrows">
            <img src={cable} className='mb-4' alt="cable" />
            <button type="button" className="btn btn-secondary"><i id="devicename">{devicename} - {partnum}</i></button>
            <i className="fa-solid fa-horizontal-rule"></i>
            <a href='#' data-bs-toggle="modal" data-bs-target="#devicebottommodal" onClick={setDevicePosBottom(btnpos)}>
                <i className="fa-sharp fa-solid fa-arrow-down"></i>
            </a>
            <a href='#' data-bs-toggle="modal" data-bs-target="#devicerightmodal" onClick={setDevicePos(btnpos)}>
                <i className="fa-solid fa-arrow-right" ></i>
            </a>
        </p>
    );
}

export default DeviceButtonTop;