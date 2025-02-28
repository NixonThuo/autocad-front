import React, { useState, useEffect } from "react";
import DeviceOptionsGrid from './DeviceOptionsGrid';
import DeviceButtonTop from './DeviceButtonTop';
import SourceDevice from './SourceDevice';
import ReactDOM from "react-dom/client";
import HorizontalLine from './HorizontalLine';
import VerticalLine from "./VerticleLine";

function DrawingGrid() {
    // Use state to store the dynamic number of rows and columns
    const [rows, setRows] = useState(7);
    const [cols, setCols] = useState(7);

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // These objects still hold device/line info as before
    const devicemap = {};
    let btndwnlog = {};

    // Updated addColumn and addRow functions update state
    const addColumn = () => {
        setCols(prevCols => prevCols + 1);
    };

    const addRow = () => {
        setRows(prevRows => prevRows + 1);
    };

    // Helper to generate a cell's id (e.g., "1A", "2B")
    const getCellId = (row, col) => {
        const letter = alphabet[col - 1] || String.fromCharCode(65 + ((col - 1) % 26));
        return `${row}${letter}`;
    };

    const addButtonRight = (id) => {
        const table = document.getElementById("drawingtable");
        const currentCols = table.rows[0].cells.length;
        console.log("passed id", id);
        const number = id.match(/^\d+/)?.[0] || '';
        const letter = id.match(/[A-Za-z]+$/)?.[0] || '';
        const nextnum = parseInt(number);
        const nextLetter = String.fromCharCode(letter.charCodeAt(0) + 1);
        console.log("next letter", nextLetter);
        if (alphabet.indexOf(nextLetter) + 2 > currentCols) {
            addColumn();
        }
        const nextCellId = String(nextnum) + nextLetter;
        console.log("next cell id: " + nextCellId);
        const cell = document.getElementById(nextCellId);
        console.log(cell);
        const form = document.getElementById("rightmodalform");
        const sel = form.querySelector("#deviceslistgrid");
        const partnum = sel.options[sel.selectedIndex].getAttribute("data-partnum");
        console.log(partnum);
        const partdesc = sel.options[sel.selectedIndex].getAttribute("data-desc");
        console.log(partdesc);
        const root = ReactDOM.createRoot(cell);
        root.render(
            <DeviceButtonTop devicename={partnum} partnum={partdesc} btnpos={nextCellId} />
        );
        devicemap[nextCellId] = partnum;
        console.log("devicemap", devicemap);
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
        const root = ReactDOM.createRoot(cell);
        root.render(
            <DeviceButtonTop devicename={partnum} partnum={partdesc} btnpos={id} />
        );
        devicemap[id] = partnum;
        console.log("devicemap", devicemap);
    };

    const deleteButton = (id) => {
        console.log("deleting button");
        const cell = document.getElementById(String(id));
        cell.innerHTML = "";
        delete devicemap[id];
        console.log("devicemap", devicemap);
    };

    const addButtonRightFromSource = (id) => {
        console.log("passed id", id);
        const number = id.match(/^\d+/)?.[0] || '';
        const letter = id.match(/[A-Za-z]+$/)?.[0] || '';
        const nextnum = parseInt(number);
        // Same letter for source placement
        const nextLetter = letter;
        const nextCellId = String(nextnum) + nextLetter;
        console.log("next cell id: " + nextCellId);
        const cell = document.getElementById(String(nextCellId));
        const form = document.getElementById("devicesourcemodalform");
        const sel = form.querySelector("#deviceslistgrid");
        const partnum = sel.options[sel.selectedIndex].getAttribute("data-partnum");
        const partdesc = sel.options[sel.selectedIndex].getAttribute("data-desc");
        const root = ReactDOM.createRoot(cell);
        root.render(
            <DeviceButtonTop devicename={partnum} partnum={partdesc} btnpos={nextCellId} />
        );
        devicemap[nextCellId] = partnum;
        console.log("devicemap", devicemap);
    };

    const addButtonBottom = (id) => {
        const table = document.getElementById("drawingtable");
        const totalRows = table.rows.length;
        console.log("rows:", totalRows);
        console.log("passed id", id);
        if (id in btndwnlog) {
            console.log("button already added in logs");
        } else {
            btndwnlog[id] = 0;
        }
        const number = id.match(/^\d+/)?.[0] || '';
        const letter = id.match(/[A-Za-z]+$/)?.[0] || '';
        const nextLetter = String.fromCharCode(letter.charCodeAt(0) + 1);
        const nextnum = parseInt(number) + 1 + (btndwnlog[id] || 0);
        if (nextnum > totalRows - 1) {
            addRow();
        }
        const nextCellId = String(nextnum) + nextLetter;
        console.log("next cell id: " + nextCellId);
        const cell = document.getElementById(String(nextCellId));
        const form = document.getElementById("bottommodalform");
        const sel = form.querySelector("#deviceslistgrid");
        const partnum = sel.options[sel.selectedIndex].getAttribute("data-partnum");
        const partdesc = sel.options[sel.selectedIndex].getAttribute("data-desc");
        btndwnlog[id] = parseInt(btndwnlog[id]) + 1;
        const root = ReactDOM.createRoot(cell);
        root.render(
            <DeviceButtonTop devicename={partnum} partnum={partdesc} btnpos={nextCellId} />
        );
        devicemap[nextCellId] = partnum;
        console.log("devicemap", devicemap);
    };

    useEffect(() => {
        console.log("finished rendering");
        const cell = document.getElementById("1A");
        if (cell) {
            const root = ReactDOM.createRoot(cell);
            root.render(<SourceDevice />);
        }
    }, []);

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
        console.log("Terminating horizontal line", id);
        const number = id.match(/^\d+/)?.[0] || '';
        const letter = id.match(/[A-Za-z]+$/)?.[0] || '';
        const nextnum = parseInt(number);
        const currentLetterNo = alphabet.indexOf(letter);
        for (let i = currentLetterNo + 1; i < cols; i++) {
            const nextLetter = alphabet[i];
            const nextCellId = String(nextnum) + nextLetter;
            console.log("next cell id: " + nextCellId);
            if (nextCellId in devicemap) {
                console.log("Device already exists in the cell");
                break;
            }
            const cell = document.getElementById(String(nextCellId));
            if (cell) {
                const root = ReactDOM.createRoot(cell);
                root.render(<HorizontalLine />);
            }
        }
    };

    const terminateVertical = (id) => {
        console.log("Terminating vertical line", id);
        const number = id.match(/^\d+/)?.[0] || '';
        const letter = id.match(/[A-Za-z]+$/)?.[0] || '';
        const nextnum = parseInt(number) + 1;
        for (let i = nextnum; i <= rows; i++) {
            const nextCellId = String(i) + letter;
            console.log("next cell id: " + nextCellId);
            const cell = document.getElementById(String(nextCellId));
            if (cell) {
                cell.style.textAlign = "center";
                cell.style.verticalAlign = "middle";
                const root = ReactDOM.createRoot(cell);
                root.render(<VerticalLine />);
            }
        }
    };

    const terminateUp = (id) => {
        console.log("Terminating vertical line", id);
        const number = id.match(/^\d+/)?.[0] || '';
        const letter = id.match(/[A-Za-z]+$/)?.[0] || '';
        const nextnum = parseInt(number) - 1;
        console.log("nextnum: " + nextnum);
        for (let i = nextnum; i > 0; i--) {
            const nextCellId = String(i) + letter;
            console.log("next cell id: " + nextCellId);
            if (nextCellId in devicemap) {
                console.log("Device already exists in the cell");
                break;
            }
            const cell = document.getElementById(String(nextCellId));
            if (cell) {
                cell.style.textAlign = "center";
                cell.style.verticalAlign = "middle";
                const root = ReactDOM.createRoot(cell);
                root.render(<VerticalLine />);
            }
        }
    };

    return (
        <div className='col col-10 mt-2'>
            {/* Buttons to add new rows and columns */}
            <div className="mb-3">
                <button className="btn btn-primary me-2" onClick={addColumn}>Add Column</button>
                <button className="btn btn-primary" onClick={addRow}>Add Row</button>
            </div>

            {/* Render table dynamically based on state */}
            <table className="table overflow-scroll" id="drawingtable">
                <thead>
                    <tr>
                        <th>#</th>
                        {Array.from({ length: cols }, (_, i) => (
                            <th key={i}>{alphabet[i] || String.fromCharCode(65 + (i % 26))}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: rows }, (_, rowIndex) => (
                        <tr key={rowIndex}>
                            <th>{rowIndex + 1}</th>
                            {Array.from({ length: cols }, (_, colIndex) => {
                                const cellId = getCellId(rowIndex + 1, colIndex + 1);
                                return (
                                    <td
                                        key={cellId}
                                        id={cellId}
                                        style={{ borderBottom: '1px solid #dee2e6' }}
                                    >
                                        &nbsp;
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* The modal dialogs remain unchanged */}
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
                                    <form id="replacedeviceform">
                                        <input type='hidden' name='devicemodalposition' id='devicemodalposition' />
                                        <DeviceOptionsGrid />
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
