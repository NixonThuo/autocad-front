/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function SourceDevice() {

    const setSourcePos = (id) => {
        console.log("adding button to cell");
        const pos = document.getElementById('sourceposition');
        console.log(pos);
        pos.value = id;
    };

    return (
        <p id="sourceicon">
            <a href='#' data-bs-toggle="modal" data-bs-target="#devicerightmodal" onClick={setSourcePos("1")}>
                <i class="fa-thin fa-plus"></i>
            </a>
        </p>
    );
}

export default SourceDevice;