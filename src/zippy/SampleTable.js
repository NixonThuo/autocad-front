import React, { useState } from 'react';

function DynamicTable() {
    // Initialize a 7x7 grid where each cell holds an array of buttons.
    const initialGrid = Array.from({ length: 7 }, () =>
        Array.from({ length: 7 }, () => [])
    );
    const [grid, setGrid] = useState(initialGrid);
    const [buttonCount, setButtonCount] = useState(0);

    // Function to add a button to a specific cell
    const handleCellClick = (rowIndex, colIndex) => {
        const newGrid = grid.map((row, r) =>
            row.map((cell, c) => {
                if (r === rowIndex && c === colIndex) {
                    return [...cell, `Button ${buttonCount + 1}`];
                }
                return cell;
            })
        );
        setGrid(newGrid);
        setButtonCount(buttonCount + 1);
    };

    return (
        <div>
            <table border="1" style={{ borderCollapse: 'collapse' }}>
                <tbody>
                    {grid.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <td
                                    key={colIndex}
                                    style={{
                                        padding: '10px',
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        minWidth: '100px',
                                        minHeight: '50px'
                                    }}
                                    onClick={() => handleCellClick(rowIndex, colIndex)}
                                >
                                    {cell.map((btnLabel, idx) => (
                                        <button
                                            key={idx}
                                            onClick={(e) => {
                                                // Prevent the cell's onClick from firing when clicking the button.
                                                e.stopPropagation();
                                                alert(`${btnLabel} clicked at cell (${rowIndex + 1}, ${colIndex + 1})`);
                                            }}
                                            style={{ margin: '2px' }}
                                        >
                                            {btnLabel}
                                        </button>
                                    ))}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Click on any cell to add a button to that cell.</p>
        </div>
    );
}

export default DynamicTable;
