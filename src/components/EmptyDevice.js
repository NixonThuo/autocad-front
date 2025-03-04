/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function EmptyDevice({ id }) {  // Destructure id from props

    const setDeviceModalPosition = (id) => {
        const pos = document.getElementById('devicemodalposition');
        if (pos) pos.value = id;
    };

    return (
        <p id="sourceicon">
            <a href='#' data-bs-toggle="modal" data-bs-target="#deviceModal" style={{ width: '150px' }} onClick={() => setDeviceModalPosition(id)}>
                <i className="fa-thin fa-plus"></i>
            </a>
        </p>
    );
}

export default EmptyDevice;
