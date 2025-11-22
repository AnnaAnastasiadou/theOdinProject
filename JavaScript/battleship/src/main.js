import './styles.css';
import Ship from './ships';
import Gameboard from './gameboard';
import Player from './player';
import DOMManager from './domManager';

class Game {
    constructor() {
        this.players = {
            player: new Player(),
            computer: new Player('computer'),
        };

        this.currentPlayer = 'player';
        this.gameStarted = false;
        this.shipOrientation = 'horizontal';

        this.playerBoardDiv = document.getElementById('player1-board');
        this.computerBoardDiv = document.getElementById('player2-board');

        // Buttons
        this.randomizeBtn = document.getElementById('randomize-btn');
        this.startBtn = document.getElementById('start-game-btn');
        this.restartBtn = document.getElementById('restart-game-btn');
        this.rotateBtn = document.getElementById('rotate-btn');
        this.clearBtn = document.getElementById('clear-btn');

        this.computerTargetStack = [];
        this.lastComputerHit = null;
        this.computerAxis = null;

        this.draggedShip = null;

        this.initializeGame();
        this.setupEventListeners();
    }

    initializeGame() {
        const { player, computer } = this.players;
        computer.gameboard.placeShipsRandomly();

        // Render player board
        DOMManager.createBoard(this.playerBoardDiv, player.gameboard.boardSize);
        DOMManager.renderBoard(
            this.playerBoardDiv,
            player.gameboard.getBoardState(),
            true
        );

        // Render computer board
        DOMManager.createBoard(
            this.computerBoardDiv,
            computer.gameboard.boardSize,
            true
        );

        DOMManager.renderBoard(
            this.computerBoardDiv,
            computer.gameboard.getBoardState(),
            false
        );

        DOMManager.updateControls({
            startDisabled: true,
            randomizedDisabled: false,
            clearDisabled: true,
            rotateDisabled: false,
        });
        DOMManager.showShipDock();
        this.disablePlayerInput();
    }

    setupEventListeners() {
        // Plater attacks computer board
        this.computerBoardDiv.addEventListener('click', (e) =>
            this.handlePlayerAttack(e)
        );

        // Randomize ships
        this.randomizeBtn.addEventListener('click', () => {
            if (!this.gameStarted) {
                this.randomizeShipPositions();
            }
        });

        // Restart game
        this.restartBtn.addEventListener('click', () => {
            this.restartGame();
        });

        // Start game
        this.startBtn.addEventListener('click', () => {
            if (!this.gameStarted) {
                this.startGame();
            }
        });

        // Rotate ships
        this.rotateBtn.addEventListener('click', () => {
            this.toggleShipOrientation();
        });

        // Clear board
        this.clearBtn.addEventListener('click', () => {
            this.clearPlayerBoard();
            this.clearBtn.disabled = true;
        });

        this.initializeShips();

        // Drag and drop
        this.playerBoardDiv.addEventListener('dragover', (e) => {
            e.preventDefault();
            this.handleDragOver(e);
        });

        this.playerBoardDiv.addEventListener('dragleave', (e) => {
            if (!this.gameStarted)
                DOMManager.clearPlacementHighlight(this.playerBoardDiv);
        });
        this.playerBoardDiv.addEventListener('drop', (e) => {
            e.preventDefault();
            this.handleDrop(e);
        });
    }

    initializeShips() {
        const ships = document.querySelectorAll('.ship-body');
        ships.forEach((ship) => {
            ship.addEventListener('dragstart', (e) => {
                if (this.gameStarted) return e.preventDefault();
                this.draggedShip = ship;
                ship.classList.add('dragging');
                e.dataTransfer.setData('text/plain', ship.dataset.length);
            });

            ship.addEventListener('dragend', (e) => {
                this.draggedShip = null;
                ship.classList.remove('dragging');
                DOMManager.clearPlacementHighlight(this.playerBoardDiv);
            });
        });
    }

    // isValidPlacement(length, startCoord, orientation) {
    //     const { x, y } = startCoord;
    //     const boardSize = this.players.player.gameboard.boardSize;
    //     const isVertical = orientation === 'vertical';

    //     if (x < 0 || y < 0 || x >= 10 || y >= 10) return false;
    //     // Quick boundary check
    //     if (orientation === 'horizontal') {
    //         if (x + length > boardSize) return false;
    //     } else {
    //         if (y + length > boardSize) return false;
    //     }

