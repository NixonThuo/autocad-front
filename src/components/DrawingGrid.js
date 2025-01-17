import React from 'react';
import { useEffect } from "react";
import DeviceOptionsGrid from './DeviceOptionsGrid';
import DeviceButtonTop from './DeviceButtonTop';
import SourceDevice from './SourceDevice'
import ReactDOM from 'react-dom';


function DrawingGrid() {
    let rows = 7;
    let cols = 7;

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
        ReactDOM.render(
            <DeviceButtonTop devicename={partnum} partnum={partdesc} btnpos={nextCellId} />,
            cell
        );
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
    };

    useEffect(() => {
        console.log("finished rendering");

        const cell = document.getElementById(String("1A"));
        ReactDOM.render(
            <SourceDevice />,
            cell
        );

    });

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

        </div>
    );
}

export default DrawingGrid;