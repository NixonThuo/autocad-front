import React, { useState } from "react";
import cable from '../images/cable.png';
import HorizontalLineSmall from "./HorizontalLineSmall";

function CableHorizontal({ devicename, partnum, btnpos }) {

    console.log("DeviceButtonTop: ", devicename, partnum, btnpos);

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

    const setDevicePosTop = (id) => {
        console.log("Adding button to cell");
        const pos = document.getElementById('positiontop');
        if (pos) pos.value = id;
    };

    const setDeviceModalPosition = (id) => {
        const pos = document.getElementById('devicemodalposition');
        if (pos) pos.value = id;
    };


    return (
        <p id="devicearrows">
            <img src={cable} className="mb-4" alt="cable" />
            <a type="button" data-bs-toggle="modal" data-bs-target="#deviceModal" style={{ width: '80px' }} onClick={() => setDeviceModalPosition(btnpos)}>
                <i className="fa-solid fa-horizontal-rule"> </i>
                <i className="fa-solid fa-horizontal-rule"> </i>
            </a>
            <a
                href="#"
                data-pos={btnpos}
                data-bs-toggle="modal"
                data-bs-target="#devicetopmodal"
                onClick={() => setDevicePosTop(btnpos)}
                aria-label="Move device down"
            >
                <i className="fa-sharp fa-solid fa-arrow-up"></i>
            </a>
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

        </p>
    );
}

export default CableHorizontal;
