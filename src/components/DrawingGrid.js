import React, { useState } from "react";
import { useEffect } from "react";
import DeviceOptionsGrid from './DeviceOptionsGrid';
import DeviceButtonTop from './DeviceButtonTop';
import SourceDevice from './SourceDevice'
import ReactDOM from 'react-dom';
import HorizontalLine from './HorizontalLine';
import VerticalLine from "./VerticleLine";


function DrawingGrid() {
    let rows = 7;
    let cols = 7;

    const devicemap = {};

    let btndwnlog = {};

    console.log("alphabet list");
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    console.log(alphabet);
    // Function to add a button to a specific row
    const addButtonRight = (id) => {
        const table = document.getElementById("drawingtable");
        const cols = table.rows[0].cells.length;
        console.log("passed id");
        console.log(id);
        console.log("adding button to cell");
        const number = id.match(/^\d+/)?.[0] || ''; // Extract the leading numbers
        const letter = id.match(/[A-Za-z]+$/)?.[0] || ''; // Extract the trailing letters
        const nextnum = parseInt(number);
        const nextLetter = alphabet[alphabet.indexOf(letter) + 1];
        console.log("index of next letter");
        console.log(alphabet.indexOf(nextLetter));
        console.log("current cols");
        console.log(cols);
        if (alphabet.indexOf(nextLetter) + 2 > cols) {
            addColumn();
        }
        const nextCellId = String(nextnum) + String(nextLetter);
        console.log("next cell id: " + nextCellId);
        const cell = document.getElementById(String(nextCellId));
        console.log(cell);
        const form = document.getElementById("rightmodalform");
        const sel = form.querySelector("#deviceslistgrid");
        const partnum = sel.options[sel.selectedIndex].getAttribute("data-partnum");
        console.log(partnum);
        const partdesc = sel.options[sel.selectedIndex].getAttribute("data-desc");
        console.log(partdesc);
        // Update state instead of using ReactDOM.render
        setDeviceMap(prev => ({
            ...prev,
            [nextCellId]: { devicename: partnum, partdesc, btnpos: nextCellId }
        }));
        devicemap[nextCellId] = partnum;
        console.log("devicemap");
        console.log(devicemap);
    };

    const replaceButton = (id) => {
        console.log("replacing button");
        const cell = document.getElementById(String(id));
        const form = document.getElementById("replacedeviceform");
        const sel = form.querySelector("#deviceslistgrid");
        const partnum = sel.options[sel.selectedIndex].getAttribute("data-partnum");
        console.log(partnum);
        const partdesc = sel.options[sel.selectedIndex].getAttribute("data-desc");
        console.log(partdesc);
        ReactDOM.render(
            <DeviceButtonTop devicename={partnum} partnum={partdesc} btnpos={id} />,
            cell
        );
        devicemap[id] = partnum;
        console.log("devicemap");
        console.log(devicemap);
    };

    const deleteButton = (id) => {
        console.log("deleting button");
        const cell = document.getElementById(String(id));
        cell.innerHTML = "";
        delete devicemap[id];
        console.log("devicemap");
        console.log(devicemap);
    };

    // Function to add a button to a specific row
    const addButtonRightFromSource = (id) => {
        console.log("passed id");
        console.log(id);
        console.log("adding button to cell");
        const number = id.match(/^\d+/)?.[0] || ''; // Extract the leading numbers
        const letter = id.match(/[A-Za-z]+$/)?.[0] || ''; // Extract the trailing letters
        const nextnum = parseInt(number);
        const nextLetter = alphabet[alphabet.indexOf(letter)];
        const nextCellId = String(nextnum) + String(nextLetter);
        console.log("next cell id: " + nextCellId);
        const cell = document.getElementById(String(nextCellId));
        console.log(cell);
        const form = document.getElementById("devicesourcemodalform");
        const sel = form.querySelector("#deviceslistgrid");
        const partnum = sel.options[sel.selectedIndex].getAttribute("data-partnum");
        console.log(partnum);
        const partdesc = sel.options[sel.selectedIndex].getAttribute("data-desc");
        console.log(partdesc);
        ReactDOM.render(
            <DeviceButtonTop devicename={partnum} partnum={partdesc} btnpos={nextCellId} />,
            cell
        );
        devicemap[nextCellId] = partnum;
        console.log("devicemap");
        console.log(devicemap);
    };


    const addColumn = () => {
        const table = document.getElementById("drawingtable");
        const rows = table.rows.length;
        const cols = table.rows[0].cells.length;

        // Update header row
        const headerRow = table.rows[0];
        const headerCell = document.createElement('th');
        const letter = String.fromCharCode(65 + ((cols - 1) % 26));
        headerCell.textContent = String.fromCharCode(65 + ((cols - 1) % 26));
        headerRow.appendChild(headerCell);

        for (let i = 1; i < rows; i++) {
            const cell = document.createElement('td');
            cell.id = `${i}${letter}`;
            cell.style.borderBottom = '1px solid #dee2e6';
            table.rows[i].appendChild(cell);
        }
    }

    const addRow = () => {
        const table = document.getElementById("drawingtable");
        const rows = table.rows.length;
        const cols = table.rows[0].cells.length;

        const newRow = document.createElement('tr');

        // Add row header
        const rowHeaderCell = document.createElement('th');
        rowHeaderCell.textContent = rows; // Row number
        rowHeaderCell.style.textAlign = 'center';

        newRow.appendChild(rowHeaderCell);

        for (let j = 1; j < cols; j++) {
            const letter = String.fromCharCode(65 + ((j - 1) % 26));
            const cell = document.createElement('td');
            cell.id = `${rows}${letter}`;
            cell.style.borderBottom = '1px solid #dee2e6';
            newRow.appendChild(cell);
        }

        table.appendChild(newRow);
    }


    // Function to add a button to a specific row
    const addButtonBottom = (id) => {
        const table = document.getElementById("drawingtable");
        const rows = table.rows.length;
        console.log("rows:");
        console.log(rows);
        console.log("passed id");
        console.log(id);
        console.log("adding button to cell");

        if (id in btndwnlog) {
            console.log("button already added in logs");
        } else {
            btndwnlog[id] = 0;
        }

        const number = id.match(/^\d+/)?.[0] || ''; // Extract the leading numbers
        const letter = id.match(/[A-Za-z]+$/)?.[0] || ''; // Extract the trailing letters
        const nextLetter = alphabet[alphabet.indexOf(letter) + 1];
        const nextnum = parseInt(number) + parseInt(1) + parseInt(btndwnlog[id]);
        if (nextnum > rows - 1) {
            addRow()
        }
        const nextCellId = String(nextnum) + String(nextLetter);
        console.log("next cell id: " + nextCellId);
        const cell = document.getElementById(String(nextCellId));
        console.log(cell);
        const form = document.getElementById("bottommodalform");
        const sel = form.querySelector("#deviceslistgrid");
        const partnum = sel.options[sel.selectedIndex].getAttribute("data-partnum");
        console.log(partnum);
        const partdesc = sel.options[sel.selectedIndex].getAttribute("data-desc");
        console.log(partdesc);
        btndwnlog[id] = parseInt(btndwnlog[id]) + 1;
        ReactDOM.render(
            <DeviceButtonTop devicename={partnum} partnum={partdesc} btnpos={nextCellId} />,
            cell
        );
        devicemap[nextCellId] = partnum;
        console.log("devicemap");
        console.log(devicemap);
    };

    useEffect(() => {
        console.log("finished rendering");

        const cell = document.getElementById(String("1A"));
        ReactDOM.render(
            <SourceDevice />,
            cell
        );

    });

    const terminateLine = (id) => {
        const linedirection = document.querySelector('input[name="deviceaction"]:checked').value;
        if (linedirection === 'horizontal') {
            terminateHorizontal(id);
        }
        if (linedirection === 'vertical') {
            terminateVertical(id);
        }
    };

    const terminateHorizontal = (id) => {
        console.log("Terminating horizontal line");
        console.log(id);
        const number = id.match(/^\d+/)?.[0] || ''; // Extract the leading numbers
        const letter = id.match(/[A-Za-z]+$/)?.[0] || ''; // Extract the trailing letters
        const nextnum = parseInt(number);
        const currentLetterNo = alphabet.indexOf(letter);
        for (let i = currentLetterNo + 1; i < cols; i++) {
            const nextLetter = alphabet[i];
            const nextCellId = String(nextnum) + String(nextLetter);
            console.log("next cell id: " + nextCellId);

            if (nextCellId in devicemap) {
                console.log("Device already exists in the cell");
                break;
            }

            const cell = document.getElementById(String(nextCellId));
            ReactDOM.render(
                <HorizontalLine />,
                cell
            );

        }
    }

    const terminateVertical = (id) => {
        console.log("Terminating vertical line");
        console.log(id);
        const number = id.match(/^\d+/)?.[0] || ''; // Extract the leading numbers
        const letter = id.match(/[A-Za-z]+$/)?.[0] || ''; // Extract the trailing letters
        const nextnum = parseInt(number) + 1;
        for (let i = nextnum; i < rows; i++) {
            const nextCellId = String(i) + String(letter);
            console.log("next cell id: " + nextCellId);
            const cell = document.getElementById(String(nextCellId));
            cell.style = "text-align: center; vertical-align: middle;";
            ReactDOM.render(
                <VerticalLine />,
                cell
            );
        }
    };

    const terminateUp = (id) => {
        console.log("Terminating vertical line");
        console.log(id);
        const number = id.match(/^\d+/)?.[0] || ''; // Extract the leading numbers
        const letter = id.match(/[A-Za-z]+$/)?.[0] || ''; // Extract the trailing letters
        const nextnum = parseInt(number) - 1;
        console.log("nextnum: " + nextnum);
        for (let i = nextnum; i > 0; i--) {
            const nextCellId = String(i) + String(letter);
            console.log("next cell id: " + nextCellId);

            if (nextCellId in devicemap) {
                console.log("Device already exists in the cell");
                break;
            }

            const cell = document.getElementById(String(nextCellId));
            cell.style = "text-align: center; vertical-align: middle;";
            ReactDOM.unmountComponentAtNode(cell);
            ReactDOM.render(
                <VerticalLine />,
                cell
            );
        }
    };

    return (
        <div className='col col-10 mt-2 '>
            <table className="table overflow-scroll" id="drawingtable" name="drawingtable">
                <thead>
                    <tr>
                        <th>#</th>
                        <th className="col">A</th>
                        <th className="col">B</th>
                        <th className="col">C</th>
                        <th className="col">D</th>
                        <th className="col">E</th>
                        <th className="col">F</th>
                        <th className="col">G</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td id="1A">&nbsp;</td>
                        <td id="1B">&nbsp;</td>
                        <td id="1C">&nbsp;</td>
                        <td id="1D">&nbsp;</td>
                        <td id="1E">&nbsp;</td>
                        <td id="1F">&nbsp;</td>
                        <td id="1G">&nbsp;</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td id="2A">&nbsp;</td>
                        <td id="2B">&nbsp;</td>
                        <td id="2C">&nbsp;</td>
                        <td id="2D">&nbsp;</td>
                        <td id="2E">&nbsp;</td>
                        <td id="2F">&nbsp;</td>
                        <td id="2G">&nbsp;</td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td id="3A">&nbsp;</td>
                        <td id="3B">&nbsp;</td>
                        <td id="3C">&nbsp;</td>
                        <td id="3D">&nbsp;</td>
                        <td id="3E">&nbsp;</td>
                        <td id="3F">&nbsp;</td>
                        <td id="3G">&nbsp;</td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td id="4A">&nbsp;</td>
                        <td id="4B">&nbsp;</td>
                        <td id="4C">&nbsp;</td>
                        <td id="4D">&nbsp;</td>
                        <td id="4E">&nbsp;</td>
                        <td id="4F">&nbsp;</td>
                        <td id="4G">&nbsp;</td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td id="5A">&nbsp;</td>
                        <td id="5B">&nbsp;</td>
                        <td id="5C">&nbsp;</td>
                        <td id="5D">&nbsp;</td>
                        <td id="5E">&nbsp;</td>
                        <td id="5F">&nbsp;</td>
                        <td id="5G">&nbsp;</td>
                    </tr>
                    <tr>
                        <th>6</th>
                        <td id="6A">&nbsp;</td>
                        <td id="6B">&nbsp;</td>
                        <td id="6C">&nbsp;</td>
                        <td id="6D">&nbsp;</td>
                        <td id="6E">&nbsp;</td>
                        <td id="6F">&nbsp;</td>
                        <td id="6G">&nbsp;</td>
                    </tr>
                    <tr>
                        <th>7</th>
                        <td id="7A">&nbsp;</td>
                        <td id="7B">&nbsp;</td>
                        <td id="7C">&nbsp;</td>
                        <td id="7D">&nbsp;</td>
                        <td id="7E">&nbsp;</td>
                        <td id="7F">&nbsp;</td>
                        <td id="7G">&nbsp;</td>
                    </tr>
                </tbody>
            </table>


            <div className="modal fade" id="devicetopmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deviceTopModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-primary">
                            <h1 className="modal-title fs-5 text-light" id="deviceTopModalLabel">Up Device Options</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="topmodalform">
                                <input type='hidden' name='positiontop' id='positiontop' />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { const position = document.getElementById('positiontop').value; terminateUp(position) }}>Terminate Up</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="devicerightmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-primary">
                            <h1 className="modal-title fs-5 text-light" id="staticBackdropLabel">Choose Device Right</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="rightmodalform">
                                <input type='hidden' name='position' id='position' />
                                <DeviceOptionsGrid />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { const position = document.getElementById('position').value; addButtonRight(position) }}>Place</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { const position = document.getElementById('position').value; terminateHorizontal(position) }}>Terminate Right</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="devicebottommodal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="devicebottommodalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-primary">
                            <h1 className="modal-title fs-5 text-light" id="devicebottommodalLabel">Choose Device Bottom</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="bottommodalform">
                                <input type='hidden' name='positionbottom' id='positionbottom' />
                                <DeviceOptionsGrid />
                            </form>
                        </div>
                        <div className="modal-footer">

                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { const position = document.getElementById('positionbottom').value; addButtonBottom(position) }}>Place</button>

                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="devicesourcemodal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="devicesourcemodalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-primary">
                            <h1 className="modal-title fs-5 text-light" id="devicesourcemodalLabel">Choose Device Right</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="devicesourcemodalform">
                                <input type='hidden' name='sourceposition' id='sourceposition' />
                                <DeviceOptionsGrid />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { const position = document.getElementById('sourceposition').value; addButtonRightFromSource(position) }}>Place</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="deviceModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deviceModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-primary">
                            <h1 className="modal-title fs-5 text-light" id="staticBackdropLabel">Device Actions</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className='col-12'>
                                    <form>
                                        <form id="replacedeviceform">
                                            <input type='hidden' name='devicemodalposition' id='devicemodalposition' />
                                            <DeviceOptionsGrid />
                                        </form>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { const position = document.getElementById('devicemodalposition').value; replaceButton(position) }}>Replace</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => { const position = document.getElementById('devicemodalposition').value; deleteButton(position) }}>Delete Device</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DrawingGrid;