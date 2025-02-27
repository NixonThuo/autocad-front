import React, { useState } from 'react';

const VerticalLine = () => (
    <div style={{ borderLeft: '2px solid black', height: '100%' }}></div>
);

const Grid = () => {
    // Assume we have 10 rows for simplicity and cells like "1A", "2A", etc.
    const rows = Array.from({ length: 10 }, (_, i) => i + 1);
    const letter = 'A';

    // verticalLines is an object where keys are cell IDs (e.g., "3A")
    // and the value is true if that cell should display a VerticalLine.
    const [verticalLines, setVerticalLines] = useState({});

    // Instead of rendering directly into the DOM,
    // we update our state to indicate which cells need a vertical line.
    const terminateUp = (id) => {
        console.log("Terminating vertical line from", id);
        const number = id.match(/^\d+/)?.[0] || '';
        const letter = id.match(/[A-Za-z]+$/)?.[0] || '';
        const nextnum = parseInt(number) - 1;
        console.log("nextnum:", nextnum);

        // Create a new object to update state immutably.
        const updatedLines = { ...verticalLines };

        // For every cell upward (with decreasing row numbers), mark it to display the vertical line.
        for (let i = nextnum; i > 0; i--) {
            const nextCellId = `${i}${letter}`;
            console.log("next cell id:", nextCellId);

            // If a vertical line (or any device) is already set in this cell, break.
            if (updatedLines[nextCellId]) {
                console.log("Vertical line already exists at", nextCellId);
                break;
            }

            // Otherwise, mark the cell.
            updatedLines[nextCellId] = true;
        }

        // Update state; React will automatically re-render the affected cells.
        setVerticalLines(updatedLines);
    };

    return (
        <div>
            {/* For testing, a button to trigger terminateUp on cell "5A" */}
            <button onClick={() => terminateUp('5A')}>Terminate Up from 5A</button>
            <div className="grid" style={{ display: 'flex', flexWrap: 'wrap', width: '220px' }}>
                {rows.map((row) => {
                    const cellId = `${row}${letter}`;
                    return (
                        <div
                            key={cellId}
                            id={cellId}
                            style={{
                                border: '1px solid gray',
                                width: '50px',
                                height: '50px',
                                textAlign: 'center',
                                verticalAlign: 'middle',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {verticalLines[cellId] && <VerticalLine />}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Grid;
