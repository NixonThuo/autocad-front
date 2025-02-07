import React from 'react';
import cable from '../images/cable.png';

function DeviceButtonTop({ devicename, partnum, btnpos }) {

    const setDevicePos = (id) => {
        console.log("Adding button to cell");
        const pos = document.getElementById('position');
        if (pos) pos.value = id;
    };

    const setDevicePosBottom = (id) => {
        console.log("Adding button to cell");
        const pos = document.getElementById('positionbottom');
        if (pos) pos.value = id;
    };

    return (
        <p id="devicearrows">
            <img src={cable} className="mb-4" alt="cable" />
            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#deviceModal">
                {devicename} - {partnum}
            </button>
            <i className="fa-solid fa-horizontal-rule"></i>
            <a
                href="#"
                data-pos={btnpos}
                data-bs-toggle="modal"
                data-bs-target="#devicebottommodal"
                onClick={() => setDevicePosBottom(btnpos)}
                aria-label="Move device down"
            >
                <i className="fa-sharp fa-solid fa-arrow-down"></i>
            </a>
            <a
                href="#"
                data-pos={btnpos}
                data-bs-toggle="modal"
                data-bs-target="#devicerightmodal"
                onClick={() => setDevicePos(btnpos)}
                aria-label="Move device right"
            >
                <i className="fa-solid fa-arrow-right"></i>
            </a>

            <div className="modal fade" id="deviceModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deviceModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-primary">
                            <h1 className="modal-title fs-5 text-light" id="staticBackdropLabel">Choose Device Right</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h6>Details about {devicename} with part number {partnum}.</h6>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </p>
    );
}

export default DeviceButtonTop;
