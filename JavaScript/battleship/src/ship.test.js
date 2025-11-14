import Ship from './ships';

describe('Ship class', () => {
    let ship;
    beforeEach(() => {
        ship = new Ship(3);
    });
    test('Correct length', () => {
        expect(ship.length).toBe(3);
    });
    test('Hits initialized correctly', () => {
        expect(ship.hits).toBe(0);
    });
    test('Sunk variable initialized correctly', () => {
        expect(ship.sunk).toBe(false);
    });
    test('hit() increases hit counts', () => {
        ship.hit();
        ship.hit();
        expect(ship.hits).toBe(2);
    });
    test('isSunk() returns false when hits < length', () => {
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(false);
    });
    test('isSunk() returns true when hits=length', () => {
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });
    test("hits > length don't affect sunk status", () => {
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
        expect(ship.hits).toBe(4);
    });
});
