import Ship from './ships';

export default class Gameboard {
    constructor(boardSize = 10) {
        this.boardSize = boardSize;
        this.ships = [];
        this.missedAttacks = [];
        this.attackReceived = [];
    }

    resetBoard() {
        this.ships = [];
        this.missedAttacks = [];
        this.attackReceived = [];
    }

    clearShips() {
        this.ships = [];
    }

    canPlaceShip(length, startCoord, isVertical = false) {
        const { x, y } = startCoord;

        // boundary check
        if (x < 0 || y < 0 || x >= 10 || y >= 10) return false;
        if (isVertical === false) {
            if (x + length > this.boardSize) return false;
        } else {
            if (y + length > this.boardSize) return false;
        }

        // overlap check against existing ships
        for (let i = 0; i < length; i++) {
            const checkX = isVertical ? x : x + i;
            const checkY = isVertical ? y + i : y;

            for (const ship of this.ships) {
                for (const pos of ship.positions) {
                    if (pos.x === checkX && pos.y === checkY) return false;
                }
            }
        }
        return true;
    }

    placeShip(length, startCoord, isVertical = false) {
        if (!this.canPlaceShip(length, startCoord, isVertical))
            throw new Error('Invalid placement');

        const ship = new Ship(length);
        const positions = [];

        for (let i = 0; i < length; i++) {
            const x = startCoord.x + (isVertical ? 0 : i);
            const y = startCoord.y + (isVertical ? i : 0);
            positions.push({ x, y });
        }

        this.ships.push({
            instance: ship,
            positions,
        });
        return ship;

        // const ship = new Ship(length);
        // const positions = [];
        // for (let i = 0; i < length; i++) {
        //     const x = startCoord.x + (isVertical ? 0 : i);
        //     const y = startCoord.y + (isVertical ? i : 0);
        //     if (x > this.boardSize - 1 || y > this.boardSize - 1) {
        //         throw new Error("Ship doesn't fit");
        //     }
        //     positions.push({ x, y });
        // }
        // // Prevent ship overlap
        // for (const existingShip of this.ships) {
        //     for (const pos of existingShip.positions) {
        //         if (positions.some((p) => p.x === pos.x && p.y === pos.y)) {
        //             throw new Error('Ships cannot overlap');
        //         }
        //     }
        // }
        // this.ships.push({
        //     instance: ship,
        //     positions,
        // });
        // return ship;
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

    receiveAttack(coordinates) {
        this.attackReceived.push(coordinates);
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

    hasAtLeastOneShip() {
        return this.ships.length > 0;
    }

    hasAllShipsPlaced() {
        return this.ships.length === 5;
    }

    allShipsSunk() {
        return this.ships.every((ship) => ship.instance.isSunk());
    }

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
