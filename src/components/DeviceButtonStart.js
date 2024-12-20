/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function DeviceButtonStart({ devicename, partnum, btnpos }) {

    const setDevicePos = (id) => {
        console.log("adding button to cell");
        const pos = document.getElementById('position');
        pos.value = id;
    };

    return (
        <p id="devicearrows" className='mt-5'>
            <button type="button" className="btn btn-secondary"><i id="devicename">{devicename} - {partnum}</i></button>
            <i className="fa-solid fa-horizontal-rule"></i>
            <i className="fa-sharp fa-solid fa-arrow-down"></i>
            <a href='#' data-bs-toggle="modal" data-bs-target="#devicerightmodal" onClick={setDevicePos(btnpos)}>
                <i className="fa-solid fa-arrow-right" ></i>
            </a>
        </p>
    );
}

export default DeviceButtonStart;