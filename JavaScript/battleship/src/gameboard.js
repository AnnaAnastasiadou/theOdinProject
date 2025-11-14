import Ship from './ships';

export default class Gameboard {
    constructor(boardSize = 10) {
        this.boardSize = boardSize;
        this.ships = [];
        this.missedAttacks = [];
        this.attackReceived = new Set();
    }

    placeShip(length, startCoord, isVertical = false) {
        const ship = new Ship(length);
        const positions = [];

        for (let i = 0; i < length; i++) {
            const x = startCoord.x + (isVertical ? 0 : i);
            const y = startCoord.y + (isVertical ? i : 0);
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
}
