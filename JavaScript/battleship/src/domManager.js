const DOMManager = {
    createBoard(boardDiv, boardSize) {
        boardDiv.innerHTML = '';
        boardDiv.style.display = 'grid';
        boardDiv.style.gridTemplateColumns = `repeat(${boardSize}, 2rem)`;
        boardDiv.style.gridTemplateRows = `repeat(${boardSize}, 2rem)`;
        for (let y = 0; y < boardSize; y++) {
            for (let x = 0; x < boardSize; x++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.x = x;
                cell.dataset.y = y;
                cell.style.borderLeft = '2px solid black';
                cell.style.borderTop = '2px solid black';
                if (x === boardSize - 1) {
                    cell.style.borderRight = '2px solid black';
                }
                if (y === boardSize - 1) {
                    cell.style.borderBottom = '2px solid black';
                }
                boardDiv.appendChild(cell);
            }
        }
    },
};

export default DOMManager;
