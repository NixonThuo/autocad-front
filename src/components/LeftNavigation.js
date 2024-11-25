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
                                <button type="button" className="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#formmodal">
                                    Start Process
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="formmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-primary">
                            <h1 className="modal-title fs-5 text-light" id="staticBackdropLabel">Choose First Element</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <DeviceOptions />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => addButtonToCell(`1`)}>Place</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default LeftNavigation;
