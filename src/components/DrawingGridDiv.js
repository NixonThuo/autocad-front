import React from 'react';
import DeviceButton from '../components/DeviceButton';
import '../css/DrawingGridDiv.css'; // Import CSS for styling

function DrawingGridDiv() {
    return (
        <div className='col col-10 mt-2'>
            <div className="grid-container">
                {/* Header row */}
                <div className="grid-row header-row">
                    <div className="grid-cell header-cell">#</div>
                    <div className="grid-cell header-cell">A</div>
                    <div className="grid-cell header-cell">B</div>
                    <div className="grid-cell header-cell">C</div>
                    <div className="grid-cell header-cell">D</div>
                    <div className="grid-cell header-cell">E</div>
                    <div className="grid-cell header-cell">F</div>
                </div>
                
                {/* Rows */}
                {[...Array(7)].map((_, rowIndex) => (
                    <div key={rowIndex} className="grid-row">
                        <div className="grid-cell">{rowIndex + 1}</div>
                        {[...Array(6)].map((_, colIndex) => (
                            <div key={colIndex} className="grid-cell">
                                {rowIndex === 0 && colIndex < 2 ? <DeviceButton /> : <>&nbsp;</>}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DrawingGridDiv;
