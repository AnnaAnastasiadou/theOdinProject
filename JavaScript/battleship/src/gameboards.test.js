import Gameboard from './gameboard';

describe('Gameboard class', () => {
    let gameboard;
    beforeEach(() => {
        gameboard = new Gameboard();
    });

    test('boardSize initialized correctly', () => {
        expect(gameboard.boardSize).toBe(10);
    });
    test('ships initialized correctly', () => {
        expect(gameboard.ships).toHaveLength(0);
    });
    test('boardSize initialized correctly', () => {
        expect(gameboard.missedAttacks).toHaveLength(0);
    });
    test('places a horizontal ship correctly', () => {
        gameboard.placeShip(3, { x: 1, y: 2 });
        expect(gameboard.ships[0].positions).toEqual([
            { x: 1, y: 2 },
            { x: 2, y: 2 },
            { x: 3, y: 2 },
        ]);
    });
    test('places a vertical ship correctly', () => {
        gameboard.placeShip(3, { x: 1, y: 2 }, true);
        expect(gameboard.ships[0].positions).toEqual([
            { x: 1, y: 2 },
            { x: 1, y: 3 },
            { x: 1, y: 4 },
        ]);
    });
    test('places multiple ships without overlap', () => {
        gameboard.placeShip(3, { x: 0, y: 0 });
        gameboard.placeShip(3, { x: 2, y: 2 });
        expect(gameboard.ships).toHaveLength(2);
        expect(gameboard.ships[1].positions).toEqual([
            { x: 2, y: 2 },
            { x: 3, y: 2 },
            { x: 4, y: 2 },
        ]);
    });
    test('throws error for overlapping ships', () => {
        gameboard.placeShip(3, { x: 0, y: 0 });
        expect(() => {
            gameboard.placeShip(2, { x: 2, y: 0 });
        }).toThrow(/Invalid/);
    });
    test('attack: unsuccessful hit', () => {
        gameboard.placeShip(3, { x: 0, y: 0 });
        const attack = gameboard.receiveAttack({ x: 1, y: 1 });
        expect(attack.status).toEqual('missed');
    });
    test('attack: successful hit', () => {
        gameboard.placeShip(3, { x: 0, y: 0 });
        const attack = gameboard.receiveAttack({ x: 0, y: 0 });
        expect(attack.status).toEqual('hit');
    });
    test("cell has a ship but hasn't been attacked", () => {
        gameboard.placeShip(3, { x: 0, y: 0 });
        const cellData = gameboard.getCellData({ x: 1, y: 0 });
        expect(cellData.hasShip).toBe(true);
        expect(cellData.wasAttacked).toBe(false);
    });
    test("cell doesn't have a ship but has been attacked", () => {
        gameboard.placeShip(3, { x: 3, y: 5 });
        gameboard.receiveAttack({ x: 0, y: 0 });
        const boardState = gameboard.getBoardState();
        const cellData = boardState.find(
            (cell) => cell.x === 0 && cell.y === 0
        );
        expect(cellData).toBeDefined();
        expect(cellData.hasShip).toBe(false);
        expect(cellData.wasAttacked).toBe(true);
    });
});
