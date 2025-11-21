import Ship from './ships';

export default class Gameboard {
    constructor(boardSize = 10) {
        this.boardSize = boardSize;
        this.ships = [];
        this.missedAttacks = [];
        this.attackReceived = new Set();
    }

    resetBoard() {
        this.ships = [];
        this.missedAttacks = [];
        this.attackReceived.clear();
    }

    placeShipsRandomly() {
        this.resetBoard();

        const shipLengths = [5, 4, 3, 3, 2];

        shipLengths.forEach((length) => {
            let placed = false;
            while (!placed) {
                const x = Math.floor(Math.random() * this.boardSize);
                const y = Math.floor(Math.random() * this.boardSize);
                const isVertical = Math.random() < 0.5;

                try {
                    this.placeShip(length, { x, y }, isVertical);
                    placed = true;
                } catch (error) {}
            }
        });
    }

    placeShip(length, startCoord, isVertical = false) {
        const ship = new Ship(length);
        const positions = [];

        for (let i = 0; i < length; i++) {
            const x = startCoord.x + (isVertical ? 0 : i);
            const y = startCoord.y + (isVertical ? i : 0);
            if (x > this.boardSize - 1 || y > this.boardSize - 1) {
                throw new Error("Ship doesn't fit");
            }
            positions.push({ x, y });
        }

        // Prevent ship overlap
        for (const existingShip of this.ships) {
            for (const pos of existingShip.positions) {
                if (positions.some((p) => p.x === pos.x && p.y === pos.y)) {
                    throw new Error('Ships cannot overlap');
                }
            }
        }

        this.ships.push({
            instance: ship,
            positions,
        });

        return ship;
    }

    receiveAttack(coordinates) {
        this.attackReceived.add(coordinates);
        let hitShip = false;
        for (const ship of this.ships) {
            for (const pos of ship.positions) {
                if (coordinates.x === pos.x && coordinates.y === pos.y) {
                    ship.instance.hit();
                    hitShip = true;
                    return {
                        status: 'hit',
                        instance: ship,
                    };
                }
            }
        }

        if (!hitShip) {
            this.missedAttacks.push(coordinates);
        }
        return {
            status: 'missed',
        };
    }

    allShipsSunk() {
        return this.ships.every((ship) => ship.instance.isSunk());
    }

    isValidCoordinate(x, y) {
        return x >= 0 && x <= this.boardSize && y >= 0 && y <= this.boardSize;
    }

    // Place
    // placeDefaultShips() {
    //     this.placeShip(5, { x: 0, y: 0 }, false);
    //     this.placeShip(4, { x: 2, y: 2 }, true);
    //     this.placeShip(3, { x: 5, y: 5 }, false);
    //     this.placeShip(3, { x: 7, y: 1 }, true);
    //     this.placeShip(2, { x: 8, y: 7 }, false);
    // }

    getCellData(cellCoord) {
        const { x, y } = cellCoord;
        let hasShip = false;
        let wasAttacked = false;

        if (!this.ships) {
            return;
        }

        this.ships.forEach((ship) => {
            for (const pos of ship.positions) {
                if (pos.x === x && pos.y === y) {
                    hasShip = true;
                }
            }
        });
        for (const attack of this.attackReceived) {
            if (attack.x === x && attack.y === y) {
                wasAttacked = true;
            }
        }
        return {
            hasShip,
            wasAttacked,
        };
    }

    getBoardState() {
        const results = [];

        for (let y = 0; y < this.boardSize; y++) {
            for (let x = 0; x < this.boardSize; x++) {
                results.push({
                    x,
                    y,
                    ...this.getCellData({ x, y }),
                });
            }
        }
        return results;
    }
}
