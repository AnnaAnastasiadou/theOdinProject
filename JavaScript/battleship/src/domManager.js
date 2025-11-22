const DOMManager = {
    createBoard(boardDiv, boardSize, isComputerBoard = false) {
        boardDiv.innerHTML = '';
        boardDiv.style.display = 'grid';
        boardDiv.style.gap = '2px';

        boardDiv.style.gridTemplateColumns = `auto repeat(${boardSize}, 2rem)`;
        boardDiv.style.gridTemplateRows = `auto repeat(${boardSize}, 2rem)`;
        boardDiv.style.width = 'max-content';

        for (let y = 0; y < boardSize + 1; y++) {
            for (let x = 0; x < boardSize + 1; x++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');

                // UI label coordinates
                if (y === 0 && x > 0) {
                    cell.textContent = String.fromCharCode(
                        'A'.charCodeAt(0) + x - 1
                    );
                    cell.classList.add('label');
                    // Ensure labels don't force minimum size
                    cell.style.minWidth = '0';
                    cell.style.minHeight = '0';
                } else if (x === 0 && y > 0) {
                    cell.textContent = y;
                    cell.classList.add('label');
                    cell.style.minWidth = '0';
                    cell.style.minHeight = '0';
                } else if (x === 0 && y === 0) {
                    cell.classList.add('label');
                    cell.style.minWidth = '0';
                    cell.style.minHeight = '0';
                }

                // Playable cells
                if (x > 0 && y > 0) {
                    cell.dataset.x = x - 1; // translate to game coords
                    cell.dataset.y = y - 1;
                    if (isComputerBoard) {
                        cell.classList.add('playable');
                    }
                    // Ensure fixed size for playable cells
                    cell.style.width = '2rem';
                    cell.style.height = '2rem';
                    cell.style.minWidth = '2rem';
                    cell.style.minHeight = '2rem';
                }
                boardDiv.appendChild(cell);
            }
        }
    },
    renderBoard(boardDiv, boardState, showShips = false) {
        boardState.forEach(({ x, y, hasShip, wasAttacked }) => {
            const cell = boardDiv.querySelector(
                `[data-x="${x}"][data-y="${y}"]`
            );
            if (!cell) {
                throw new Error(`Cell x:${x}, y:${y} doesn't exist`);
            }

            cell.classList.toggle('ship', hasShip && showShips);
            cell.classList.toggle('playerView', showShips);
        });
    },

    updateCell(boardDiv, x, y, cellData, showShips = false) {
        const cell = boardDiv.querySelector(`[data-x="${x}"][data-y="${y}"]`);
        if (!cell) {
            throw new Error(`Cell x:${x}, y:${y} doesn't exist`);
        }

        const { hasShip, wasAttacked } = cellData;

        cell.classList.remove('playable');

        cell.classList.toggle('ship', hasShip && showShips);
        cell.classList.toggle('hit', hasShip && wasAttacked);
        cell.classList.toggle('miss', !hasShip && wasAttacked);
    },

    updateDockOrientation(axis) {
        const bodies = document.querySelectorAll('.ship-body');
        bodies.forEach((body) => {
            if (axis === 'y') {
                body.classList.remove('horizontal');
                body.classList.add('vertical');
            } else {
                body.classList.remove('vertical');
                body.classList.add('horizontal');
            }
        });
    },

    highlightShipPlacement(boardDiv, length, startCoord, orientation, isValid) {
        this.clearPlacementHighlight(boardDiv);
        const { x, y } = startCoord;

        for (let i = 0; i < length; i++) {
            const hx = orientation === 'horizontal' ? x + i : x;
            const hy = orientation === 'horizontal' ? y : y + i;

            const cell = boardDiv.querySelector(
                `[data-x="${hx}"][data-y="${hy}"]`
            );
            if (cell) {
                cell.classList.add(isValid ? 'hover-valid' : 'hover-invalid');
            }
        }
    },

    clearPlacementHighlight(boardDiv) {
        const cells = boardDiv.querySelectorAll('.cell');
        cells.forEach((cell) =>
            cell.classList.remove('hover-valid', 'hover-invalid')
        );
    },

    toggleShipBodies() {
        const bodies = document.querySelectorAll('.ship-body');
        bodies.forEach((body) => {
            // body.classList.remove('horizontal', 'vertical');
            body.classList.toggle('horizontal');
            body.classList.toggle('vertical');
        });
    },

    hideShipDock() {
        document.querySelector('.ships-container').classList.add('hidden');
    },

    showShipDock() {
        document.querySelector('.ships-container').classList.remove('hidden');
    },

    resetShipDock() {
        document
            .querySelectorAll('.ship-wrapper')
            .forEach((wrapper) => wrapper.classList.remove('hidden'));
    },

    resetDock() {
        document
            .querySelectorAll('.ship-wrapper')
            .forEach((el) => el.classList.remove('hidden'));
        document.getElementById('rotate-btn').remove('hidden');
    },

    updateControls({
        startDisabled,
        randomizedDisabled,
        clearDisabled,
        rotateDisabled,
    }) {
        document.getElementById('start-game-btn').disabled = startDisabled;
        document.getElementById('randomize-btn').disabled = randomizedDisabled;
        document.getElementById('clear-btn').disabled = clearDisabled;
        document.getElementById('rotate-btn').disabled = rotateDisabled;
    },

    showGameMessage(text) {
        const modal = document.getElementById('game-message');
        const msgText = document.getElementById('game-message-text');
        msgText.textContent = text;

        msgText.classList.remove('win');
        msgText.classList.remove('lose');

        if (msgText.textContent.toLowerCase().includes('win')) {
            msgText.classList.add('win');
        } else if (msgText.textContent.toLowerCase().includes('lose')) {
            msgText.classList.add('lose');
        }
        modal.classList.remove('hidden');
    },

    hideGameMessage() {
        document.getElementById('game-message').classList.add('hidden');
    },
};

export default DOMManager;