    //     const player = this.players.player;
    //     for (let i = 0; i < length; i++) {
    //         const checkX = isVertical ? x : x + i;
    //         const checkY = isVertical ? y + i : y;
    //         const cellData = player.gameboard.getCellData({
    //             x: checkX,
    //             y: checkY,
    //         });
    //         if (cellData && cellData.hasShip) return false;
    //     }

    //     return true;
    // }

    handleDragOver(e) {
        if (!this.draggedShip || this.gameStarted) return;
        const cell = e.target.closest('.cell');
        if (!cell || !cell.dataset.x) return;

        // Highlight potential placement
        const shipLength = parseInt(this.draggedShip.dataset.length);
        const x = parseInt(cell.dataset.x);
        const y = parseInt(cell.dataset.y);

        const isValid = this.players.player.gameboard.canPlaceShip(
            shipLength,
            { x, y },
            this.shipOrientation === 'vertical'
        );

        DOMManager.highlightShipPlacement(
            this.playerBoardDiv,
            shipLength,
            { x, y },
            this.shipOrientation,
            isValid
        );
    }

    handleDragLeave(e) {
        // Remove highlighting when leaving cells
        const cell = e.target.closest('.cell');
        if (cell && cell.dataset.x) {
            DOMManager.clearPlacementHighlight(this.playerBoardDiv);
        }
    }

    handleDrop(e) {
        if (!this.draggedShip || this.gameStarted) return;

        const cell = e.target.closest('.cell');
        if (!cell || !cell.dataset.x) return;

        const x = parseInt(cell.dataset.x);
        const y = parseInt(cell.dataset.y);
        const shipLength = parseInt(this.draggedShip.dataset.length);

        try {
            const player = this.players.player;
            player.gameboard.placeShip(
                shipLength,
                { x, y },
                this.shipOrientation === 'vertical'
            );

            DOMManager.renderBoard(
                this.playerBoardDiv,
                player.gameboard.getBoardState(),
                true
            );

            // Hide the placed ship
            this.draggedShip.parentElement.classList.add('hidden');

            this.clearBtn.disabled = false;

            // Check if all ships are placed
            this.checkAllShipsPlaced();
        } catch (error) {
            console.log('Invalid placement', error.message);
        }

        DOMManager.clearPlacementHighlight(this.playerBoardDiv);
        this.draggedShip = null;
    }

    clearPlayerBoard() {
        const player = this.players.player;
        player.gameboard.clearShips();
        DOMManager.renderBoard(
            this.playerBoardDiv,
            player.gameboard.getBoardState(),
            true
        );
        DOMManager.resetShipDock();
        DOMManager.showShipDock();
        DOMManager.updateControls({
            startDisabled: true,
            randomizedDisabled: false,
            clearDisabled: true,
            rotateDisabled: false,
        });
    }

    toggleShipOrientation() {
        if (this.gameStarted) return;

        this.shipOrientation =
            this.shipOrientation === 'horizontal' ? 'vertical' : 'horizontal';
        DOMManager.toggleShipBodies();
    }

    checkAllShipsPlaced() {
        const shipWrappers = document.querySelectorAll('.ship-wrapper');
        const allHidden = [...shipWrappers].every((wrapper) => {
            return wrapper.classList.contains('hidden');
        });

        if (allHidden) {
            DOMManager.hideShipDock();
            DOMManager.updateControls({
                startDisabled: false,
                randomizedDisabled: false,
                clearDisabled: false,
                rotateDisabled: true,
            });
        }
    }

    startGame() {
        this.gameStarted = true;
        DOMManager.updateControls({
            startDisabled: true,
            randomizedDisabled: true,
            clearDisabled: true,
            rotateDisabled: true,
        });

        this.enablePlayerInput();
    }

    randomizeShipPositions() {
        const player = this.players.player;
        player.gameboard.placeShipsRandomly();
        DOMManager.hideShipDock();
        DOMManager.updateControls({
            startDisabled: false,
            randomizedDisabled: false,
            clearDisabled: false,
            rotateDisabled: true,
        });

        DOMManager.renderBoard(
            this.playerBoardDiv,
            player.gameboard.getBoardState(),
            true
        );
    }

    disablePlayerInput() {
        this.computerBoardDiv.style.pointerEvents = 'none';
    }

    enablePlayerInput() {
        this.computerBoardDiv.style.pointerEvents = 'auto';
    }

