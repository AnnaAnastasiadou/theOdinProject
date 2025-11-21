import Player from './player';

describe('Player class', () => {
    beforeEach(() => {
        Player.nextId = 1;
    });
    test('creates a player with correct type', () => {
        const player = new Player();
        expect(player.type).toBe('real');
        const computer = new Player('computer');
        expect(computer.type).toBe('computer');
    });
    test('creates a player with unique id', () => {
        const player1 = new Player();
        const player2 = new Player();
        expect(player1.id).toBe(1);
        expect(player2.id).toBe(2);
    });
    test('each player has its own gameboard', () => {
        const player = new Player();
        expect(player.gameboard).toBeDefined();
        expect(player.gameboard.ships).toHaveLength(0);
    });
    test('throws error for invalid player type', () => {
        expect(() => new Player('robot')).toThrow();
    });
});
