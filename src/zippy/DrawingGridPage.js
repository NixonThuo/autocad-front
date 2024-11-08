// src/zippy/LandingPage.js

import React, { useState } from 'react';
import DeviceButton from '../components/DeviceButton';
import LeftNavigation from '../components/LeftNavigation';
import TopNav from '../components/TopNav';

function DrawingGridPage() {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const [selectedOption, setSelectedOption] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Selected option: ${selectedOption}`);
    };


    return (
        <div>

            <TopNav />
            <div className='row'>
                <div className='col col-2'>
                    <LeftNavigation />
                </div>
                <div className='col col-10 mt-2'>
                    <table className="table table-bordered border-primary" id="drawingtable">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th className="col">A</th>
                                <th className="col">B</th>
                                <th className="col">C</th>
                                <th className="col">D</th>
                                <th className="col">E</th>
                                <th className="col">F</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><DeviceButton /></td>
                                <td><DeviceButton /></td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Bootstrap Modal */}
            {showModal && (
                <div className="modal show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Choose Device</h5>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit} id="deviceform">
                                    <div className="mb-3">
                                        <label htmlFor="deviceDropdown" className="form-label">Choose Device Position</label>
                                        <select
                                            id="deviceDropdown"
                                            className="form-select"
                                            value={selectedOption}
                                            onChange={(e) => setSelectedOption(e.target.value)}
                                        >
                                            <option value="">Select an option</option>
                                            <option value="add_device_bottom">Add Device Bottom</option>
                                            <option value="add_device_right">Add Device Right</option>
                                        </select>
                                    </div>


                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                                    Close
                                </button>
                                <button type="submit" className="btn btn-primary" form="deviceform">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal backdrop */}
            {showModal && <div className="modal-backdrop fade show"></div>}

        </div>
    );
}

export default DrawingGridPage;