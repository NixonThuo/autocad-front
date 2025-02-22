import { useState } from "react";

const CELL_SIZE = 40; // Define cell size

export default function DrawingGrid() {
    const [gridSize, setGridSize] = useState(10);
    const [objects, setObjects] = useState([]); // Store object positions

    const handleClick = (row, col) => {
        setObjects((prev) => [...prev, { row, col, color: randomColor(), icon: "🔵" }]);
    };

    const addObjectManually = () => {
        setObjects((prev) => [...prev, { row: 2, col: 3, color: "blue", icon: "🔵" }]);
    };

    const undoLast = () => {
        setObjects((prev) => prev.slice(0, -1));
    };

    const clearGrid = () => {
        setObjects([]);
    };

    return (
        <div className="flex flex-col items-center gap-4 p-4">
            <div>
                <label className="mr-2">Grid Size:</label>
                <input
                    type="number"
                    value={gridSize}
                    onChange={(e) => setGridSize(Number(e.target.value) || 10)}
                    className="border px-2 py-1"
                    min="1"
                />
            </div>
            <div className="grid" style={{ gridTemplateColumns: `repeat(${gridSize}, ${CELL_SIZE}px)` }}>
                {[...Array(gridSize)].map((_, row) =>
                    [...Array(gridSize)].map((_, col) => {
                        const found = objects.find((obj) => obj.row === row && obj.col === col);
                        return (
                            <div
                                key={`${row}-${col}`}
                                className="border border-gray-300 w-[40px] h-[40px] flex items-center justify-center"
                                onClick={() => handleClick(row, col)}
                                style={{ backgroundColor: found ? found.color : "transparent" }}
                            >
                                {found ? found.icon : ""}
                            </div>
                        );
                    })
                )}
            </div>
            <div className="flex gap-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={undoLast}>Undo</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={clearGrid}>Clear</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={addObjectManually}>Add Object at (2,3)</button>
            </div>
            <div className="mt-4">
                <h2 className="text-lg font-bold">Object Positions:</h2>
                <ul>
                    {objects.map((obj, index) => (
                        <li key={index}>
                            Row: {obj.row}, Col: {obj.col}, Color: {obj.color}, Icon: {obj.icon}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function randomColor() {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
}
