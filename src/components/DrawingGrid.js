import React from 'react';
import DeviceOptionsGrid from './DeviceOptionsGrid';
import DeviceButtonTop from './DeviceButtonTop';
import ReactDOM from 'react-dom';

function DrawingGrid() {
    // Function to add a button to a specific row
    const addButtonRight = (id) => {
        console.log("passed id");
        console.log(id);
        console.log("adding button to cell");
        const nextCellId = parseInt(id) + 1;
        console.log("next cell id: " + nextCellId);
        const cell = document.getElementById(String(nextCellId));
        console.log(cell);
        console.log(document.getElementById("deviceslistgrid").value);
        const sel = document.getElementById("deviceslistgrid");
        const partnum = sel.options[sel.selectedIndex].getAttribute("data-partnum");
        console.log(partnum);
        const partdesc = sel.options[sel.selectedIndex].getAttribute("data-desc");
        console.log(partdesc);
        ReactDOM.render(
            <DeviceButtonTop devicename={partnum} partnum={partdesc} btnpos={nextCellId} />,
            cell
        );
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
                        <td id="1">&nbsp;</td>
                        <td id="2">&nbsp;</td>
                        <td id="3">&nbsp;</td>
                        <td id="4">&nbsp;</td>
                        <td id="5">&nbsp;</td>
                        <td id="6">&nbsp;</td>
                        <td id="7">&nbsp;</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td id="8">&nbsp;</td>
                        <td id="9">&nbsp;</td>
                        <td id="10">&nbsp;</td>
                        <td id="11">&nbsp;</td>
                        <td id="12">&nbsp;</td>
                        <td id="13">&nbsp;</td>
                        <td id="14">&nbsp;</td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td id="15">&nbsp;</td>
                        <td id="16">&nbsp;</td>
                        <td id="17">&nbsp;</td>
                        <td id="18">&nbsp;</td>
                        <td id="19">&nbsp;</td>
                        <td id="20">&nbsp;</td>
                        <td id="21">&nbsp;</td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td id="22">&nbsp;</td>
                        <td id="23">&nbsp;</td>
                        <td id="24">&nbsp;</td>
                        <td id="25">&nbsp;</td>
                        <td id="26">&nbsp;</td>
                        <td id="27">&nbsp;</td>
                        <td id="28">&nbsp;</td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td id="29">&nbsp;</td>
                        <td id="30">&nbsp;</td>
                        <td id="31">&nbsp;</td>
                        <td id="32">&nbsp;</td>
                        <td id="33">&nbsp;</td>
                        <td id="34">&nbsp;</td>
                        <td id="35">&nbsp;</td>
                    </tr>
                    <tr>
                        <th>6</th>
                        <td id="36">&nbsp;</td>
                        <td id="37">&nbsp;</td>
                        <td id="38">&nbsp;</td>
                        <td id="39">&nbsp;</td>
                        <td id="40">&nbsp;</td>
                        <td id="41">&nbsp;</td>
                        <td id="42">&nbsp;</td>
                    </tr>
                    <tr>
                        <th>7</th>
                        <td id="43">&nbsp;</td>
                        <td id="44">&nbsp;</td>
                        <td id="45">&nbsp;</td>
                        <td id="46">&nbsp;</td>
                        <td id="47">&nbsp;</td>
                        <td id="48">&nbsp;</td>
                        <td id="49">&nbsp;</td>
                    </tr>
                </tbody>
            </table>


            <div className="modal fade" id="devicerightmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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

        </div>
    );
}

export default DrawingGrid;