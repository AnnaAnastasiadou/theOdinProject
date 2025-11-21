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

        this.playerBoardDiv = document.getElementById('player1-board');
        this.computerBoardDiv = document.getElementById('player2-board');

        // Buttons
        this.randomizeBtn = document.getElementById('randomize-btn');
        this.startBtn = document.getElementById('start-game-btn');
        this.restartBtn = document.getElementById('restart-game-btn');

        this.computerTargetStack = [];
        this.lastComputerHit = null;
        this.computerAxis = null;

        this.initializeGame();
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.computerBoardDiv.addEventListener('click', (e) => {
            this.handlePlayerAttack(e);
        });

        this.randomizeBtn.addEventListener('click', () => {
            if (!this.gameStarted) {
                this.randomizeShipPositions();
            }
        });

        this.restartBtn.addEventListener('click', () => {
            this.restartGame();
        });

        this.startBtn.addEventListener('click', () => {
            if (!this.gameStarted) {
                this.startGame();
            }
        });
    }

    initializeGame() {
        const { player, computer } = this.players;

        // Place ships
        player.gameboard.placeShipsRandomly();
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

        this.disablePlayerInput();
    }

    startGame() {
        console.log('starting...');
        this.gameStarted = true;

        // Disable buttons
        this.randomizeBtn.disabled = true;
        this.startBtn.disabled = true;

        this.enablePlayerInput();
    }

    randomizeShipPositions() {
        const player = this.players.player;
        player.gameboard.placeShipsRandomly();
        DOMManager.renderBoard(
            this.playerBoardDiv,
            player.gameboard.getBoardState(),
            true
        );
    }

    enablePlayerAttack() {
        this.computerBoardDiv.addEventListener('click', (e) => {
            this.handlePlayerAttack(e);
        });
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
        const computerBoardDiv = this.computerBoardDiv;

        // Prevent attacking the same cell
        const cellData = computer.gameboard.getCellData({ x, y });
        if (cellData.wasAttacked) return;

        // Perform attack
        computer.gameboard.receiveAttack({ x, y });

        const newCellData = computer.gameboard.getCellData({ x, y });

        // Re-render board
        DOMManager.updateCell(computerBoardDiv, x, y, newCellData);

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
            { x, y: y - 1 }, // down
            { x, y: y + 1 }, // up
            { x: x - 1, y }, // left
            { x: x + 1, y }, // right
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

        this.initializeGame();

        this.randomizeBtn.disabled = false;
        this.startBtn.disabled = false;
    }
}

new Game();
