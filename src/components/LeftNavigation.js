import React, { createElement } from 'react';
import DeviceOptions from './DeviceOptions';
import DeviceButtonStart from '../components/DeviceButtonStart';
import ReactDOM from 'react-dom';  // Required for portal rendering

const LeftNavigation = () => {

    // Function to add a button to a specific row
    const addButtonToCell = (id) => {
        console.log("adding button to cell");
        const cell = document.getElementById(id);
        console.log(cell);
        console.log(document.getElementById("deviceslist").value);
        const sel = document.getElementById("deviceslist");
        const partnum = sel.options[sel.selectedIndex].getAttribute("data-partnum");
        console.log(partnum);
        const partdesc = sel.options[sel.selectedIndex].getAttribute("data-desc");
        console.log(partdesc);
        ReactDOM.render(
            <DeviceButtonStart devicename={partnum} partnum={partdesc} btnpos={id} />,
            cell
        );
    };

    return (
        <>
            <div className="d-flex">
                {/* Sidebar */}
                <div className="custom-sidebar" style={{ width: '200px', height: '100vh' }}>
                    <div className='row'>
                        <div className='col col-12'>
                            <div className="d-grid gap-2">
                                <button type="button" className="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#settingsmodal">
                                    Settings
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default LeftNavigation;