    handlePlayerAttack(e) {
        if (this.currentPlayer !== 'player') return;
        const cell = e.target.closest('.playable');
        if (!cell) return;

        const x = Number(cell.dataset.x);
        const y = Number(cell.dataset.y);
        const computer = this.players.computer;

        // Prevent attacking the same cell
        const cellData = computer.gameboard.getCellData({ x, y });
        if (cellData.wasAttacked) return;

        // Perform attack
        computer.gameboard.receiveAttack({ x, y });
        // Re-render board
        DOMManager.updateCell(
            this.computerBoardDiv,
            x,
            y,
            computer.gameboard.getCellData({ x, y })
        );

        // Win condition
        if (computer.gameboard.allShipsSunk()) {
            DOMManager.showGameMessage('You win');
            return;
        }

        this.disablePlayerInput();
        this.currentPlayer = 'computer';
        this.computerTurn();
    }

    getAdjacentCoordinates(x, y, axis = null) {
        let candidates = [
            { x, y: y - 1 },
            { x, y: y + 1 },
            { x: x - 1, y },
            { x: x + 1, y },
        ];

        const boardSize = this.players.computer.gameboard.boardSize;
        candidates = candidates.filter(
            (coord) =>
                coord.x >= 0 &&
                coord.x < boardSize &&
                coord.y >= 0 &&
                coord.y < boardSize
        );
        if (axis === 'x') {
            return candidates.filter((c) => c.x === x);
        } else if (axis === 'y') {
            return candidates.filter((c) => c.y === y);
        }

        return candidates;
    }

    computerTurn() {
        const player = this.players.player;
        let x, y, cellData;

        if (this.computerTargetStack.length > 0) {
            const target = this.computerTargetStack.pop();
            x = target.x;
            y = target.y;
            cellData = player.gameboard.getCellData({ x, y });
            if (cellData.wasAttacked) {
                this.computerTurn();
                return;
            }
        } else {
            this.computerAxis = null;
            this.lastComputerHit = null;
            do {
                x = Math.floor(Math.random() * 10);
                y = Math.floor(Math.random() * 10);
                cellData = player.gameboard.getCellData({ x, y });
            } while (cellData.wasAttacked);
        }

        // Execute attack
        player.gameboard.receiveAttack({ x, y });
        const newCellData = player.gameboard.getCellData({ x, y });

        // Update UI
        DOMManager.updateCell(this.playerBoardDiv, x, y, newCellData, true);

        if (newCellData.hasShip) {
            if (this.lastComputerHit && !this.computerAxis) {
                if (x === this.lastComputerHit.x) {
                    this.computerAxis = 'x';
                    this.computerTargetStack = this.computerTargetStack.filter(
                        (t) => t.x === x
                    );
                } else if (y === this.lastComputerHit.y) {
                    this.computerAxis = 'y';
                    this.computerTargetStack = this.computerTargetStack.filter(
                        (t) => t.y === y
                    );
                }
            }

            const neighbors = this.getAdjacentCoordinates(
                x,
                y,
                this.computerAxis
            );

            neighbors.forEach((coord) => {
                const neighborData = player.gameboard.getCellData(coord);
                // Only add if it hasn't been attacked yet
                if (!neighborData.wasAttacked) {
                    // Check if it's already in the stack
                    const inStack = this.computerTargetStack.some(
                        (t) => t.x === coord.x && t.y === coord.y
                    );
                    if (!inStack) {
                        this.computerTargetStack.push(coord);
                    }
                }
            });

            // Update last hit
            this.lastComputerHit = { x, y };
        }

        if (player.gameboard.allShipsSunk()) {
            DOMManager.showGameMessage('You lose');
            return;
        }

        this.enablePlayerInput();
        this.currentPlayer = 'player';
    }

    restartGame() {
        this.players = {
            player: new Player(),
            computer: new Player('computer'),
        };
        this.computerTargetStack = [];
        this.lastComputerHit = null;
        this.computerAxis = null;
        this.currentPlayer = 'player';

        this.gameStarted = false;

        this.playerBoardDiv.innerHTML = '';
        this.computerBoardDiv.innerHTML = '';

        DOMManager.hideGameMessage();

        document
            .querySelectorAll('.ship-wrapper')
            .forEach((w) => w.classList.remove('hidden'));

        this.initializeGame();

        this.randomizeBtn.disabled = false;
        this.startBtn.disabled = true;
        this.rotateBtn.disabled = false;
        this.clearBtn.disabled = false;
        this.rotateBtn.classList.remove('hidden');
        document.querySelector('.ships-container').classList.remove('hidden');
    }
}

new Game();
