import React, { useRef, useEffect } from 'react';

function DrawingGridCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const cellWidth = 100;
        const cellHeight = 50;
        const rows = 7;
        const cols = 6;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw grid cells
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const x = col * cellWidth;
                const y = row * cellHeight;

                if (row === 0 && (col === 0 || col === 1)) {
                    // Render DeviceButton in cells (0,0) and (0,1)
                    ctx.fillStyle = '#007bff'; // Customize color for DeviceButton cells
                    ctx.fillRect(x, y, cellWidth, cellHeight);
                } else {
                    ctx.fillStyle = '#e0e0e0'; // Customize color for empty cells
                    ctx.fillRect(x, y, cellWidth, cellHeight);
                }
            }
        }
    }, []);

    return (
        <div className='col col-10 mt-2'>
            <canvas ref={canvasRef} width={600} height={350} />
        </div>
    );
}

export default DrawingGridCanvas;
